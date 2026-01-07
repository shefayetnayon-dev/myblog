---
title: "Top 10 JavaScript Coding Challenges for Senior Developers"
date: "2026-01-07T22:50:00.000Z"
excerpt: "Master your next technical interview with these 10 difficult JavaScript coding challenges covering Closures, Event Loop, and ES6."
coverImage: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop"
category: "JavaScript, Interview, Career, Programming"
tags: ["javascript", "interview-questions", "coding-challenges", "senior-developer", "es6"]
---

## Introduction

In senior developer interviews, you aren't just asked to write code that works; you're asked to explain *how* it works. Topics like **Closures**, the **Event Loop**, and **Prototypal Inheritance** are favorites for interviewers looking to test depth of knowledge.

Here are 10 coding challenges that test your understanding of core JavaScript mechanics. Try to solve them before looking at the answers!

---

## Part 1: Closures & Scope

### Challenge 1: The Classic Loop
What will the following code log?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

<details>
<summary><strong>Click to Reveal Solution</strong></summary>

**Output**: `3`, `3`, `3`

**Explanation**: The variable `i` is declared with `var`, which has function scope (or global scope here), not block scope. The loop finishes running before the `setTimeout` callbacks execute. By then, `i` has effectively become `3`. To fix this, use `let` (block scope) instead of `var`.
</details>

### Challenge 2: Private Counter
Create a function `createCounter` that returns an object with `increment` and `getValue` methods. The value should be private and not accessible directly.

```javascript
const counter = createCounter();
counter.increment();
console.log(counter.getValue()); // 1
console.log(counter.count); // undefined
```

<details>
<summary><strong>Click to Reveal Solution</strong></summary>

```javascript
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: () => { count++; },
    getValue: () => count
  };
}
```
**Explanation**: This utilizes a **Closure**. The returned methods retain access to the `count` variable from their lexical scope, even after `createCounter` has returned.
</details>

### Challenge 3: `this` Context
What gets logged here?

```javascript
const object = {
  who: 'World',
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  }
};

console.log(object.greet());
console.log(object.farewell());
```

<details>
<summary><strong>Click to Reveal Solution</strong></summary>

**Output**: 
1. `Hello, World!`
2. `Goodbye, undefined!` (or window/global object)

**Explanation**: Regular functions (`greet`) define `this` based on how they are called. Arrow functions (`farewell`) capture `this` from the surrounding lexical context (where they were defined). Since `object` isn't a scope, the arrow function sees the global scope (or undefined in strict mode).
</details>

---

## Part 2: Event Loop & Async

### Challenge 4: Microtasks vs Macrotasks
What is the order of logs?

```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');
```

<details>
<summary><strong>Click to Reveal Solution</strong></summary>

**Output**: `1`, `4`, `3`, `2`

**Explanation**: 
1. Synchronous code (`1`, `4`) runs first.
2. Promises create **Microtasks** (`3`), which have higher priority than **Macrotasks**.
3. `setTimeout` creates a **Macrotask** (`2`), which runs after the microtask queue is empty.
</details>

### Challenge 5: Async Iterator
What needs to change to make this work?

```javascript
const urls = ['url1', 'url2'];
urls.forEach(async (url) => {
  const content = await fetch(url);
  console.log('Done');
});
console.log('All Done');
```

<details>
<summary><strong>Click to Reveal Solution</strong></summary>

**Issue**: `forEach` does not wait for async callbacks. 'All Done' will log before the fetches finish.

**Fix**: Use `for...of` or `Promise.all`.
```javascript
// Correct approach
await Promise.all(urls.map(async (url) => {
  await fetch(url);
  console.log('Done');
}));
console.log('All Done');
```
</details>

---

## Part 3: Array Methods & Logic

### Challenge 6: Flattening Arrays
Write a function using `reduce` to flatten a nested array: `[[1, 2], [3, 4], [5]]` -> `[1, 2, 3, 4, 5]`.

<details>
<summary><strong>Click to Reveal Solution</strong></summary>

```javascript
const data = [[1, 2], [3, 4], [5]];
const flat = data.reduce((acc, curr) => acc.concat(curr), []);
// Or simpler in modern JS: data.flat()
```
</details>

### Challenge 7: Object References
What's the output?

```javascript
const check = {};
const a = { key: 'a' };
const b = { key: 'b' };

check[a] = 123;
check[b] = 456;

console.log(check[a]);
```

<details>
<summary><strong>Click to Reveal Solution</strong></summary>

**Output**: `456`

**Explanation**: Object keys are strings. Both `a` and `b` are objects, and when converted to a string key, they both become `"[object Object]"`. So `check` actually looks like `{ "[object Object]": 456 }`. The second assignment overwrites the first.
</details>

### Challenge 8: Sparse Arrays
What is `arr.length`?

```javascript
const arr = [1, 2, 3];
arr[10] = 11;
console.log(arr.length);
```

<details>
<summary><strong>Click to Reveal Solution</strong></summary>

**Output**: `11`

**Explanation**: Arrays in JS are just objects with numeric keys. Assigning index 10 expands the length to 11. Indexes 3 through 9 are "empty slots" (sparse).
</details>

---

## Conclusion

How many did you get right? 

*   **8-10**: You are Senior level ready!
*   **5-7**: Good grasp, but review the Event Loop.
*   **0-4**: Time to brush up on "You Don't Know JS".

Mastering these concepts isn't just about passing interviews; it's about avoiding bugs that only show up in complex, real-world applications. Happy coding!
