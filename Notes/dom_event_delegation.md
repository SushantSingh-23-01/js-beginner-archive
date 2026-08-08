# DOM Even Delegation & `.closest()`

## How `closest()` works?

The `.closest(selector)` method traverses the DOM tree upward (towards the document root) starting from the current element. 
It returns the first ancestor element that matches the specified CSS selector.
- **Search Direction**: Upward (element $\rightarrow$ parent $\rightarrow$ grandparent $\rightarrow$ `<body>` $\rightarrow$ `<html>`).
- **Includes the Element Itself**: If the element called upon already matches the selector, `.closest()` returns that element immediately.
- **Return Value**: The matching `Element` node, or `null` if no match is found.

## Code Context Breakdown

1. `event.target.closest('.toggle-btn')`
    - Finds the `span` element that was clicked (or contains the clicked text).
    - If the user clicks plain text or background space outside `.toggle-btn`, it returns `null`.
