import { generateRandomLogin } from "../utils/fakerUtils"

class LoginPage {
    fillUserAndPass() {
        const {randomMail, name, lastName } = generateRandomLogin()
        cy.get('input[data-qa="signup-name"]').type(name + ' ' + lastName)
        cy.get('input[data-qa="signup-email"]').type(randomMail)
        cy.get('button[data-qa="signup-button"]').click()   
    }

} export default new LoginPage()