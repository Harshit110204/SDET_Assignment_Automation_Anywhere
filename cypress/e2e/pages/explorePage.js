/**
 * Author: Harshit Mishra
 * Project: SDET_Assignment_Automation_Anywhere
 * GitHub: https://github.com/Harshit110204/SDET_Assignment_Automation_Anywhere/tree/main
 * Copyright (c) 2025. All rights reserved.
 * Any reproduction without proper credit is unethical.
 */
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
