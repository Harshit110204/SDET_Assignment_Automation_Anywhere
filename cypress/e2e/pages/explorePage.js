class ExplorePage {
  clickCreateBot() {
    cy.url({ timeout: 20000 }).should('include', '/home')  
    cy.contains('button', 'Create a bot', { timeout: 15000 }).should('be.visible').click()
  }
 assertCreateBotPage() {
    cy.url().should('include', '/create')
  }
}
export default new ExplorePage()
