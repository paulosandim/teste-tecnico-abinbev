const url = Cypress.env("FRONT_URL")

describe('Testes para Exclusão de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Cadastrar, listar e excluir produto via UI', () => {
    cy.geraDadosFakes().then((produto) => {

      cy.cadastraProduto(produto)

      cy.validaDadosCadastrados(produto)

      cy.excluirProduto(produto)

      cy.get('body').should('not.contain', produto.nome)
    })
  })
})