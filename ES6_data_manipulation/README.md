# ES6 Data Manipulation

> Holberton by Tuwaiq Academy – ES6_data_manipulation (Node 20, Jest, Babel, ESLint)
**About the Project**
This project focuses on **data processing in JavaScript** using modern ES6 features, such as:
`Map`, `Filter`, `Reduce`, `Typed Arrays`, `Assign`, `Map`, and `Weak Map`.
The goal is to write **clean, organized, and testable code** that successfully passes all **Airbnb ESLint standards** and **Jest tests**.

---
## I learned:
- Use `map`, `filter`, and `reduce` efficiently.  
- Work with **Typed Arrays** using `ArrayBuffer` and `DataView`.  
- Handle data with **Set**, **Map**, and **WeakMap**.  
- Write clean **ES6 Modules** that are fully tested.
---
## Installation & Setup

```bash
# 1) Create the project
mkdir ES6_data_manipulation && cd ES6_data_manipulation
npm init -y

# 2) Install dependencies
npm install --save-dev jest babel-jest @babel/core @babel/preset-env \
eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jest \
@babel/node

# 3) Run all tests
npm run full-test
```
---

## Project Structure
ES6_data_manipulation/
├── 0-get_list_students.js
├── 1-get_list_student_ids.js
├── 2-get_students_by_loc.js
├── 3-get_ids_sum.js
├── 4-update_grade_by_city.js
├── 5-typed_arrays.js
├── 6-set.js
├── 7-has_array_values.js
├── 8-clean_set.js
├── 9-groceries_list.js
├── 10-update_uniq_items.js
├── 100-weak.js
├── babel.config.js
├── .eslintrc.js
├── package.json
└── README.md

---
## Scripts
```bash
npm test          # run Jest
npm run full-test # ESLint + Jest (used by graders)
npm run lint -- . # lint the repo
npm run dev file.js  # quick-run a file with babel-node
```
---
## Tasks Overview
| #     | File                        | What it Does                                                                             |
| ----- | --------------------------- | ---------------------------------------------------------------------------------------- |
| **0** | `0-get_list_students.js`    | Returns an array of student objects: `{id, firstName, location}`                         |
| **1** | `1-get_list_student_ids.js` | From students array → returns array of `id`s. Uses `map`.                                |
| **2** | `2-get_students_by_loc.js`  | Filters students by `city`. Uses `filter`.                                               |
| **3** | `3-get_ids_sum.js`          | Sums all student `id`s. Uses `reduce`.                                                   |
| **4** | `4-update_grade_by_city.js` | For a `city`, attaches `grade` from `newGrades`; default `'N/A'`. Uses `filter` + `map`. |
| **5** | `5-typed_arrays.js`         | Builds `ArrayBuffer` / `DataView`, sets Int8 at position; throws on out-of-range.        |
| **6** | `6-set.js`                  | Cr                                                                                       |
----
## Usage Examples
```bash
npm run dev 0-main.js
npm run dev 3-main.js
npm run dev 8-main.js
npm run dev 100-main.js
```
---
## Tips & Gotchas

Do not mutate input arrays/objects; return new values.

Error messages must match exactly (e.g., 'Position outside range', 'Cannot process', 'Endpoint load is high').

Always export default unless stated otherwise.

For WeakMap, keys must be objects.

Run npm run full-test frequently to catch lint + tests.
---
## Setup

```bash
# 1) create project
mkdir ES6_data_manipulation && cd ES6_data_manipulation
npm init -y

# 2) dev dependencies
npm install --save-dev jest babel-jest @babel/core @babel/preset-env \
eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jest \
@babel/node
```

---
Add the provided configs exactly:

package.json (scripts section)
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
babel.config.js
```bash
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
};
```
.eslintrc.js
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
Then:
```bash
npm install
```
---

## Best Practices & Tips
- Avoid Mutations → Always return a new array or object.
- Match Error Messages Exactly → For example:
Position outside range
Cannot process
Endpoint load is high
- Use export default unless stated otherwise.
- WeakMap Keys Must Be Objects → Do not use strings or numbers as keys.
- Always run npm run full-test before pushing your code.

---

## Final Notes
The ES6 Data Manipulation project is more than a coding exercise —
it's a practical journey into writing *modern, efficient, and scalable JavaScript.*

---



