const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/TEST-[hash].xml',
    toConsole: true,
  },
  e2e: {
    // baseUrl: 'http://127.0.0.1:8080',
    baseUrl: 'https://mzinbookstore-linux.azurewebsites.net/',
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
