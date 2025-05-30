import { defineConfig } from "cypress";
import mochawesome from "cypress-mochawesome-reporter/plugin.js";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:5173",
		screenshotOnRunFailure: true,
		trashAssetsBeforeRuns: true,
		setupNodeEvents(on, config) {
			// Ajout du plugin reporter
			mochawesome(on);

			// Ton callback custom conservé
			on("after:screenshot", (details) => {
				console.log("Screenshot saved at:", details.path);
			});

			return config;
		},
		specPattern: "cypress/e2e/**/*.cy.js", // ajout standard si manquant
	},
	reporter: "cypress-mochawesome-reporter",
	reporterOptions: {
		reportDir: "cypress/reports",
		overwrite: false,
		html: true,
		json: true
	},
});