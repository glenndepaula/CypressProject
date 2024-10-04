
const username_field = '#user-name'
const password_field = '#password'
const login_button = '#login-button'
const error_message_container = '#login_button_container > div > form > h3'

export function login(username, password) {
    cy.get(username_field).type(username)
    cy.get(password_field).type(password)
    cy.get(login_button).click()
}

export function validateError(message) {
    cy.get(error_message_container)
            .should('have.text', message)
}