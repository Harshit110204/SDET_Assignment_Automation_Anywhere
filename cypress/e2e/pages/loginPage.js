class LoginPage {
 visit() {
  cy.visit('https://community2.cloud-2.automationanywhere.digital/#/login?next=/home', {
    failOnStatusCode: false,
    timeout: 60000
  })
}
  enterUsername(username) {
    cy.get('.textinput-cell-input-control').eq(0).should('be.visible').clear().type(username)
  }
  enterPassword(password) {
    cy.get('.textinput-cell-input-control').eq(1).should('be.visible').clear().type(password)
  }
  clickRememberMe() {
    cy.get('.checkbox-input__label').should('be.visible').click()
  }
  submit() {
    cy.contains('button', 'Log in').should('be.visible').click()
  }
  assertLoginSuccess() {
  cy.url({ timeout: 30000 }).should('include', '/home')
  cy.wait(2000)  
  cy.contains('button', 'Create a bot', { timeout: 30000 }).should('be.visible')
}
}
export default new LoginPage()




