describe('Testes API para Cadastro de Produtos', () => {
  before(() => cy.apiLogin())

  it('Validar o cadastro de um produto com sucesso na API', () => {
    cy.apiGeraProduto().then((produto) => {
      cy.apiCriarProduto(produto).then(({ id }) => {
        expect(id).to.exist

        cy.apiListarProdutos().then((lista) => {
          const texto = JSON.stringify(lista)
          expect(texto).to.contain(produto.nome)
        })

        cy.apiExcluirProduto(id)
      })
    })
  })
})
