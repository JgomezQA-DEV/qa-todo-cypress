describe('Persistance des tâches après rafraîchissement', () => {
	it('Garde les tâches visibles après rechargement de la page', () => {
		cy.visit('http://localhost:5173')

		const taskName = 'Tâche persistante'

		// Ajoute la tâche
		cy.get('input[placeholder="Add a task"]').type(taskName)
		cy.contains('button', 'ADD').click()

		// Vérifie qu’elle est bien visible
		cy.contains(taskName).should('exist')

		// Recharge la page
		cy.reload()

		// Vérifie que la tâche est toujours là
		cy.contains(taskName).should('exist')
	})
})
