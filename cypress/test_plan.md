# QA Test Plan – Todo List Application

## Table of Contents
1. [Purpose](#purpose)
2. [Tech Stack](#tech-stack)
3. [Test Scenarios Covered](#test-scenarios-covered)
4. [Acceptance Criteria](#acceptance-criteria)
5. [Environment Setup](#environment-setup)
6. [Potential Extensions](#potential-extensions)

---

## Purpose

This test plan documents the quality assurance strategy for a simple React-based Todo List application.  
It demonstrates the tester's ability to define critical user flows, validate expected behaviors, and handle edge cases using Cypress for end-to-end test automation.

---

## Tech Stack

- **Testing Framework**: Cypress  
- **Target Application**: React + Vite  
- **Language**: JavaScript (ES6)  
- **Client-side Storage**: `localStorage`  
- **CI Pipeline**: GitHub Actions *(planned)*

---

## Test Scenarios Covered

### 1. Task Creation
- Add a task by typing into the input field and clicking the **Add** button  
- Display the newly added task in the list immediately

### 2. Task Deletion
- Remove a task by clicking its delete button  
- Ensure the task disappears from the interface

### 3. Task Completion
- Mark a task as completed via the checkbox  
- Display visual feedback (e.g., line-through or completed class)

### 4. Edge Cases
- **Empty Input**: Prevent the user from clicking **Add** with an empty string  
- **Long Task Input**: Allow adding tasks with more than 300 characters  
- **Duplicate Tasks**: Permit adding the same task content multiple times

### 5. Data Persistence
- Reload the page and confirm all tasks are still visible  
- Validate data is stored and reloaded correctly via `localStorage`

---

## Acceptance Criteria

- All test cases execute successfully through Cypress automation  
- The UI updates accurately and predictably based on user interactions  
- The application maintains a consistent internal state throughout testing

---

## Environment Setup

- Node.js and npm installed  
- Front-end app running locally on `http://localhost:5173`  
- Cypress launched via `npx cypress open`

---

## Potential Extensions

- Accessibility testing (a11y) for keyboard navigation and ARIA compliance  
- Performance testing under heavy task lists  
- API-level testing (if backend exists in future)  
- Visual regression testing for future UI changes
