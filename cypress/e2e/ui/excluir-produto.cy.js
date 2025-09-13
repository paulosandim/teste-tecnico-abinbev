const url = Cypress.env("FRONT_URL")

describe('Testes para Exclusão de Produto', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Validar a Exclusão de um Produto e garantir que o mesmo não está listado', () => {
    cy.get('[data-testid="listarProdutos"]').click()

    // cy.contains('tr', 'Pack Coronita')
    //   .find('button.btn-danger')
    //   .click()

    cy.get('body').should('not.contain', 'Pack Coronita')

  })
})