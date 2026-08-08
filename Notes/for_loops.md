# JavaScript `for` Loops

Loops are used to execute a block of code multiple times. JavaScript provides three main variations of the `for` loop, each optimized for different data structures.

---

## 1. Classic `for` Loop
Best used when you need a counter or know exactly how many times you want the loop to run.

### Syntax
```javascript
for (initialization; condition; final-expression) {
  // code to be executed
}
```

### Example
```javascript
for (let i = 0; i < 3; i++) {
  console.log(`Iteration: ${i}`); 
  // Outputs: Iteration: 0, Iteration: 1, Iteration: 2
}
```

*   **Initialization (`let i = 0`)**: Sets the starting point. Runs exactly once.
*   **Condition (`i < 3`)**: Checked before every loop. If `true`, the loop runs. If `false`, it stops.
*   **Final Expression (`i++`)**: Updates the counter after the loop body runs.

---

## 2. `for...of` Loop
Best used for iterating over the **values** of an iterable object (like an Array, String, Map, or Set).

### Example with Array
```javascript
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color); // Outputs: red, green, blue
}
```
> 💡 **Tip:** Use `const` instead of `let` here because a new block-scoped variable is created for each iteration.

---

## 3. `for...in` Loop
Best used for iterating over the **keys / properties** of an Object.

### Example with Object
```javascript
const user = { name: 'Alex', role: 'Developer' };

for (const key in user) {
  console.log(`${key}: ${user[key]}`); 
  // Outputs: 
  // name: Alex
  // role: Developer
}
```
> ⚠️ **Warning:** Avoid using `for...in` to loop over arrays. It iterates over the array indexes as strings, which can cause unexpected bugs.

---

## Summary Cheat Sheet

| Loop Type | Iterates Over | Primary Use Case |
| :--- | :--- | :--- |
| `for` | Numeric index | Sequential counters, manual control |
| `for...of` | Element **values** | Arrays, Strings, Sets |
| `for...in` | Object **keys** | Key-value pairs in Objects |
