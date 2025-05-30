describe('Task Overflow Display', () => {
  it('should NOT overflow with a very long unbroken string', () => {
  cy.visit('/');

  const longWord = 'a'.repeat(1000);
  cy.get('[placeholder="Add a task"]').type(longWord);
  cy.contains('ADD').click();

  cy.get('div.overflow-y-auto')
    .then($container => {
      const scrollWidth = $container[0].scrollWidth;
      const clientWidth = $container[0].clientWidth;

      // Si overflow détecté => bug => test échoue
      if (scrollWidth > clientWidth) {
        cy.screenshot('task-overflow-bug-detected');
      }

      expect(scrollWidth, 'No horizontal overflow should occur')
        .to.be.lte(clientWidth); // attente normale : pas de débordement
    });
    });
  it('should not overflow with a long phrase containing spaces', () => {
    cy.visit('/');

    const longPhrase = 'This is a very long sentence with spaces that should wrap normally and not cause any overflow issues. '.repeat(20);
    cy.get('[placeholder="Add a task"]').type(longPhrase);
    cy.contains('ADD').click();

    cy.get('div.overflow-y-auto')
      .then($container => {
        const scrollWidth = $container[0].scrollWidth;
        const clientWidth = $container[0].clientWidth;

        expect(scrollWidth, `Expected no horizontal overflow with spaced text: scrollWidth (${scrollWidth}px) <= clientWidth (${clientWidth}px)`)
          .to.be.lte(clientWidth);
      });
  });
});
