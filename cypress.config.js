const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://front.serverest.dev",
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
  },
});