/** @type {import('playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: './',
  timeout: 30000,
  expect: {
    toHaveAttribute: { timeout: 5000 },
    toBeVisible: { timeout: 5000 },
    toContain: { timeout: 5000 },
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['json', { outputFile: 'test-results.json' }]],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    viewport: { width: 1920, height: 1080 },
  },
};