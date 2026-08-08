# DOM Event Delegation & `.closest()`

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
2. `toggleBtn.closest('.tree-node')`
    - Starts at the clicked `.toggle-btn` `span` and looks upward for the nearest wrapper with the class `.tree-node.`.
    - This ensures that toggling Documents affects its top-level container, while toggling Projects affects only its nested container.

## Event Delegation
Instead of attaching individual click event listeners to every single `.toggle-btn` element, a single event listener is attached to the common parent container (`#tree-root`).

### Key Benefits
- **Performance**: Uses significantly less memory by keeping listener count to 1 instead of N.
- **Dynamic Elements**: Works automatically for newly added tree nodes added to the DOM later without re-attaching listeners.

## Key DOM Methods & Properties Reference

| API / Property | Type | Description |
| :--- | :--- | :--- |
| `event.target` | Property | Reference to the actual DOM element that triggered the event. |
| `element.closest(selector)` | Method | Searches up the DOM tree for the nearest matching element. |
| `element.classList.toggle('className')` | Method | Adds the class if absent; removes it if present. |
| `element.classList.contains('className')` | Method | Returns `true` if the class exists on the element, otherwise `false`. |
| `string.slice(startIndex)` | Method | Extracts a substring starting from `startIndex` to the end. |
