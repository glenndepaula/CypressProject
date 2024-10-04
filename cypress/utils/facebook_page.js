
const logo = 'img.fb_logo'
const sub_header = '#content > div > div > div > div._8esl > h2'

export function logoIsVisible() {
    cy.get(logo).should('be.visible')
}

export function subheaderShows(text) {
    cy.get(sub_header)
        .should('be.visible')
        .should('have.text', text)
}

const email_field = 'input#email'
const password_field = 'input#pass'
const login_button = '//button[@name="login"]'
const error_message_container = 'h2.uiHeaderTitle'

export function login(email, password) {
    cy.get(email_field).type(email)
    cy.get(password_field).type(password)
    cy.xpath(login_button).click()
}

export function loginFailed() {
    cy.get(error_message_container).contains('Your request couldn\'t be processed')
}

const signup_link = '//a[text()="Create new account"]'
const firstname_field = '//input[@name="firstname"]'
const lastname_field = '//input[@name="lastname"]'
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const birthday_month_field = '//select[@name="birthday_month"]'
const birthday_day_field = '//select[@name="birthday_day"]'
const birthday_year_field = '//select[@name="birthday_year"]'
const custom_gender_option = '//input[@name="sex"][@value="-1"]'
const custom_pronoun_option = '//select[@name="preferred_pronoun"]'
const email_signup_field = '//input[@name="reg_email__"]'
const new_password_field = 'input#password_step_input'

export function signup(firstname, lastname, birthdate, email_address, password) {
    cy.xpath(signup_link).click()

    cy.xpath(firstname_field).type(firstname)
    cy.xpath(lastname_field).type(lastname)

    cy.xpath(birthday_day_field).select(birthdate.getDate())
    cy.xpath(birthday_month_field).select(months[birthdate.getMonth()])
    cy.xpath(birthday_year_field).select(''+birthdate.getFullYear())

    cy.xpath(custom_gender_option).click()
    cy.xpath(custom_pronoun_option).select('They: "Wish them a happy birthday!"')

    cy.xpath(email_signup_field).type(email_address)
    cy.get(new_password_field).type(password)
}
