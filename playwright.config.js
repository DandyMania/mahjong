const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60_000,
  use: {
    baseURL: 'http://localhost:8080',
    viewport: { width: 390, height: 844 }, // iPhone 14 Pro
  },
  webServer: {
    command: 'python -m http.server 8080',
    url: 'http://localhost:8080',
    reuseExistingServer: true,
    timeout: 10_000,
  },
});
