class CartPage {

    validateCart() {
        cy.get('td.cart_price p')
        .invoke('text')
        .then((priceText) => {
            const price = parseFloat(priceText.replace('Rs. ',''))
            cy.get('td.cart_quantity button')
            .invoke('text')
            .then((quantityText) => {
                const quantity = parseInt(quantityText,10)
                
                const total = price * quantity

                cy.get('p.cart_total_price').then(($total) => {
                    const displayedTotal = parseInt($total.text().replace('Rs. ',''))
                    cy.wrap(displayedTotal).should('equal',total)
                })
            })
        })
    }

    proceedToCheckout() {
        cy.contains('a', 'Proceed To Checkout').click()
    }

    goToRegister() {
        cy.contains('u', 'Register / Login').click()
    }
    
    placeOrder() {
        cy.get('a[href="/payment"]').click()

    }

} export default new CartPage()