/**
 * Author: Harshit Mishra
 * Project: SDET_Assignment_Automation_Anywhere
 * GitHub: https://github.com/Harshit110204/SDET_Assignment_Automation_Anywhere/tree/main
 * Copyright (c) 2025. All rights reserved.
 * Any reproduction without proper credit is unethical.
 */
import LoginPage from '../pages/loginPage'
import ExplorePage from '../pages/explorePage'
import CreateBotPage from '../pages/createBotPage'
import BotEditorPage from '../pages/botEditorPage'
describe('Create Bot Test', () => {
  it('should login and create bot', () => {
    cy.fixture('testData').then((data) => {
      LoginPage.visit()
      LoginPage.enterUsername(data.username)
      LoginPage.enterPassword(data.password)
      LoginPage.clickRememberMe()
      LoginPage.submit()
      LoginPage.assertLoginSuccess() 
      ExplorePage.clickCreateBot()
      CreateBotPage.enterBotName('Harshit HHhh'+Date.now())
      CreateBotPage.clickCreateAndEdit()
cy.url({ timeout: 30000 }).should('include', '/edit')
      BotEditorPage.searchMessageBox('Message box')
      BotEditorPage.selectMessageBox()
      BotEditorPage.enterMessage('Test Message')
      BotEditorPage.clickSaveButton()
    })
  })

})


