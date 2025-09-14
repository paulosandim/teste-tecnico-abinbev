describe('API - Cadastro de produto', () => {
  before(() => cy.apiLogin())

  it('deve cadastrar produto com sucesso', () => {
    cy.apiGeraProduto().then((produto) => {
      cy.apiCriarProduto(produto).then(({ id }) => {
        expect(id).to.exist

        cy.apiListarProdutos().then((lista) => {
          const texto = JSON.stringify(lista)
          expect(texto).to.contain(produto.nome)
        })

        // cy.apiExcluirProduto(id)
      })
    })
  })
})
