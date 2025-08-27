# ES6 Promises
> Holberton by Tuwaiq Academy – ES6 Promises (Node 20, Jest, Babel, ESLint)

### About the Project
This project focuses on **asynchronous flow in JavaScript** using modern ES6 features:
Promises, `then / catch / finally`, Promise combinators (`all`, `allSettled`, `race`), and **async/await**.
The goal is to write **clean, organized, and testable code** that passes **Airbnb ESLint** and **Jest tests**.

## I learned:
- Understand Promises: why, when, and how.
- Use `then`, `catch`, and `finally`.
- Use `Promise.resolve/reject`, `Promise.all`, `Promise.allSettled`, `Promise.race`.
- Throw errors and handle them with `try/catch`
- Write and use `async` / `await`.

## Tasks Overview
| #       | File                 | Description                                                                                                                                                  |
| ------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **0**   | `0-promise.js`       | `getResponseFromAPI()` returns a Promise.                                                                                                                    |
| **1**   | `1-promise.js`       | `getFullResponseFromAPI(success)` → resolve `{status:200, body:'Success'}` or reject `Error('The fake API is not working currently')`.                       |
| **2**   | `2-then.js`          | `handleResponseFromAPI(promise)` → on resolve return `{status:200, body:'success'}`, on reject return `Error()`, always log `"Got a response from the API"`. |
| **3**   | `3-all.js`           | Import from `utils.js`; `handleProfileSignup()` logs `photo.body firstName lastName`, else logs `'Signup system offline'`.                                   |
| **4**   | `4-user-promise.js`  | `signUpUser(firstName, lastName)` → resolved Promise `{ firstName, lastName }`.                                                                              |
| **5**   | `5-photo-reject.js`  | `uploadPhoto(fileName)` → rejected Promise `Error("\${fileName} cannot be processed")`.                                                                      |
| **6**   | `6-final-user.js`    | `handleProfileSignup(firstName, lastName, fileName)` → `Promise.allSettled` → return `[{ status, value }]` (use `reason.toString()` for rejected).           |
| **7**   | `7-load_balancer.js` | `loadBalancer(chinaDownload, USDownload)` → return first resolved value via `Promise.race`.                                                                  |
| **8**   | `8-try.js`           | `divideFunction(numerator, denominator)` → throw `Error('cannot divide by 0')` or return division.                                                           |
| **9**   | `9-try.js`           | `guardrail(mathFunction)` → `[result or 'Error: ...', 'Guardrail was processed']`.                                                                           |
| **10** | `100-await.js`       | `asyncUploadUser()` → `{ photo, user }` or `{ photo: null, user: null }` using `async/await` + `Promise.all`.                                                |

## Best Practices & Tips
- Match error messages exactly (grading is strict).
- Convert rejected values to strings when specified (e.g., Task 6).
- Do not mutate inputs; return new objects/arrays.
- Always export default unless otherwise stated.
- Using ESM: include `.js` extension in `import` paths when running with Node directly.
- Run tests frequently with `npm run full-test` to catch lint & logic issues early.

## Installation & Setup
### 1) Create the project
```bash
mkdir ES6_promise && cd ES6_promise
npm init -y
```
### 2) Install dependencies
```bash
npm install --save-dev jest babel-jest @babel/core @babel/preset-env \
eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jest \
@babel/node
```
### Scripts
```bash
npm test          # run Jest
npm run full-test # ESLint + Jest (used by graders)
npm run lint -- . # lint the repo
npm run dev file.js  # quick-run a file with babel-node
```

**Added the settings provided precisely:**
### 1- package.json (scripts section)
```bash
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  }
}
```
### 2- babel.config.js
```bash
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
};
```
### 3- .eslintrc.js
```bash
module.exports = {
  env: { browser: false, es6: true, jest: true },
  extends: ['airbnb-base', 'plugin:jest/all'],
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
  },
  overrides: [{ files: ['*.js'], excludedFiles: 'babel.config.js' }],
};
```

**Then:**
```bash
npm install
```
## Usage Examples
```bash
npm run dev 0-main.js
npm run dev 3-main.js
npm run dev 7-main.js
npm run dev 100-main.js
```

## Final Notes

The **ES6 Promises** project is a hands-on path to mastering async patterns in JavaScript—writing **modern, reliable, and testable code**.
