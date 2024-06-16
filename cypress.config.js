const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    env: {
      links: {
        live: "https://www.themoviedb.org",
      }
    },

    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },

    specPattern: "cypress/e2e/features/*.{feature,features}",
    supportFile: false,
    chromeWebSecurity: false,

    "cypress-cucumber-preprocessor": {
      nonGlobalStepDefinitions: false,
      step_definitions: "./cypress/support/step_definitions",
    },
  },
});
