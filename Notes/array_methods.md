# JavaScript Higher-Order Array Methods

These methods are built-in array functions used to iterate over items, transform data, or filter elements without writing manual loops. They encourage cleaner, declarative code.

---

## 1. `forEach`
Used to execute a function on every single array element. It does not create a new array.

### Syntax
```javascript
array.forEach((element, index) => {
  // your code here
});
```

### Example
```javascript
const numbers =;
numbers.forEach(num => console.log(num * 2)); 
// Outputs: 2, 4, 6
```
*   **Returns**: Always returns `undefined`.
*   **Best for**: Triggering side effects (e.g., saving to a database, updating the DOM, or logging data).

---

## 2. `map`
Creates a brand-new array containing the transformed results of every item from the original array.

### Example
```javascript
const prices =;
const doubledPrices = prices.map(price => price * 2);

console.log(doubledPrices); // Outputs: [20, 40, 60]
console.log(prices);        // Outputs: [10, 20, 30] (Original remains unchanged)
```
*   **Returns**: A new array of the exact same length.
*   **Best for**: Transforming data without mutating (changing) the source array.

---

## 3. `filter`
Creates a new array filled only with elements that pass a specific logical condition.

### Example
```javascript
const scores =;
const passingScores = scores.filter(score => score >= 60);

console.log(passingScores); // Outputs: [80, 92]
```
*   **Returns**: A new array. If no items match, it returns an empty array `[]`.
*   **Best for**: Removing unwanted items from a collection based on truthy/falsy evaluations.

---

## 4. `reduce`
Executes a user-supplied callback function on each element of the array, passing in the return value from the calculation on the preceding element. 

### Example
```javascript
const expenses =;
const totalExpense = expenses.reduce((accumulator, current) => {
  return accumulator + current;
}, 0); // 0 is the optional starting initial value

console.log(totalExpense); // Outputs: 30
```
*   **Returns**: The final accumulated result (can be a number, string, object, or array).
*   **Best for**: Calculating totals, flattening nested arrays, or grouping complex data.

---

## Summary Cheat Sheet

| Method | What it Returns | Key Behavior |
| :--- | :--- | :--- |
| `forEach` | `undefined` | Runs a callback for side effects; does not generate data. |
| `map` | New array (same length) | Transforms every individual element into something new. |
| `filter` | New array (subset or `[]`) | Extracts items that match a specific logical condition. |
| `reduce` | Single accumulated result | Condenses an entire array down into one final output value. |
