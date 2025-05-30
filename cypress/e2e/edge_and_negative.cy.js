describe('Edge Cases and Negative Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('disables ADD button when input is empty or whitespace only', () => {
    cy.get('[placeholder="Add a task"]').clear();
    cy.contains('ADD').should('be.disabled');

    cy.get('[placeholder="Add a task"]').type('    ');
    cy.contains('ADD').should('be.disabled');

    cy.get('[placeholder="Add a task"]').type('Valid task');
    cy.contains('ADD').should('not.be.disabled');
  });

  it('accepts tasks with emojis and special characters', () => {
    const specialTask = 'Task with emoji 😊🚀 and symbols #@!*';

    cy.get('[placeholder="Add a task"]').type(specialTask);
    cy.contains('ADD').click();

    cy.get('div.overflow-y-auto > div').last()
      .find('p')
      .should('contain.text', specialTask);
  });

  it('allows adding duplicate tasks', () => {
    const dupTask = 'Duplicate task';

    cy.get('[placeholder="Add a task"]').type(dupTask);
    cy.contains('ADD').click();

    cy.get('[placeholder="Add a task"]').type(dupTask);
    cy.contains('ADD').click();

    cy.get('div.overflow-y-auto > div')
      .filter(`:contains("${dupTask}")`)
      .should('have.length', 2);
  });

  it('handles corrupted localStorage gracefully', () => {
    cy.window().then(win => {
      win.localStorage.setItem('tasks', '{invalid_json}');
    });

    cy.reload();

    cy.get('div.overflow-y-auto > div').should('have.length', 0);
  });
});
