const url = Cypress.env("FRONT_URL")

describe('Testes para Listagem de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Validar que um produto está sendo listado com sucesso', () => {
    cy.geraDadosFakes().then((produto) => {

      cy.get('[data-testid="cadastrarProdutos"]').click()
      cy.get('[data-testid="nome"]').type(produto.nome)
      cy.get('[data-testid="preco"]').type(produto.preco)
      cy.get('[data-testid="descricao"]').type(produto.descricao)
      cy.get('[data-testid="quantity"]').type(produto.quantidade)
      cy.get('[data-testid="imagem"]').selectFile('cypress/fixtures/ibagem.png')
      cy.get('[data-testid="cadastarProdutos"]').click()

      cy.contains('tr', produto.nome)
        .should('exist')
        .and('contain', produto.preco)
        .and('contain', produto.descricao)
        .and('contain', produto.quantidade)

      cy.contains('tr', produto.nome)
        .find('button.btn-danger')
        .click()

      cy.get('body').should('not.contain', produto.nome)
    })
  })
})