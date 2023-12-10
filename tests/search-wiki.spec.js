// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page'); // before running each test go to the wiki main page
});

test('Search for Frida Kahlo', async ({ page }) => {
  await page.getByRole('link', { name: 'Wikipedia', exact: true }).click();
  await page.getByLabel('Search Wikipedia').fill('Frida Kahlo');
  await page.getByRole('combobox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Frida Kahlo' }).locator('span')).toContainText("Frida Kahlo")
});

test('Search for Stone Cold Steve Austin', async ({ page }) => {
  await page.getByLabel('Search Wikipedia').fill('Stone Cold Steve Austin');
  await page.getByRole('link', { name: 'Stone Cold Steve Austin' })
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Stone Cold Steve Austin' }).locator('span')).toContainText("Steve Austin")
});