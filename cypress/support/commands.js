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

Cypress.Commands.add('cadastraProduto', (produto) => {
  cy.get('[data-testid="cadastrarProdutos"]').click()
  cy.get('[data-testid="nome"]').type(produto.nome)
  cy.get('[data-testid="preco"]').type(produto.preco)
  cy.get('[data-testid="descricao"]').type(produto.descricao)
  cy.get('[data-testid="quantity"]').type(produto.quantidade)
  cy.get('[data-testid="imagem"]').selectFile('cypress/fixtures/ibagem.png')
  cy.get('[data-testid="cadastarProdutos"]').click()
})

Cypress.Commands.add('excluirProduto', (produto) => {
  cy.contains('tr', produto.nome)
    .find('button.btn-danger')
    .click()
})

Cypress.Commands.add('validaDadosCadastrados', (produto) => {
  cy.contains('tr', produto.nome)
    .should('contain', produto.preco)
    .and('contain', produto.descricao)
    .and('contain', produto.quantidade)
})
