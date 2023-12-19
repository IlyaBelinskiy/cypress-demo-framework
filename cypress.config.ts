import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  projectId: 'ioceso',
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    charts: true,
    reportPageTitle: 'Joan Media Demo Report',
    embeddedScreenshots: true,
  },
  env: {
    db: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'cypress_test',
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
