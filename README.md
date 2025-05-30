# Cypress Test Suite – To-Do List Application

This folder contains an automated test suite written in **Cypress** to validate a simple To-Do List application built with **React**, **Vite**, and **Tailwind CSS**.

The goal of this test project is to demonstrate my ability to:  
- Analyze a front-end web app from a QA perspective  
- Design realistic and maintainable end-to-end tests  
- Document a test plan and report clearly  

## Application Overview

The To-Do List application allows users to:  
- Add tasks  
- Check tasks as completed  
- Delete tasks  
- Store task data locally (via `localStorage`)  

## Technologies Used

- React  
- Vite  
- Tailwind CSS  
- Lucide React  
- UUID  

Note: I am **not** the author of the front-end code. This project is used purely as a **test target**.

## Test Framework

- Cypress (for end-to-end testing)  
- Functional assertions based on UI behavior  

## Getting Started

To run this test suite locally:  

1. Clone the repository and navigate into the project folder by running:  
   `git clone git@github-pro:JgomezQA-DEV/qa-todo-cypress.git && cd qa-todo-cypress`

2. Install the project dependencies using:  
   `npm install`

3. Start the front-end app in a separate terminal with:  
   `npm run dev`

4. Run the Cypress test runner by executing:  
   `npx cypress open`

Once the app is running, it will be accessible at [http://localhost:5173](http://localhost:5173), and the test suite will interact with that instance.

## Test Coverage

The current automated tests validate:  
- Task creation (including input validation)  
- Task deletion  
- Task completion toggle  
- Edge case handling (empty input, duplicates)  
- UI integrity and DOM structure  

All test logic is defined inside the `cypress/e2e/` directory.

## Notes on Cypress Structure

The following folders are present by default but are not currently used in this project:  
- `cypress/fixtures/`: created automatically, unused  
- `cypress/support/`: created automatically, unused  

They can be leveraged in future improvements for mocking data or creating reusable test commands.

---

This test project is part of my freelance QA portfolio. If you’re a potential client or collaborator, feel free to reach out to discuss how I can help improve your software quality.

