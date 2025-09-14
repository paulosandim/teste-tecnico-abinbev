export class ProdutosPage {
  elements = {
    cadastrarProdutos: () => cy.get('[data-testid="cadastrarProdutos"]'),
    nome: () => cy.get('[data-testid="nome"]'),
    preco: () => cy.get('[data-testid="preco"]'),
    descricao: () => cy.get('[data-testid="descricao"]'),
    quantidade: () => cy.get('[data-testid="quantity"]'),
    imagem: () => cy.get('[data-testid="imagem"]'),
    salvar: () => cy.get('[data-testid="cadastarProdutos"]'),
    tabela: () => cy.get('table'),
  }

  abrirFormulario() {
    this.elements.cadastrarProdutos().click()
    return this
  }

  preencherFormulario({ nome, preco, descricao, quantidade, imagemPath = 'cypress/fixtures/ibagem.png' }) {
    this.elements.nome().clear().type(nome)
    this.elements.preco().clear().type(preco)
    this.elements.descricao().clear().type(descricao)
    this.elements.quantidade().clear().type(quantidade)
    this.elements.imagem().selectFile(imagemPath)
    return this
  }

  salvarCadastro() {
    this.elements.salvar().click()
    return this
  }

  cadastrarProduto(produto) {
    this.abrirFormulario()
    this.preencherFormulario(produto)
    this.salvarCadastro()
    return this
  }

  excluirProdutoPorNome(nome) {
    cy.contains('tr', nome).find('button.btn-danger').click()
    cy.get('body').should('not.contain', nome)
    return this
  }

  validarDadosNaLista({ nome, preco, descricao, quantidade }) {
    cy.contains('Lista dos Produtos').should('be.visible')
    cy.contains('tr', nome)
      .should('contain', preco)
      .and('contain', descricao)
      .and('contain', quantidade)
    return this
  }
}

export default new ProdutosPage()

