const fs = require('fs');

function countStudents(path) {
  // Return a Promise as required
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Reject with the exact error message expected by tests
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split lines and remove empty ones (especially trailing empties)
      const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

      // If only header or empty after cleaning
      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      // Parse header to find column indexes
      const header = lines[0].split(',');
      const idxFirst = header.indexOf('firstname');
      const idxField = header.indexOf('field');

      // Parse rows and keep only valid rows matching header length
      const students = lines
        .slice(1)
        .map((line) => line.split(','))
        .filter((row) => row.length === header.length);

      console.log(`Number of students: ${students.length}`);

      // Group firstnames by field
      const byField = {};
      for (const row of students) {
        const field = row[idxField];
        const first = row[idxFirst];
        if (!byField[field]) byField[field] = [];
        byField[field].push(first);
      }

      // Log per-field stats
      for (const [field, list] of Object.entries(byField)) {
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
