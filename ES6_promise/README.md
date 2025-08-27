# ES6 Promises
> Holberton by Tuwaiq Academy – ES6 Promises (Node 20, Jest, Babel, ESLint)

A compact project to practice asynchronous JavaScript using **Promises**, **then/catch/finally**, **Promise.all / allSettled / race**, and **async/await**.

## Learning Objectives
- Understand Promises: why, when, and how
- Use `then`, `catch`, and `finally`
- Use `Promise.resolve/reject`, `Promise.all`, `Promise.allSettled`, `Promise.race`
- Throw errors and handle them with `try/catch`
- Write and use `async` / `await`

## Requirements
- Ubuntu 20.04, **Node 20.x**, **npm 9/10+**
- Linting: **ESLint** (Airbnb base if required)
- Tests: **Jest**
- All functions are ES modules and must be **exported**

## Setup
```bash
npm installHolberton by Tuwaiq Academy – ES6_data_manipulation (Node 20, Jest, Babel, ESLint)
```
Scripts (example):
```bash

"scripts": {
  "test": "jest --runInBand",
  "dev": "node"
}
```

Run a sample file:
```bash

npm run dev 0-main.js

```
Note: Using ES modules, so always include the .js extension in imports.

## Project Structure
ES6_promise/
├── 0-promise.js
├── 1-promise.js
├── 2-then.js
├── 3-all.js
├── 4-user-promise.js
├── 5-photo-reject.js
├── 6-final-user.js
├── 7-load_balancer.js
├── 8-try.js
├── 9-try.js
├── 100-await.js
├── utils.js
├── babel.config.js
├── .eslintrc.js
└── README.md

## Tasks Summary
| #  | File                 | Description                                                                                                                                                      |
| -- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0  | `0-promise.js`       | `getResponseFromAPI()` returns a Promise.                                                                                                                        |
| 1  | `1-promise.js`       | `getFullResponseFromAPI(success)` → resolve `{ status: 200, body: 'Success' }` or reject `Error('The fake API is not working currently')`.                       |
| 2  | `2-then.js`          | `handleResponseFromAPI(promise)` → on resolve return `{ status: 200, body: 'success' }`, on reject return `Error()`, always log `"Got a response from the API"`. |
| 3  | `3-all.js`           | Import from `utils.js`; `handleProfileSignup()` logs `photo.body firstName lastName` or logs `'Signup system offline'`.                                          |
| 4  | `4-user-promise.js`  | `signUpUser(firstName, lastName)` → resolved Promise with `{ firstName, lastName }`.                                                                             |
| 5  | `5-photo-reject.js`  | `uploadPhoto(fileName)` → rejected Promise with `Error("\${fileName} cannot be processed")`.                                                                     |
| 6  | `6-final-user.js`    | `handleProfileSignup(firstName, lastName, fileName)` → `Promise.allSettled` → return `[{ status, value }]` (convert rejected reason to **string**).              |
| 7  | `7-load_balancer.js` | `loadBalancer(chinaDownload, USDownload)` → return first resolved value via `Promise.race`.                                                                      |
| 8  | `8-try.js`           | `divideFunction(numerator, denominator)` → throw `Error('cannot divide by 0')` or return division result.                                                        |
| 9  | `9-try.js`           | `guardrail(mathFunction)` → returns array with result or `'Error: ...'` and always `'Guardrail was processed'`.                                                  |
| 10 | `100-await.js`       | `asyncUploadUser()` → returns `{ photo, user }` or `{ photo: null, user: null }` using `async/await` + `Promise.all`.                                            |


Testing
npm test

Lint
npx eslint .

Author

Batoul Alsaeed


**Commit suggestion:**
```bash
