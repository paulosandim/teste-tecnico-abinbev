describe('Testes API para Exclusão de Produtos', () => {
  let idCriado
  let produto

  before(() => cy.apiLogin())

  it('Validar a exclusão de um produto com sucesso na API', () => {
    cy.apiGeraProduto().then((p) => {
      produto = p
      cy.apiCriarProduto(produto).then(({ id }) => {
        idCriado = id
        cy.apiExcluirProduto(idCriado).then(() => {
          // confirma ausência simples
          cy.apiListarProdutos().then((lista) => {
            const texto = JSON.stringify(lista)
            expect(texto).not.to.contain(produto.nome)
          })
        })
      })
    })
  })
})
