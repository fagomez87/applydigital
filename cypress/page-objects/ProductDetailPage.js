const productName = 'Sleeveless Dress'
const productCategory = 'Category: Women > Dress'
const productPrice = 'Rs. 1000'
const productAvailability = 'Availability: In Stock'
const productCondition = 'Condition: New'
const productBrand = 'Brand: Madame'

class ProductDetailPage {
    validateProduct() {
        // // Review item details
        cy.get('div.product-information h2').should('have.text', productName)
        cy.get('div.product-information p').eq(0).should('have.text', productCategory)
        cy.get('div.product-information span').eq(1).should('have.text', productPrice)

        cy.get('div.product-information p').eq(1).should('have.text', productAvailability)
        cy.get('div.product-information p').eq(2).should('have.text', productCondition)
        cy.get('div.product-information p').eq(3).should('have.text', productBrand)
    }

    addToCart() {
        // Add products to cart
        cy.get('input#quantity').clear().type(this.getRandomNumber())
        cy.get('button[type="button"]').click()
    }

    getRandomNumber = () => Math.floor(Math.random() * 20) + 1;


} export default new ProductDetailPage()