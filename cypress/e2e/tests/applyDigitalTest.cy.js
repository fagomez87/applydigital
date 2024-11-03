
import HomePage from '../../page-objects/HomePage'
import ProductsPage from '../../page-objects/ProductsPage'
import ProductDetailPage from '../../page-objects/ProductDetailPage'
import CartPage from '../../page-objects/CartPage'
import LoginPage from '../../page-objects/LoginPage'
import RegisterPage from '../../page-objects/RegisterPage'
import PaymentDonePage from '../../page-objects/PaymentDonePage'
import PaymentPage from '../../page-objects/PaymentPage'


describe('Automation testing', () => {
    it('Checks the QA Engineer skills set', () => {

        // Visit site and select the 3 element of the products list
        HomePage.visit()
        HomePage.navigateToProducts()
        ProductsPage.clickThirdProduct()

        // Review item details
        ProductDetailPage.validateProduct()

        // Add products to cart
        ProductDetailPage.addToCart()

        // Proceed to checkout
        HomePage.goToCart()
        CartPage.validateCart()
        CartPage.proceedToCheckout()
        CartPage.goToRegister()
        
        // Create account
        LoginPage.fillUserAndPass()

        // Fill in the new user form
        RegisterPage.fillForm()
        

        // Account created proceed to checkout
        RegisterPage.proceed()
        HomePage.proceedToCart()

        CartPage.proceedToCheckout()
        CartPage.placeOrder()

        // Payment method fulfill
        PaymentPage.fillPaymentData()

        // Validate order confirmed and logout
        PaymentDonePage.validateOrder()
        
        HomePage.logout()
    })
})

