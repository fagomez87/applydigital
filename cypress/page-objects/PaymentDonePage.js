const orderConfirmed = 'Congratulations! Your order has been confirmed!'

class PaymentDonePage {
    validateOrder() {
        cy.get('section[id="form"] p').should('have.text', orderConfirmed)
        cy.get('a[data-qa="continue-button"]').click()

    }

} export default new PaymentDonePage()