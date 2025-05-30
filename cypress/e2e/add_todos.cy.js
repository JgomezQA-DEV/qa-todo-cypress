describe('Ajout de tâches', () => {
	it('Ajoute une tâche et la voit apparaître dans la liste', () => {
		cy.visit('http://localhost:5173')

		const taskName = 'Apprendre Cypress'

		cy.get('input[placeholder="Add a task"]').type(`${taskName}{enter}`)

        cy.contains('button', 'ADD').click()

		cy.contains(taskName).should('exist')
	})
})
