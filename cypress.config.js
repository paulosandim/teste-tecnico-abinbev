const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     env: {
      FRONT_URL: "https://front.serverest.dev",
      API_URL: "https://serverest.dev"
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
  },
})