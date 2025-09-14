import { faker } from '@faker-js/faker'

Cypress.Commands.add('login', () => {
  cy.fixture('usuarios.json').then((usuarios) => {
    cy.get('#email').type(usuarios.username)
    cy.get('#password').type(usuarios.password)
    cy.get('[data-testid="entrar"]').click()
  })
})

Cypress.Commands.add('geraDadosFakes', () => {
  return {
    nome: faker.commerce.productName(),
    preco: faker.commerce.price({ min: 1, max: 1000, dec: 0 }),
    descricao: faker.commerce.productDescription(),
    quantidade: faker.number.int({ min: 10, max: 100 })
  }
})

Cypress.Commands.add('cadastraProduto', (produto) => {
  cy.get('[data-testid="cadastrarProdutos"]').click()
  cy.get('[data-testid="nome"]').type(produto.nome)
  cy.get('[data-testid="preco"]').type(produto.preco)
  cy.get('[data-testid="descricao"]').type(produto.descricao)
  cy.get('[data-testid="quantity"]').type(produto.quantidade)
  cy.get('[data-testid="imagem"]').selectFile('cypress/fixtures/ibagem.png')
  cy.get('[data-testid="cadastarProdutos"]').click()
})

Cypress.Commands.add('excluirProduto', (produto) => {
  cy.contains('tr', produto.nome)
    .find('button.btn-danger')
    .click()
  cy.get('body').should('not.contain', produto.nome)
})

Cypress.Commands.add('validaDadosCadastrados', (produto) => {
  cy.contains('Lista dos Produtos').should('be.visible')

  cy.contains('tr', produto.nome)
    .should('contain', produto.preco)
    .and('contain', produto.descricao)
    .and('contain', produto.quantidade)
})

// ==== API COMMANDS ====
Cypress.Commands.add('apiLogin', () => {
  const API = Cypress.env('API_URL')

  return cy.fixture('usuarios.json').then((u) =>
    cy.request({
      method: 'POST',
      url: `${API}/login`,
      body: { email: u.username, password: u.password },
    }).then((res) => {
      expect(res.status).to.eq(200)
      // Serverest: token costuma vir em res.body.authorization
      const token = res.body.authorization
      expect(token, 'token de autorização').to.exist
      return cy.wrap(token).as('apiToken')
    })
  )
})

/** Gera payload válido de produto (para API) */
Cypress.Commands.add('apiGeraProduto', () => {
  const produto = {
    nome: faker.commerce.productName(),
    preco: faker.commerce.price({ min: 1, max: 1000, dec: 0 }),
    descricao: faker.commerce.productDescription(),
    quantidade: faker.number.int({ min: 10, max: 100 })
  }
  return cy.wrap(produto)
})

Cypress.Commands.add('apiCriarProduto', (produto) => {
  const API = Cypress.env('API_URL')

  return cy.get('@apiToken').then((token) =>
    cy.request({
      method: 'POST',
      url: `${API}/produtos`,
      headers: { Authorization: token },
      body: produto,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 201])
      const id = res.body._id || res.body.id || res.body.result?._id
      expect(id, 'id do produto criado').to.exist
      return cy.wrap({ id, body: res.body })
    })
  )
})

Cypress.Commands.add('apiListarProdutos', (qs = {}) => {
  const API = Cypress.env('API_URL')

  return cy.get('@apiToken').then((token) =>
    cy.request({
      method: 'GET',
      url: `${API}/produtos`,
      qs,
      headers: { Authorization: token },
    }).then((res) => {
      expect(res.status).to.eq(200)
      return cy.wrap(res.body)
    })
  )
})

Cypress.Commands.add('apiExcluirProduto', (id) => {
  const API = Cypress.env('API_URL')

  return cy.get('@apiToken').then((token) =>
    cy.request({
      method: 'DELETE',
      url: `${API}/produtos/${id}`,
      headers: { Authorization: token },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 204])
      return cy.wrap(res.body)
    })
  )
})
