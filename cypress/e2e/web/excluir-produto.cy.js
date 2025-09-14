const url = Cypress.env("FRONT_URL")

describe('Testes Web para Exclusão de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Validar a exclusão de um produto com sucesso', () => {
    cy.geraDadosFakes().then((produto) => {

      cy.cadastraProduto(produto)

      cy.validaDadosCadastrados(produto)

      cy.excluirProduto(produto)

      cy.screenshot()
    })
  })
})