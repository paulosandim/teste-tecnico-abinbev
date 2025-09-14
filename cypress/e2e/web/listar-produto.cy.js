const url = Cypress.env("FRONT_URL")

describe('Testes para Listagem de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Validar que um produto está sendo listado com sucesso', () => {
    cy.geraDadosFakes().then((produto) => {

      cy.cadastraProduto(produto)

      cy.validaDadosCadastrados(produto)

      cy.screenshot()

      cy.excluirProduto(produto)
    })
  })
})