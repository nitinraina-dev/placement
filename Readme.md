

# Variables & hoisting, and data types

## Variable declarations: `var`, `let`, `const`

```js
// var
var x = 10;
x = 20; // allowed

// let
let y = 5;
y = 6; // allowed

// const (constant binding)
const z = 3;
// z = 4; // ERROR: can't reassign. (But for objects you can mutate properties.)
```

Key differences:

* `var` is function-scoped and **hoisted** (explained below). Can be redeclared.
* `let` and `const` are block-scoped (inside `{}`), not redeclarable in same scope.
* `const` prevents reassigning the variable binding (but objects/arrays inside it can be mutated).

## Hoisting (what you meant by "hosting")

Hoisting means JS moves variable/function *declarations* to the top before running code — but behavior depends on the declaration type.

```js
console.log(a); // undefined  (var is hoisted, value = undefined)
var a = 2;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 3;
```

* `var` is hoisted and initialized to `undefined`.
* `let`/`const` are hoisted but in a *Temporal Dead Zone* until their line — accessing them before declaration throws a ReferenceError.

Function hoisting:

```js
console.log(add(2,3)); // 5 — function declarations are hoisted fully
function add(x,y){ return x+y; }
```

But function expressions assigned to `const/let/var` are not hoisted the same way.

## Data types (primitive vs object)

Primitives: `string`, `number`, `bigint`, `boolean`, `undefined`, `null`, `symbol`.
Objects: `Object`, `Array`, `Function`, `Date`, etc.

Examples:

```js
typeof "hello"      // "string"
typeof 42           // "number"
typeof 10n          // "bigint"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"  // historic quirk
typeof Symbol()     // "symbol"
typeof {a:1}        // "object"
Array.isArray([1,2])// true
```

---

# Conditional statements

## `if`, `else if`, `else` ladder

```js
let score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B"); // this will run
} else if (score >= 60) {
  console.log("C");
} else {
  console.log("F");
}
```

## Nested `if` / `else`

Avoid too much nesting for readability, but here's how:

```js
let user = { age: 20, verified: true };

if (user) {
  if (user.age >= 18) {
    if (user.verified) {
      console.log("Access granted");
    } else {
      console.log("Please verify account");
    }
  } else {
    console.log("You must be 18+");
  }
}
```

## `switch` statement (good for many discrete cases)

```js
let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Apple!");
    break;
  case "banana":
    console.log("Banana!"); // runs
    break;
  case "orange":
    console.log("Orange!");
    break;
  default:
    console.log("Unknown fruit");
}
```

Notes:

* Use `break` to stop fall-through. If you omit it, execution continues to next case.
* You can group cases: `case 'a': case 'b': ...`

---

# Loops

## `for` loop

Standard counted loop:

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
```

## `while` loop

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## `do...while` loop

Runs body at least once:

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```

## `forEach` (array method)

Iterates over array elements (no `break` possible).

```js
const arr = [10, 20, 30];
arr.forEach((value, index) => {
  console.log(index, value);
});
```

If you need to break early, use a normal `for` loop or `for...of` with `break`.

## `for...of` and `for...in`

* `for...of` iterates values of iterable (Array, String, Map...):

```js
for (const v of [1,2,3]) console.log(v);
```

* `for...in` iterates enumerable **keys** (usually used for objects, not arrays):

```js
const obj = {a:1, b:2};
for (const k in obj) console.log(k, obj[k]);
```

---

# Functions — “all 6 types” (common useful set)

I’ll show six common kinds: Function Declaration, Function Expression, Arrow Function, IIFE, Generator Function, Async Function.

### 1) Function Declaration (hoisted)

```js
function greet(name) {
  return `Hi ${name}`;
}
console.log(greet("Nitin"));
```

### 2) Function Expression (anonymous or named)

```js
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2,3));
```

### 3) Arrow Function (concise, no `this` binding)

