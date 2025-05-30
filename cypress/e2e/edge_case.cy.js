describe('Cas limites sur les tâches', () => {

	const emptyTask = ''
	const longTask = 'a'.repeat(300)
	const duplicateTask = 'Tâche doublon'

	beforeEach(() => {
		cy.visit('http://localhost:5173')
	})

	it('Le bouton "Add" est désactivé si le champ est vide', () => {
        cy.get('input').clear()
    
        // Vérifie que le bouton est désactivé
        cy.contains('button', 'ADD').should('be.disabled')
    })

	it('Accepte une tâche très longue', () => {
		cy.get('input').type(longTask)
		cy.contains('button', 'ADD').click()

		cy.contains(longTask).should('exist')
	})

	it('Autorise des doublons', () => {
		cy.get('input[placeholder="Add a task"]').type(duplicateTask)
		cy.contains('button', 'ADD').click()

		cy.get('input[placeholder="Add a task"]').type(duplicateTask)
		cy.contains('button', 'ADD').click()

		cy.get('.overflow-y-auto').children().filter((_, el) => {
            return el.innerText.trim() === 'Tâche doublon'
        }).should('have.length', 2)
	})
})
