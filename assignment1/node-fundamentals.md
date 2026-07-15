# Node.js Fundamentals

## What is Node.js?
Node.js is a runtime environment that lets JavaScript run outside the browser, on a computer or server. It takes the same V8 engine that powers Chrome and wraps it with extra capabilities like file system access, networking, and process management, so JavaScript can be used to build servers, command-line tools, and scripts, not just interactive web pages.

## How does Node.js differ from running JavaScript in the browser?
Browser JavaScript is limited to what happens inside a web page: it can manipulate the DOM, respond to clicks, and has access to objects like window and document. It has no access to the file system or operating system for security reasons. Node.js, on the other hand, has no browser at all — it runs as a standalone program, so it can read/write files, start servers, access environment variables, and interact directly with the operating system.

## What is the V8 engine, and how does Node use it?
V8 is the JavaScript engine developed by Google that compiles and executes JavaScript code. It's the same engine used inside Chrome. Node.js takes V8 and adds additional built-in modules (like fs, http, path, os) on top of it, so JavaScript can do things V8 alone wouldn't allow, like reading files or opening network connections.

## What are some key use cases for Node.js?
- Building backend servers and REST APIs
- Running command-line tools and scripts (like node load-db or node first.js`)
- Real-time applications (chat apps, live updates) thanks to its non-blocking, event-driven design
- Build tools and tooling for frontend development (many frontend build tools are themselves written in Node)

## Explain the difference between CommonJS and ES Modules. Give a code example of each.

CommonJS is the module system Node.js has traditionally used. It loads other files with require() and exposes code with module.exports. ES Modules are the standard JavaScript module system also used in browsers, using import/export syntax. This course uses CommonJS by default.

**CommonJS (default in Node.js):**
```js
// mathUtils.js
function add(a, b) {
  return a + b;
}

module.exports = { add };

// app.js
const { add } = require('./mathUtils');
console.log(add(2, 3));
```

**ES Modules (supported in modern Node.js):**
```js
// mathUtils.mjs
export function add(a, b) {
  return a + b;
}

// app.mjs
import { add } from './mathUtils.mjs';
console.log(add(2, 3));
```