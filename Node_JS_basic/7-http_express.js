const express = require('express');
const fs = require('fs');

// Async reader that matches Task 3 behavior
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((l) => l.trim() !== '');
      if (lines.length <= 1) {
        resolve('Number of students: 0');
        return;
      }

      const header = lines[0].split(',');
      const idxFirst = header.indexOf('firstname');
      const idxField = header.indexOf('field');

      const rows = lines
        .slice(1)
        .map((l) => l.split(','))
        .filter((r) => r.length === header.length);

      const total = rows.length;
      const byField = {};
      for (const r of rows) {
        const field = r[idxField];
        const first = r[idxFirst];
        if (!byField[field]) byField[field] = [];
        byField[field].push(first);
      }

      let out = `Number of students: ${total}`;
      for (const [field, list] of Object.entries(byField)) {
        out += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
      }
      resolve(out);
    });
  });
}

const DB_PATH = process.argv[2];
const app = express();

// Root endpoint
app.get('/', (_req, res) => {
  res.type('text').send('Hello Holberton School!');
});

// /students endpoint
app.get('/students', (_req, res) => {
  res.type('text');
  // Start with the fixed header line
  const header = 'This is the list of our students';

  countStudents(DB_PATH)
    .then((report) => res.send(`${header}\n${report}`))
    .catch(() => res.send(`${header}\nCannot load the database`));
});

// Listen on port 1245
app.listen(1245);

// Export the app instance
module.exports = app;
