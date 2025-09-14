describe('Testes API para Listagem de Produtos', () => {
  let idCriado
  let produto

  before(() => cy.apiLogin())

  beforeEach(() =>
    cy.apiGeraProduto().then((p) => {
      produto = p
      return cy.apiCriarProduto(produto).then(({ id }) => (idCriado = id))
    })
  )

  afterEach(() => idCriado && cy.apiExcluirProduto(idCriado))

  it('Validar que um produto está sendo listado com sucesso na API', () => {
    cy.apiListarProdutos().then((lista) => {
      const texto = JSON.stringify(lista)
      expect(texto).to.contain(produto.nome)
      expect(texto).to.contain(produto.descricao)
    })
  })
})
