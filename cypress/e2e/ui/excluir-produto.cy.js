import { faker } from '@faker-js/faker'

const url = Cypress.env("FRONT_URL")

describe('Testes para Exclusão de Produto (UI)', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Cadastrar, listar e excluir produto via UI', () => {
    const nomeProduto = `Produto-Excluir-${faker.number.int({ min: 1000, max: 9999 })}`
    const preco = faker.commerce.price({ min: 10, max: 200, dec: 0 })
    const descricao = faker.commerce.productDescription()
    const quantidade = faker.number.int({ min: 1, max: 50 }).toString()

    cy.get('[data-testid="cadastrarProdutos"]').click()
    cy.get('[data-testid="nome"]').type(nomeProduto)
    cy.get('[data-testid="preco"]').type(preco)
    cy.get('[data-testid="descricao"]').type(descricao)
    cy.get('[data-testid="quantity"]').type(quantidade)
    cy.get('[data-testid="imagem"]').selectFile('cypress/fixtures/ibagem.png')
    cy.get('[data-testid="cadastarProdutos"]').click()

    cy.contains('tr', nomeProduto).should('exist')

    cy.contains('tr', nomeProduto)
      .find('button.btn-danger')
      .click()

    cy.get('body').should('not.contain', nomeProduto)
  })
})
