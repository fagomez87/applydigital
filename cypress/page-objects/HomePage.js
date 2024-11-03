class HomePage {
    visit() {
        cy.visit('https://automationexercise.com/')
    }

    navigateToProducts() {
        cy.get('a[href="/products"]').click()
    }

    goToCart() {
        cy.contains('u', 'View Cart').click()
    }
    proceedToCart() {
        cy.get('header[id="header"] li').eq(2).click()
    }
    logout() {
        cy.get('a[href="/logout"]').click()
    }
} export default new HomePage()