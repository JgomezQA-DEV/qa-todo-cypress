describe('Advanced UI/UX and Workflow Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should disable the ADD button appropriately based on input', () => {
    cy.contains('ADD').should('be.disabled');

    cy.get('[placeholder="Add a task"]').type('New Task');
    cy.contains('ADD').should('not.be.disabled');

    cy.contains('ADD').click();
    cy.contains('ADD').should('be.disabled');

    cy.get('[placeholder="Add a task"]').type('Another Task');
    cy.contains('ADD').should('not.be.disabled');
  });

  it('should keep completed tasks visually distinct after page reload', () => {
    const task = 'Task to complete';

    cy.get('[placeholder="Add a task"]').type(task);
    cy.contains('ADD').click();

    cy.get('div.overflow-y-auto > div').first().find('input[type="checkbox"]').check();

    cy.get('div.overflow-y-auto > div').first()
      .find('p')
      .should('have.class', 'line-through');

    cy.reload();

    cy.get('div.overflow-y-auto > div').first()
      .find('p')
      .should('have.class', 'line-through');
  });

  it('should show proper behavior for invalid input (empty or spaces)', () => {
    cy.get('[placeholder="Add a task"]').clear();
    cy.contains('ADD').should('be.disabled');

    cy.get('[placeholder="Add a task"]').type('     ');
    cy.contains('ADD').should('be.disabled');
  });

  it('should add, complete, delete tasks and verify final state', () => {
    const tasks = ['Task A', 'Task B', 'Task C', 'Task D'];

    tasks.forEach(task => {
      cy.get('[placeholder="Add a task"]').type(task);
      cy.contains('ADD').click();
    });

    cy.get('div.overflow-y-auto > div')
      .contains('Task B')
      .parent()
      .find('input[type="checkbox"]')
      .check();

    cy.get('div.overflow-y-auto > div')
      .contains('Task C')
      .parent()
      .find('input[type="checkbox"]')
      .check();

    cy.get('div.overflow-y-auto > div')
      .contains('Task A')
      .parent()
      .parent()
      .find('button')
      .click();

    cy.get('div.overflow-y-auto > div').should('have.length', 3);
    cy.get('div.overflow-y-auto > div').should('not.contain', 'Task A');

    cy.get('div.overflow-y-auto > div')
      .contains('Task B')
      .parent()
      .parent()
      .find('p')
      .should('have.class', 'line-through');

    cy.get('div.overflow-y-auto > div')
      .contains('Task C')
      .parent()
      .parent()
      .find('p')
      .should('have.class', 'line-through');

    cy.get('div.overflow-y-auto > div')
      .contains('Task D')
      .parent()
      .find('p')
      .should('not.have.class', 'line-through');
  });

  it('should preserve task order after reload', () => {
    const tasks = ['First Task', 'Second Task', 'Third Task'];

    function verifyTasksOrder(tasks) {
      tasks.forEach((task, index) => {
        const expectedTask = tasks[tasks.length - 1 - index];
        cy.get('div.overflow-y-auto > div').eq(index)
          .find('p')
          .should('contain.text', expectedTask);
      });
    }

    tasks.forEach(task => {
      cy.get('[placeholder="Add a task"]').type(task);
      cy.contains('ADD').click();
    });

    verifyTasksOrder(tasks);

    cy.reload();

    verifyTasksOrder(tasks);
  });
});

