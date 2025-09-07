// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Ensure stdin is read as UTF-8 text
process.stdin.setEncoding('utf8');

// Use the 'readable' event and read() to fetch available input chunks
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    // Print the chunk as-is (it already includes a trailing newline if piped via `echo`)
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// On EOF (Ctrl+D or when input stream ends), print the closing line
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
