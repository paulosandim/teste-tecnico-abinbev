import { faker } from '@faker-js/faker'

Cypress.Commands.add('login', () => {
  cy.fixture('usuarios.json').then((usuarios) => {
    cy.get('#email').type(usuarios.username)
    cy.get('#password').type(usuarios.password)
    cy.get('[data-testid="entrar"]').click()
  })
})

Cypress.Commands.add('geraDadosFakes', () => {
  return {
    nome: faker.commerce.productName(),
    preco: faker.commerce.price({ min: 1, max: 1000, dec: 0 }),
    descricao: faker.commerce.productDescription(),
    quantidade: faker.number.int({ min: 10, max: 100 })
  }
})
