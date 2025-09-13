const url = Cypress.env("FRONT_URL")

describe('WEB', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Cadastrar um produto', () => {
    cy.get('[data-testid="cadastrarProdutos"]').click()
    cy.get('[data-testid="nome"]').type('Pack Coronita')
    cy.get('[data-testid="preco"]').type('5.00')
    cy.get('[data-testid="descricao"]').type('Cerveja 210 ml, leve e refrescante')
    cy.get('[data-testid="quantity"]').type('80')
    cy.get('[data-testid="imagem"]').selectFile('cypress/fixtures/pack-coronita.png')
    cy.get('[data-testid="cadastarProdutos"]').click()

  })
})