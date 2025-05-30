# Known Issues – Todo List Application

## BUG-001 – Horizontal Overflow on Long Unbroken Task Input

### ❖ Summary
When adding a task composed of a single, very long unbroken string (e.g., 1000+ characters without spaces), the application allows the task to be added, but the layout breaks due to horizontal overflow. This creates a degraded user experience.

---

### ❖ Environment

| Parameter         | Value               |
|------------------|---------------------|
| App Version       | Dev build (Vite)    |
| Browser           | Chrome 125          |
| Cypress Version   | 13.6.0              |
| OS                | Windows 11 / macOS  |
| Test File         | `edge_cases.cy.js`  |

---

### ❖ Steps to Reproduce

1. Go to the application home page (`/`).
2. In the input field, type a long unbroken string (e.g., `"a".repeat(1000)`).
3. Click on the `ADD` button.
4. Observe the layout of the task list container.

---

### ❖ Expected Behavior
The layout should remain intact. The long word should wrap, truncate, or be otherwise constrained to prevent UI breaking.

---

### ❖ Actual Behavior
The new task is rendered unwrapped, causing the task list container (`overflow-y-auto`) to expand horizontally. This results in horizontal scrolling and layout shift.

---

### ❖ Screenshot
Captured via Cypress on failure:  
`cypress/screenshots/task-overflow-bug-detected.png`

---

### ❖ Severity
🟠 **Medium** – Does not crash the app, but clearly breaks the user interface and should be handled for production readiness.

---

### ❖ Suggested Fix
Apply one or more of the following CSS properties to task display elements:
```css
word-break: break-word;
overflow-wrap: anywhere;
max-width: 100%;
