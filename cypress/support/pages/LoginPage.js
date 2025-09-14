export class LoginPage {
  elements = {
    email: () => cy.get('#email'),
    password: () => cy.get('#password'),
    entrar: () => cy.get('[data-testid="entrar"]'),
  }

  preencherEmail(email) {
    this.elements.email().clear().type(email)
    return this
  }

  preencherSenha(password) {
    this.elements.password().clear().type(password)
    return this
  }

  enviar() {
    this.elements.entrar().click()
    return this
  }

  login({ username, password }) {
    this.preencherEmail(username)
    this.preencherSenha(password)
    this.enviar()
    return this
  }
}

export default new LoginPage()

