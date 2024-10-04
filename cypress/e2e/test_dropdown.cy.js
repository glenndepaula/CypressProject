describe('Handle dropdowns', () => {

    it('Change the dropdown value', () => {
        cy.visit('https://bstackdemo.com/')
        cy.get('select').select("Highest to lowest")
    })

    it('Validate default dropdown value', () => {
        cy.visit('https://bstackdemo.com/')
        cy.get('select').invoke('val').should('eq', '')
    })
})
