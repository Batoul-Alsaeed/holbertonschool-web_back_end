const http = require('http');
const fs = require('fs');

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

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    countStudents(DB_PATH)
      .then((report) => res.end(report))
      .catch(() => res.end('Cannot load the database'));
    return;
  }

  res.statusCode = 404;
  res.end('Not found');
});

app.listen(1245);

module.exports = app;
