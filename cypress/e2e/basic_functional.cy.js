describe('Basic Functional Tests', () => {
  it('should add, verify, toggle and delete tasks correctly', () => {
    cy.visit('/');

    const tasks = ['Task 1', 'Task 2', 'Task 3'];

    // Ajouter les tâches
    tasks.forEach(task => {
      cy.get('[placeholder="Add a task"]').type(task);
      cy.contains('ADD').click();
    });

    // Vérifier le nombre et l’ordre (inverse)
    cy.get('div.overflow-y-auto > div').should('have.length', tasks.length);
    tasks.forEach((task, index) => {
      const expectedTask = tasks[tasks.length - 1 - index];
      cy.get('div.overflow-y-auto > div').eq(index)
        .find('p')
        .should('contain.text', expectedTask);
    });

    // Compléter la première tâche (la plus récente)
    cy.get('div.overflow-y-auto > div').first().find('input[type="checkbox"]').check();
    cy.get('div.overflow-y-auto > div').first()
      .find('p')
      .should('have.class', 'line-through');

    // Décoche la tâche
    cy.get('div.overflow-y-auto > div').first().find('input[type="checkbox"]').uncheck();
    cy.get('div.overflow-y-auto > div').first()
      .find('p')
      .should('not.have.class', 'line-through');

    // Supprimer toutes les tâches
    cy.get('div.overflow-y-auto > div').each($el => {
      cy.wrap($el).find('button').click();
    });

    // Vérifier qu’il n’y a plus de tâches
    cy.get('div.overflow-y-auto > div').should('have.length', 0);
  });
});
