const { faker } = require('@faker-js/faker')

export const generateRandomLogin = () => {
    return {
        randomMail: faker.internet.email(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
    }
}
export const generateRandomUser = () => {
    const basicData = generateRandomLogin()
    return {
        ...basicData,
        address: faker.location.streetAddress(),
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        randomPass: faker.internet.password(),
        mobile: faker.phone.number()
    }
}

export const generateRandomCreditCard = () => {
    return {
        cardNumber: faker.finance.creditCardNumber(),
        CVV: faker.finance.creditCardCVV(),
        expMonth: faker.date.month(),
        expYear: faker.date.future(6).getFullYear()
    }
}