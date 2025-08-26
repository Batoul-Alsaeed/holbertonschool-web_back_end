# ES6 Data Manipulation

> Holberton – ES6_data_manipulation (Node 20, Jest, Babel, ESLint)

Manipulate data using modern ES6 features: `map`, `filter`, `reduce`, Typed Arrays, `Set`, `Map`, and `WeakMap`.  
All functions export clean, testable modules that pass ESLint (Airbnb) and Jest.

---

## Learning Objectives
- Use `map`, `filter`, and `reduce` on arrays.
- Understand and use **Typed Arrays** with `ArrayBuffer` / `DataView`.
- Work with **Set**, **Map**, and **WeakMap`.
- Write clean ES6 modules (`export default`) that pass lint & tests.

---

## Requirements
- **OS**: Ubuntu 20.04 LTS  
- **Node**: 20.x.x (tested with `v20.15.1`)  
- **npm**: 9–10 (tested with `10.7.0`)  
- **Editors**: vi/vim, emacs, VS Code  
- All files end with a new line  
- All functions exported (default unless otherwise specified)

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




