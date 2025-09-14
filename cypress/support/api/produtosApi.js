import { faker } from '@faker-js/faker'

export const api = {
  login: () => {
    const API = Cypress.env('API_URL')

    return cy.fixture('usuarios.json').then((u) =>
      cy.request({
        method: 'POST',
        url: `${API}/login`,
        body: { email: u.username, password: u.password },
      }).then((res) => {
        expect(res.status).to.eq(200)
        const token = res.body.authorization
        expect(token, 'token de autorização').to.exist
        return cy.wrap(token)
      })
    )
  },

  gerarProduto: () => {
    const produto = {
      nome: faker.commerce.productName(),
      preco: faker.commerce.price({ min: 1, max: 1000, dec: 0 }),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 10, max: 100 })
    }
    return cy.wrap(produto)
  },

  criarProduto: (produto, token) => {
    const API = Cypress.env('API_URL')
    return cy.request({
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
  },

  listarProdutos: (qs = {}, token) => {
    const API = Cypress.env('API_URL')
    return cy.request({
      method: 'GET',
      url: `${API}/produtos`,
      qs,
      headers: { Authorization: token },
    }).then((res) => {
      expect(res.status).to.eq(200)
      return cy.wrap(res.body)
    })
  },

  excluirProduto: (id, token) => {
    const API = Cypress.env('API_URL')
    return cy.request({
      method: 'DELETE',
      url: `${API}/produtos/${id}`,
      headers: { Authorization: token },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 204])
      return cy.wrap(res.body)
    })
  }
}

export default api

