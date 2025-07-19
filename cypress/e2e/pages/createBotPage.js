/**
 * Author: Harshit Mishra
 * Project: SDET_Assignment_Automation_Anywhere
 * GitHub: https://github.com/Harshit110204/SDET_Assignment_Automation_Anywhere/tree/main
 * Copyright (c) 2025. All rights reserved.
 * Any reproduction without proper credit is unethical.
 */

class CreateBotPage {
  enterBotName(botName) {
    cy.get('input[placeholder="Required"]').should('be.visible').clear().type(botName)
  }
  clickCreateAndEdit() {
    cy.get('button[name="submit"]').click();
  }
}
export default new CreateBotPage()

