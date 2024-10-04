import { login } from '../utils/login_page.js'
import { getProductPrice, addProductToCart, validateCartItemPrice } from '../utils/product_page.js'

describe('validate products page', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        login('standard_user', 'secret_sauce')
    })

    it('Product is added to cart', () => {
        let productName = 'Sauce Labs Backpack'
        let price = getProductPrice(productName)
        addProductToCart(productName)
        cy.get('#shopping_cart_container > a').click()
        validateCartItemPrice(productName, ''+price)
    })
})
