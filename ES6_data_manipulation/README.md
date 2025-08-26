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
## Tasks Overview
| #       | File                        | Description                                                            |
| ------- | --------------------------- | ---------------------------------------------------------------------- |
| **0**   | `0-get_list_students.js`    | Returns an array of students `{id, firstName, location}`               |
| **1**   | `1-get_list_student_ids.js` | Returns an array of IDs using `map`.                                   |
| **2**   | `2-get_students_by_loc.js`  | Filters students by city using `filter`.                               |
| **3**   | `3-get_ids_sum.js`          | Calculates the sum of all IDs using `reduce`.                          |
| **4**   | `4-update_grade_by_city.js` | Updates students' grades by city.                                      |
| **5**   | `5-typed_arrays.js`         | Uses **Typed Arrays** with `DataView` to store values.                 |
| **6**   | `6-set.js`                  | Creates a **Set** from an array.                                       |
| **7**   | `7-has_array_values.js`     | Checks if all array elements exist inside a **Set**.                   |
| **8**   | `8-clean_set.js`            | Cleans and formats a **Set** into a string output.                     |
| **9**   | `9-groceries_list.js`       | Creates a **Map** for grocery items and quantities.                    |
| **10**  | `10-update_uniq_items.js`   | Updates all `value === 1` to `100` inside a **Map**.                   |
| **100** | `100-weak.js`               | Uses **WeakMap** to track API calls and throws an error after 5 calls. |

---
## Best Practices & Tips
- Do not mutate input arrays/objects; return new values.
- Error messages must match exactly (e.g., 'Position outside range', 'Cannot process', 'Endpoint load is high').
- Always export default unless stated otherwise.
- WeakMap Keys Must Be Objects → Do not use strings or numbers as keys.
- Always run npm run full-test frequently before deploying your code to catch bugs and tests.
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

### Scripts
```bash
npm test          # run Jest
npm run full-test # ESLint + Jest (used by graders)
npm run lint -- . # lint the repo
npm run dev file.js  # quick-run a file with babel-node
```
Added the settings provided precisely:
1- package.json (scripts section)
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
2- babel.config.js
```bash
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
};
```
3- .eslintrc.js
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
## Usage Examples
```bash
npm run dev 0-main.js
npm run dev 3-main.js
npm run dev 8-main.js
npm run dev 100-main.js
```
---
## Final Notes
The ES6 Data Manipulation project is more than a coding exercise —
it's a practical journey into writing *modern, efficient, and scalable JavaScript.*

---



