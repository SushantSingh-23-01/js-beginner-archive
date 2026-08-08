## 1. Leverage Event Bubbling for Clean Code

Instead of attaching individual event listeners to every `<input>` and `<select>` element, event delegation attaches a single event listener to the parent `<form>`.
- **Why it matters**: As user interfaces scale to contain tens or hundreds of inputs, a single delegated listener reduces RAM usage,
prevents memory leaks from unremoved event listeners, and automatically handles newly dynamic fields added to the DOM later.

## 2. State Aggregation

Instead of relying on `event.target.value` which restricts the updates to the single field being typed into, reading the entire **form state** on every trigger
allows for aggregated state.

```javascript
// Localized target state (Limits view)
const query = event.target.value;

// Form-wide aggregated state (Complete view)
const primary = searchForm.elements['primary-search'].value;
const author = searchForm.elements['author-search'].value;
```

## 3. Normalize Event Behavior Across Form Controls

Using `input` at the form level unifies updates across *inputs, textareas, range sliders, and select boxes* into a single handler.

## 4. Accessing Form Controls Efficiently

Using `form.elements['element-id-or-name']` is cleaner and faster than performing extra `document.getElementById()` lookups inside an event callback.

```javascript
// ❌ Redundant DOM query
const primaryInput = document.getElementById('primary-search');

// ✅ Native HTMLFormElement property
const primaryInput = searchForm.elements['primary-search'];
```
