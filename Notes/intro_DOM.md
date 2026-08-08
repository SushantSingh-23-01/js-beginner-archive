# Introduction to the DOM (Document Object Model)

The DOM is a programming interface for web documents. It represents the page so that programs (like JavaScript) can change the document structure, style, and content. The DOM represents the document as a tree of nodes.

---

## 1. What is the DOM Tree?
When a web page loads, the browser creates a tree-like hierarchy of objects based on the HTML structure.

---

## 2. Selecting DOM Elements
Before you can change an element, you need to target it. JavaScript provides several methods to select elements from the DOM tree.

### Common Selectors
```javascript
// 1. Select a single element by its ID attribute
const mainTitle = document.getElementById('title');

// 2. Select a single element using a CSS selector (returns the FIRST match)
const firstButton = document.querySelector('.btn-primary');

// 3. Select multiple elements using a CSS selector (returns a NodeList collection)
const allParagraphs = document.querySelectorAll('p');
```

---

## 3. Manipulating Content and Styles
Once you have selected an element, you can modify its text, HTML structure, or visual styling.

### Example
```javascript
const banner = document.querySelector('#banner');

// Changing the plain text safely
banner.textContent = 'Welcome to My JavaScript Journey!';

// Changing the internal HTML structure
banner.innerHTML = '⚡ <span>Welcome to My Journey!</span>';

// Changing inline CSS styles directly
banner.style.backgroundColor = '#23272a';
banner.style.color = '#ffffff';
```
> 💡 **Tip:** Use `textContent` instead of `innerHTML` when you are only updating text. It prevents cross-site scripting (XSS) security vulnerabilities.

---

## 4. Handling Events
Events are actions that happen on the web page—like clicks, mouse movements, or keypresses. You use Event Listeners to execute JavaScript when these actions occur.

### Example
```javascript
const themeButton = document.querySelector('.toggle-btn');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  console.log('Theme changed!');
});
```

---

## Summary Cheat Sheet

| Task | Common Syntax | What it Does |
| :--- | :--- | :--- |
| **Select (Single)** | `document.querySelector('selector')` | Finds the first matching HTML element. |
| **Select (Multiple)**| `document.querySelectorAll('selector')` | Finds all matching elements as a NodeList. |
| **Change Text** | `element.textContent = 'text'` | Updates the visible text content safely. |
| **Change Styles** | `element.style.property = 'value'` | Modifies inline CSS styles directly. |
| **Listen for Actions**| `element.addEventListener('event', callback)`| Runs a function when a user action happens. |
