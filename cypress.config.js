const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://community2.cloud-2.automationanywhere.digital',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,  // 2 minutes wait
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
