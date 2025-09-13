const url = Cypress.env("FRONT_URL")

describe('Testes para Listagem de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Validar que o Produto cadastrado está na Lista de Produtos', () => {
    cy.get('[data-testid="listarProdutos"]').click()

    cy.contains('Lista dos Produtos').should('be.visible')
    // cy.contains('Pack Coronita').should('be.visible')
  })
})