const credenciais = {
  "email": "fulano@qa.com",
  "password": "teste"
}

const url = Cypress.env("API_URL")

describe('API', () => {
  it('api', () => {
    cy.request({
      method: 'POST',
      url: `${url}/login`,
      body: credenciais
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(response.body.results)
    })
  });
});