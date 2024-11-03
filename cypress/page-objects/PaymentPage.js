import { generateRandomCreditCard, generateRandomLogin, generateRandomUser } from "../utils/fakerUtils"

class PaymentPage {
    fillPaymentData() {
        const {mail, name,lastname} = generateRandomLogin()
        const {cardNumber, CVV, expMonth, expYear } = generateRandomCreditCard()

        cy.get('input[data-qa="name-on-card"]').type(name + ' ' + lastname)
        cy.get('input[data-qa="card-number"]').type(cardNumber)
        cy.get('input[data-qa="cvc"]').type(CVV)
        cy.get('input[data-qa="expiry-month"]').type(expMonth)
        cy.get('input[data-qa="expiry-year"]').type(expYear)

        cy.get('button[data-qa="pay-button"]').click()
    }
} export default new PaymentPage()