const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample-files', 'sample.txt');

// Write a sample file for demonstration
fs.writeFileSync(filePath, 'Hello, async world!');

// 1. Callback style
fs.readFile(filePath, 'utf8', (err, content) => {
  if (err) {
    console.log('Error:', err.message);
    return;
  }
  console.log('Callback read:', content);

  // Callback hell example:
  // fs.readFile(filePath, 'utf8', (err2, content2) => {
  //   fs.readFile(filePath, 'utf8', (err3, content3) => {
  //     console.log('nested callback:', content3);
  //   });
  // });
  // This nesting gets deeper with every additional async step —
  // that's what's called "callback hell". Hard to read and maintain.

  // 2. Promise style
  fs.promises.readFile(filePath, 'utf8')
    .then((promiseContent) => {
      console.log('Promise read:', promiseContent);
    })
    .catch((err) => {
      console.log('Error:', err.message);
    });

  // 3. Async/Await style
  (async () => {
    try {
      const asyncContent = await fs.promises.readFile(filePath, 'utf8');
      console.log('Async/Await read:', asyncContent);
    } catch (err) {
      console.log('Error:', err.message);
    }
  })();
});
