const url = Cypress.env("FRONT_URL")

describe('Testes para Cadastro de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Validar o cadastro de um produto com sucesso', () => {
    cy.geraDadosFakes().then((produto) => {

      cy.cadastraProduto(produto)

      cy.validaDadosCadastrados(produto)
    })
  })
})