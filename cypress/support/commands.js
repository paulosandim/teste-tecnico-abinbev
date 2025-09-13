Cypress.Commands.add('login', () => {
  cy.fixture('usuarios.json').then((usuarios) => {
    cy.get('#email').type(usuarios.username)
    cy.get('#password').type(usuarios.password)
    cy.get('[data-testid="entrar"]').click()
  })
})
