/**
 * Author: Harshit Mishra
 * Project: SDET_Assignment_Automation_Anywhere
 * GitHub: https://github.com/Harshit110204/SDET_Assignment_Automation_Anywhere/tree/main
 * Copyright (c) 2025. All rights reserved.
 * Any reproduction without proper credit is unethical.
 */


class BotEditorPage {
searchMessageBox(text) {
  cy.get('input[placeholder="Search actions"]', { timeout: 10000 })  
    .should('be.visible')                             
    .type(text);
}
  selectMessageBox() {
  cy.get('button[name="item-button"]')
    .contains('Message box')
    .scrollIntoView()
    .should('be.visible')
    .dblclick({ force: true });
  }
  enterMessage(message) {
  cy.get('div[contenteditable="true"][name="content"]')
    .should('be.visible')
    .click({ force: true }) 
    .focused()              
    .type(message, { force: true }); 
}
  clickSaveButton() {
    cy.contains('button', 'Save')
      .should('be.visible')
      .click();
  }
  clickbutt(){
     cy.contains('button', 'Close')
      .should('be.visible')
      .click();
  }
  assertMessageBoxAdded() {
    cy.contains('Message box').should('exist');
  }
}

export default new BotEditorPage()







