import { v4 as uuid } from 'uuid'

describe('Pizza Order Form', () => {
	it('Navigate to Pizza Form', () => {
		cy.visit('http://localhost:3000/pizza')
	})

	it('Can add text to name box', ()=> {
		cy.get('input[name="name"]')
			.type('test')
			.should('have.value', 'test')
	})

	it('Can select multiple toppings', () => {
		cy.get('input[name="pepperoni"]')
			.check()
		cy.get('input[name="tomatoes"]')
			.check()
	})

	it('Can submit form', () => {
		cy.get('button[name="submit"]')
			.click()
	})
})

// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form
