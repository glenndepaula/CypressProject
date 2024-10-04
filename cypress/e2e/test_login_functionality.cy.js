import { login, validateError } from '../utils/login_page.js'

describe('validate the app login functionality', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    })

    it('Login success', () => {
        cy.login('standard_user', 'secret_sauce')
        // cy.get('div.product_label').contains('Products')
        cy.get('div.product_label').should('have.text', 'Products')
    })

    it('Login failure', () => {
        login('non_existent_username', 'non_existent_password')
        validateError('Epic sadface: Username and password do not match any user in this service')
    })

    it('Locked account failure', () => {
        login('locked_out_user', 'secret_sauce')
        validateError('Epic sadface: Sorry, this user has been locked out.')
    })

})
