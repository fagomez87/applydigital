class ProductsPage {
    clickThirdProduct() {
        cy.get('ul.nav-justified a').eq(2).click()
    }

} export default new ProductsPage()