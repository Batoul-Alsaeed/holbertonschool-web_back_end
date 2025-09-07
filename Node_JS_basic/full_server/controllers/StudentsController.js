import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(_req, res) {
    const dbPath = process.argv[2]; // read DB path at execution time
    try {
      const groups = await readDatabase(dbPath);

      const lines = ['This is the list of our students'];
      const fields = Object.keys(groups).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      );

      for (const field of fields) {
        const list = groups[field] || [];
        lines.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }

      res.status(200).type('text').send(lines.join('\n'));
    } catch (_e) {
      res.status(500).type('text').send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).type('text').send('Major parameter must be CS or SWE');
      return;
    }

    const dbPath = process.argv[2];
    try {
      const groups = await readDatabase(dbPath);
      const list = groups[major] || [];
      res.status(200).type('text').send(`List: ${list.join(', ')}`);
    } catch (_e) {
      res.status(500).type('text').send('Cannot load the database');
    }
  }
}
