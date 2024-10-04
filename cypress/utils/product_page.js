
export function getProductPrice(productName) {
    // cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click()
    // cy.get('//*[@id="inventory_container"]/div/div[1]/div[3]/div').click()
    return cy.xpath(`//div[text()="${productName}"]/following::div[@class="inventory_item_price"][1]`)
        .then(($element) => {
            return $element.text()
        })
}

export function addProductToCart(productName) {
    cy.xpath(`//div[text()="${productName}"]/following::button[text()="ADD TO CART"][1]`)
        .click()
}

export function validateCartItemPrice(productName, productPrice) {
    console.log(productPrice)
    cy.xpath(`//div[text()="${productName}"]/following::div[@class="inventory_item_price"][1]`).should('have.text', productPrice)
}
