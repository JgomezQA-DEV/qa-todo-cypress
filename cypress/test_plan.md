# QA Test Plan – Todo List Application

## Purpose

This test plan documents the quality assurance strategy applied to a simple React-based Todo List application.  
It demonstrates the tester's ability to define critical user flows, validate expected behavior, and cover edge cases using Cypress for end-to-end test automation.

## Tech Stack

- Testing Framework: Cypress
- Target Application: React + Vite
- Language: JavaScript (ES6)
- Client-side Storage: localStorage
- CI Pipeline: GitHub Actions (planned)

## Test Scenarios Covered

### 1. Task Creation
- User can enter a task in the input field and click "Add"
- The task appears immediately in the task list

### 2. Task Deletion
- A task can be removed by clicking its associated delete button
- The task disappears from the interface after deletion

### 3. Task Completion
- A task can be marked as completed
- The interface reflects this change through a visual indicator (e.g., line-through or specific CSS class)

### 4. Edge Cases
- Empty Input: The "Add" button remains disabled when the input field is empty
- Long Task: Tasks with over 300 characters can be added
- Duplicate Tasks: The same task content can be added multiple times

### 5. Data Persistence
- After a full page reload, tasks persist in the interface
- This confirms the use of localStorage or equivalent persistence mechanism

## Acceptance Criteria

- All test cases pass reliably through Cypress automation
- The UI updates consistently in response to user interactions
- The application maintains a valid and predictable state throughout all tested actions

## Potential Extensions

- Accessibility testing (a11y)
- Performance or load testing
- API-level tests and negative scenarios (if applicable)
