describe('Complétion de tâche', () => {
	it('Ajoute une tâche et la marque comme complétée', () => {
		cy.visit('http://localhost:5173')

		const taskName = 'Terminer cette tâche'

		// Ajouter la tâche
		cy.get('input').type(taskName)
		cy.contains('button', 'ADD').click()

		// Vérifie que la tâche est là
		cy.contains(taskName).should('exist')

		// Coche la case ou clique sur l'icône (à adapter selon la structure)
		cy.contains(taskName)
			.closest('div') // ou div
			.find('input[type="checkbox"]') // ou '.complete', '.check', etc.
			.check()

		// Vérifie que la tâche a la classe de complétion (ex: "completed", "line-through", etc.)
		cy.contains(taskName)
			.should('have.class', 'line-through') // à adapter selon ta classe CSS réelle
	})
})
