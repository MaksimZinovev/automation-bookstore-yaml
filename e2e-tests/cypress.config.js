const path = require("path");
const { defineConfig } = require("cypress");

// The port lives in the repo-root .env, which is the single source of truth.
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/TEST-[hash].xml',
    toConsole: true,
  },
  e2e: {
    baseUrl: `http://127.0.0.1:${process.env.PORT}`,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
