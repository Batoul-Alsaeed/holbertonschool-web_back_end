const fs = require('fs');

function countStudents(path) {
  try {
    // Read file content synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split into lines and remove empty lines
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    // If file is empty or contains only headers
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Extract header and student rows
    const header = lines[0].split(',');
    const firstNameIndex = header.indexOf('firstname');
    const fieldIndex = header.indexOf('field');

    // Parse student data
    const students = lines.slice(1).map((line) => line.split(','));
    const totalStudents = students.length;

    console.log(`Number of students: ${totalStudents}`);

    // Group students by field
    const fields = {};
    students.forEach((student) => {
      const field = student[fieldIndex];
      const firstName = student[firstNameIndex];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    // Print result for each field
    for (const [field, list] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
  } catch (error) {
    // Throw error if file cannot be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
