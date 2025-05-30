# QA Test Report – Todo List Application

## Project Overview

This document reports the results of the end-to-end testing campaign conducted on the Todo List application developed with React, Vite, and Tailwind CSS.

The goal of this testing campaign was to validate key user interactions, edge cases, and persistence mechanisms using Cypress. The tests were executed locally on a development build of the application.

---

## Test Summary

| Test Category       | Total Tests | Passed | Failed | Blocked |
|---------------------|-------------|--------|--------|---------|
| Task Creation       | 2           | 2      | 0      | 0       |
| Task Deletion       | 1           | 1      | 0      | 0       |
| Task Completion     | 1           | 1      | 0      | 0       |
| Edge Cases          | 3           | 3      | 0      | 0       |
| Data Persistence    | 2           | 2      | 0      | 0       |
| Overflow Detection  | 2           | 1      | 1      | 0       |
| **Total**           | **11**      | **10** | **1**  | **0**   |

---

## Detailed Results

### ✅ Task Creation
- **Add a single task**: Successfully added via input and verified in DOM  
- **Multiple tasks**: Added in sequence with correct display order  

### ✅ Task Deletion
- **Delete a task**: Removed from UI and no longer in DOM after deletion  

### ✅ Task Completion
- **Mark task as completed**: Visual feedback (strikethrough style) appeared  

### ✅ Edge Cases
- **Empty input**: Add button disabled until a non-empty string is typed  
- **Long task input**: Tasks with over 300 characters accepted and displayed  
- **Duplicate tasks**: Same string accepted multiple times  

### ✅ Data Persistence
- **Reload page**: Tasks persisted via `localStorage`  
- **Cross-session validation**: Data remained intact across page refreshes  

### ⚠️ Overflow Detection
- **Long phrase with spaces**: Passed – no overflow detected  
- **Very long unbroken string**: Failed as expected – horizontal overflow detected, test correctly identified UI issue

---

## Observations

- The application state remains consistent and stable under normal and edge conditions.  
- Visual feedback for completed tasks is clear and persistent.  
- Local storage is effectively used for data persistence.  
- The test suite successfully detects a real UI bug related to overflow, demonstrating the value of automation in quality assurance.  

---

## Improvement Suggestions

- Add `data-testid` attributes to improve selector reliability  
- Display error messages when submitting invalid input (e.g., empty tasks)  
- Add confirmation dialogs for task deletion (optional enhancement)  
- Enhance accessibility features (e.g., keyboard navigation, ARIA roles)  

---

## Conclusion

All tests except one passed successfully, with the single failure highlighting a genuine UI flaw related to text overflow.  
This reflects a rigorous testing approach capable of both validating expected behavior and uncovering defects, making this project a strong example for a QA portfolio.


