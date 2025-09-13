const url = Cypress.env("FRONT_URL")

describe('Testes para Exclusão de Produto (UI)', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Cadastrar, listar e excluir produto via UI', () => {
    cy.geraDadosFakes().then((produto) => {

      cy.get('[data-testid="cadastrarProdutos"]').click()
      cy.get('[data-testid="nome"]').type(produto.nome)
      cy.get('[data-testid="preco"]').type(produto.preco)
      cy.get('[data-testid="descricao"]').type(produto.descricao)
      cy.get('[data-testid="quantity"]').type(produto.quantidade)
      cy.get('[data-testid="imagem"]').selectFile('cypress/fixtures/ibagem.png')
      cy.get('[data-testid="cadastarProdutos"]').click()

      cy.contains('tr', produto.nome).should('exist')

      cy.contains('tr', produto.nome)
        .find('button.btn-danger')
        .click()

      cy.get('body').should('not.contain', produto.nome)
    })
  })
})