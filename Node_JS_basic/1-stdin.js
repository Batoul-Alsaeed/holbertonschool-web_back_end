// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set encoding for stdin
process.stdin.setEncoding('utf8');

// Event listener when the user inputs data
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// Event listener when the input stream ends (Ctrl + D or EOF)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
