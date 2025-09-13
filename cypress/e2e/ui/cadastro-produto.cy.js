const url = Cypress.env("FRONT_URL")

describe('WEB', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Cadastrar um produto', () => {
    cy.get('[data-testid="cadastrarProdutos"]').click()
    cy.get('[data-testid="nome"]').type('Produto Teste')
    cy.get('[data-testid="descricao"]').type('Descrição do Produto Teste')
    cy.get('[data-testid="preco"]').type('99.90')
    cy.get('[data-testid="quantidade"]').type('10')
    cy.get('[data-testid="categoria"]').select('Eletrônicos')
    cy.get('[data-testid="botaoCadastrar"]').click()
    cy.contains('Produto cadastrado com sucesso!').should('be.visible')

  })
})