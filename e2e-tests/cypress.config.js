const { defineConfig } = require("cypress");
// baseUrl: 'http://127.0.0.1:8080',
// Updated configuration CI/CD
module.exports = defineConfig({
  reporter: 'junit',
  video: true,
  reporterOptions: {
    mochaFile: 'results/TEST-[hash].xml',
    toConsole: true,
  },
  e2e: {
    baseUrl: 'https://mzinbookstore-linux.azurewebsites.net/',
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
    },
  },
}); 
// Change timeout to 1000

