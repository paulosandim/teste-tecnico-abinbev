const url = Cypress.env("FRONT_URL")

describe('WEB', () => {
  it('front', () => {
    cy.visit(`${url}/login`)
  })
})