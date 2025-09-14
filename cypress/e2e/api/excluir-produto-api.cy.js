describe('Testes API para Exclusão de Produtos', () => {
  let idCriado
  let produto

  before(() => cy.apiLogin())

  it('deve excluir o produto com sucesso', () => {
    cy.apiGeraProduto().then((p) => {
      produto = p
      cy.apiCriarProduto(produto).then(({ id }) => {
        idCriado = id
        cy.apiExcluirProduto(idCriado).then(() => {
          // confirma ausência (checagem simples)
          cy.apiListarProdutos().then((lista) => {
            const texto = JSON.stringify(lista)
            expect(texto).not.to.contain(produto.nome)
          })
        })
      })
    })
  })
})
