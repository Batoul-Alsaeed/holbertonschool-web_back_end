import readDatabase from '../utils.js';

export default class StudentsController {
  static async getAllStudents(_req, res) {
    res.type('text');
    const dbPath = process.argv[2]; // read at execution time
    try {
      const groups = await readDatabase(dbPath);

      const header = 'This is the list of our students';

      // Sort fields case-insensitively
      const sortedFields = Object.keys(groups).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      );

      const lines = [header];
      for (const field of sortedFields) {
        const list = groups[field] || [];
        lines.push(
          `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`
        );
      }

      res.status(200).send(lines.join('\n'));
    } catch (e) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    res.type('text');
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const dbPath = process.argv[2]; // read at execution time
    try {
      const groups = await readDatabase(dbPath);
      const list = groups[major] || [];
      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (e) {
      res.status(500).send('Cannot load the database');
    }
  }
}
