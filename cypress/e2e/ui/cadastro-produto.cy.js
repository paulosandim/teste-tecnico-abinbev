const url = Cypress.env("FRONT_URL")

describe('Testes para Cadastro de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Validar o cadastro de um produto com sucesso', () => {
    cy.get('[data-testid="cadastrarProdutos"]').click()

    cy.get('[data-testid="nome"]').type('Pack Coronita')
    cy.get('[data-testid="preco"]').type('35')
    cy.get('[data-testid="descricao"]').type('Cerveja 210 ml, leve e refrescante')
    cy.get('[data-testid="quantity"]').type('80')
    cy.get('[data-testid="imagem"]').selectFile('cypress/fixtures/pack-coronita.png')
    cy.get('[data-testid="cadastarProdutos"]').click()

    cy.contains('Lista dos Produtos').should('be.visible')
  })
})