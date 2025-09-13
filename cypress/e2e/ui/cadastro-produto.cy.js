const url = Cypress.env("FRONT_URL")

describe('Testes para Cadastro de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Validar o cadastro de um produto com sucesso', () => {
    cy.geraDadosFakes().then((produto) => {

      cy.get('[data-testid="cadastrarProdutos"]').click()
      cy.get('[data-testid="nome"]').type(produto.nome)
      cy.get('[data-testid="preco"]').type(produto.preco)
      cy.get('[data-testid="descricao"]').type(produto.descricao)
      cy.get('[data-testid="quantity"]').type(produto.quantidade)
      cy.get('[data-testid="imagem"]').selectFile('cypress/fixtures/ibagem.png')
      cy.get('[data-testid="cadastarProdutos"]').click()

      cy.contains('Lista dos Produtos').should('be.visible')

      cy.contains('tr', produto.nome).should('contain', produto.preco)
        .and('contain', produto.descricao)
        .and('contain', produto.quantidade)
    })
  })
})