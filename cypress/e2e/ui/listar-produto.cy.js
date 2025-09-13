const url = Cypress.env("FRONT_URL")

describe('Testes para Listagem de Produtos', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Validar que um produto está sendo listado com sucesso', () => {
    cy.geraDadosFakes().then((produto) => {

      cy.cadastraProduto(produto)

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