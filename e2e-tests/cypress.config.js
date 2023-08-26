const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'junit',
  video: true,
  reporterOptions: {
    mochaFile: 'results/TEST-[hash].xml',
    toConsole: true,
  },
  e2e: {
    baseUrl: process.env.BASE_URL || 'http://127.0.0.1:8080/',
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
    },
  },
}); 
// Change timeout to 1000

