describe('Persistence and Stress Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('persists tasks after page reload', () => {
    const tasks = ['Persist Task 1', 'Persist Task 2', 'Persist Task 3'];

    tasks.forEach(task => {
      cy.get('[placeholder="Add a task"]').type(task);
      cy.contains('ADD').click();
    });

    cy.get('div.overflow-y-auto > div').should('have.length', tasks.length);

    cy.reload();

    cy.get('div.overflow-y-auto > div').should('have.length', tasks.length);

    tasks.forEach((task, index) => {
        const expectedTask = tasks[tasks.length - 1 - index]; // Inversion de l’ordre

        cy.get('div.overflow-y-auto > div').eq(index)
            .find('p')
            .should('contain.text', expectedTask);
        });
  });

 it('adds and deletes 30 tasks without errors', () => {
    cy.visit('/');

    for (let i = 1; i <= 30; i++) {
        cy.get('[placeholder="Add a task"]').type(`Stress Task ${i}`);
        cy.contains('ADD').click();
    }

    cy.get('div.overflow-y-auto > div').should('have.length.at.least', 30);

    for (let i = 0; i < 30; i++) {
        cy.get('div.overflow-y-auto > div').first().find('button').click();
    }

    cy.get('div.overflow-y-auto > div').should('have.length', 0);
    cy.reload();
    cy.get('div.overflow-y-auto > div').should('have.length', 0);
 });
});
