import LoginPage from './pages/LoginPage'
import ProdutosPage from './pages/ProdutosPage'
import api from './api/produtosApi'
import { gerarProdutoFake } from './factories/produtos'

Cypress.Commands.add('login', () => {
  cy.fixture('usuarios.json').then((usuarios) => {
    LoginPage.login({ username: usuarios.username, password: usuarios.password })
  })
})

Cypress.Commands.add('geraDadosFakes', () => {
  return gerarProdutoFake()
})

Cypress.Commands.add('cadastraProduto', (produto) => {
  ProdutosPage.cadastrarProduto(produto)
})

Cypress.Commands.add('excluirProduto', (produto) => {
  ProdutosPage.excluirProdutoPorNome(produto.nome)
})

Cypress.Commands.add('validaDadosCadastrados', (produto) => {
  ProdutosPage.validarDadosNaLista(produto)
})

Cypress.Commands.add('apiLogin', () => {
  return api.login().then((token) => cy.wrap(token).as('apiToken'))
})

Cypress.Commands.add('apiGeraProduto', () => {
  return api.gerarProduto()
})

Cypress.Commands.add('apiCriarProduto', (produto) => {
  return cy.get('@apiToken').then((token) => api.criarProduto(produto, token))
})

Cypress.Commands.add('apiListarProdutos', (qs = {}) => {
  return cy.get('@apiToken').then((token) => api.listarProdutos(qs, token))
})

Cypress.Commands.add('apiExcluirProduto', (id) => {
  return cy.get('@apiToken').then((token) => api.excluirProduto(id, token))
})
