class CreateBotPage {
  enterBotName(botName) {
    cy.get('input[placeholder="Required"]').should('be.visible').clear().type(botName)
  }
  clickCreateAndEdit() {
    cy.get('button[name="submit"]').click();
  }
}
export default new CreateBotPage()

