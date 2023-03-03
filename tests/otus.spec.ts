import { test, expect } from '@playwright/test';

test('login from standard user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').type('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('//div[@class="app_logo"]')).toHaveText('Swag Labs');
  await expect(page).toHaveURL(/.*inventory.html/);
});

