import { faker } from '@faker-js/faker'

const url = Cypress.env("FRONT_URL")

describe('Testes para Cadastro de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Validar o cadastro de um produto com sucesso', () => {
    const nomeProduto = faker.commerce.productName()
    const precoProduto = faker.commerce.price({ min: 1, max: 1000, dec: 0 })
    const descricaoProduto = faker.commerce.productDescription()
    const quantidadeProduto = faker.number.int({ min: 10, max: 100 })

    cy.get('[data-testid="cadastrarProdutos"]').click()
    cy.get('[data-testid="nome"]').type(nomeProduto)
    cy.get('[data-testid="preco"]').type(precoProduto)
    cy.get('[data-testid="descricao"]').type(descricaoProduto)
    cy.get('[data-testid="quantity"]').type(quantidadeProduto)
    cy.get('[data-testid="imagem"]').selectFile('cypress/fixtures/ibagem.png')
    cy.get('[data-testid="cadastarProdutos"]').click()

    cy.contains('Lista dos Produtos').should('be.visible')

    cy.contains('tr', nomeProduto).should('contain', precoProduto)
      .and('contain', descricaoProduto)
      .and('contain', quantidadeProduto)
  })
})