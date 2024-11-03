import { generateRandomUser } from "../utils/fakerUtils"

class RegisterPage {
    fillForm() {
        const {randomMail, name, lastName, address, state, city, zipcode, randomPass, mobile} = generateRandomUser()

        cy.get('input[name="title"]').eq(0).click()
        cy.get('input[data-qa="password"]').type(randomPass)
        this.randomValue('select[data-qa="days"]')
        this.randomValue('select[data-qa="months"]')
        this.randomValue('select[data-qa="years"]')

        cy.get('input[data-qa="first_name"]').type(name)
        cy.get('input[data-qa="last_name"]').type(lastName)
        cy.get('input[data-qa="address"]').type(address)

        this.randomValue('select[data-qa="country"]')
        cy.get('input[data-qa="state"]').type(state)
        cy.get('input[data-qa="city"]').type(city)
        cy.get('input[data-qa="zipcode"]').type(zipcode)
        cy.get('input[data-qa="mobile_number"]').type(mobile)

        cy.get('button[data-qa="create-account"]').click()    
    }

    proceed() {
        cy.get('a[data-qa="continue-button"]').click()
    }

    randomValue = (selector) => {
        cy.get(selector).then($dropdown => {
            const options = $dropdown.find('option');
            const randomIndex = Math.floor(Math.random() * options.length);
            const randomValue = options[randomIndex].value;
    
            // Select the random option by its value
            cy.get(selector).select(randomValue);
        })
    }
} export default new RegisterPage()