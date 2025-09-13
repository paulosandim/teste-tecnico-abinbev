const url = Cypress.env("FRONT_URL")

describe('Testes para Listagem de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Validar que a Lista dos Produtos está realizando a listagem', () => {
    cy.get('[data-testid="listarProdutos"]').click()

    cy.contains('Lista dos Produtos').should('be.visible')
  })
})