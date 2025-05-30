describe('Suppression de tâche', () => {
	it('Ajoute puis supprime une tâche', () => {
		cy.visit('http://localhost:5173')

		const taskName = 'Supprimer cette tâche'

		// Ajouter la tâche
		cy.get('input').type(taskName)
		cy.contains('button', 'ADD').click()

		// Vérifie que la tâche est bien là
		cy.contains(taskName).should('exist')

		// Clique sur le bouton de suppression associé à la tâche
		cy.contains(taskName)
			.parent() // On remonte à l'élément parent (généralement <li> ou <div>)
            .parent()
			.find('button') // On cherche un bouton dedans (suppression)
			.click()

		// Vérifie que la tâche n’existe plus
		cy.contains(taskName).should('not.exist')
	})
})