```js
const add = (a, b) => a + b;
console.log(add(1,2));
```

Long form:

```js
const say = (name) => {
  console.log("Hello", name);
};
```

### 4) IIFE — Immediately Invoked Function Expression

Runs immediately and creates local scope.

```js
(function() {
  const secret = 42;
  console.log("IIFE ran, secret is", secret);
})();
```

### 5) Generator function (yields values lazily)

```js
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = counter();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

### 6) Async function (returns a Promise; use `await` inside)

```js
async function fetchData() {
  // simulate async work
  const result = await Promise.resolve("data");
  return result;
}
fetchData().then(console.log); // "data"
```

**Also** remember methods on objects:

```js
const obj = {
  method() { return "hi"; },           // shorthand method
  arrow: () => "can't use this as this-value" // arrow as property
};
```

---

# Arrays — creation and common methods (with examples)

Create arrays:

```js
const arr = [1, 2, 3];
const empty = [];
```

## push / pop / shift / unshift / splice / slice

```js
let a = [1,2,3];

a.push(4);      // [1,2,3,4]    push returns new length
a.pop();        // returns 4, a -> [1,2,3]

a.shift();      // returns 1, a -> [2,3]
a.unshift(0);   // a -> [0,2,3]  returns new length

// splice: modify array: splice(start, deleteCount, ...items)
let b = [10,20,30,40];
b.splice(1, 2, 15, 25); // removes 20,30; inserts 15,25
// now b = [10,15,25,40]

// slice: returns a shallow copy (non-destructive)
let c = [1,2,3,4,5];
let sub = c.slice(1, 4); // [2,3,4]  (end index not included)
```

## `map` and `filter` (non-destructive array helpers)

```js
const nums = [1,2,3,4];

// map: transform each element
const doubled = nums.map(n => n * 2); // [2,4,6,8]

// filter: keep elements matching a predicate
const even = nums.filter(n => n % 2 === 0); // [2,4]
```

## `find`, `findIndex`, `includes`

```js
const users = [{id:1, name:'A'}, {id:2, name:'B'}];
users.find(u => u.id === 2);      // {id:2, name:'B'}
users.findIndex(u => u.id === 2); // 1
nums.includes(3);                 // true
```

## Mutating vs non-mutating

* Mutating: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`.
* Non-mutating (return new arrays): `map`, `filter`, `slice`, `concat`.

---

# Short examples that tie concepts together

### Example: grade students (if / loops / arrays / map)

```js
const scores = [92, 85, 73, 60, 48];

const grades = scores.map(score => {
  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 50) return 'D';
  else return 'F';
});

console.log(grades); // ['A','B','C','D','F']
```

### Example: filtering and iterating

```js
const todos = [
  {id:1, text:'Wash', done:false},
  {id:2, text:'Cook', done:true},
];

const undone = todos.filter(t => !t.done);

undone.forEach(t => console.log("Do:", t.text));
```

### Example: async function + array methods

```js
async function getItems() {
  const items = await Promise.resolve([1,2,3]); // simulate fetch
  return items.map(x => x * 10);
}
getItems().then(console.log); // [10,20,30]
```

---

# Tips & common gotchas

* Use `===` and `!==` (strict equality) instead of `==` to avoid type coercion surprises.
* Avoid deep nesting of `if`s — prefer early returns or breaking complex logic into functions.
* Prefer `let` and `const` over `var`. Use `const` by default; use `let` only when you’ll reassign.
* `forEach` cannot be `await`ed directly — use `for...of` with `await` inside an async function.
* Array methods like `map` return new arrays — they don’t change the original.
* When mutating arrays in React state, return a new array (use spread `[...arr, newItem]`).

---

If you want, I can:

* Turn this into a printable cheat sheet (one-page PDF).
* Give interactive exercises with answers (3–5 problems).
* Walk through any single topic more slowly with extra examples (e.g., hoisting or async functions).


