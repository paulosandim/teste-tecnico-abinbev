const url = Cypress.env("FRONT_URL")

describe('Testes para Exclusão de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Valida a exclusão de um produto com sucesso', () => {
    cy.geraDadosFakes().then((produto) => {

      cy.cadastraProduto(produto)

      cy.validaDadosCadastrados(produto)

      cy.excluirProduto(produto)
    })
  })
})