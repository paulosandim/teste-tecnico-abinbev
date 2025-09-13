const url = Cypress.env("FRONT_URL")

describe('Testes para Exclusão de Produto (UI)', () => {

  beforeEach(() => {
    cy.visit(`${url}/login`)
    cy.login()
  })

  it('Cadastrar, listar e excluir produto via UI', () => {
    cy.geraDadosFakes().then((produto) => {

      cy.cadastraProduto(produto)

      cy.contains('tr', produto.nome).should('exist')

      cy.contains('tr', produto.nome)
        .find('button.btn-danger')
        .click()

      cy.get('body').should('not.contain', produto.nome)
    })
  })
})