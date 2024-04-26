// https://playwright.dev/docs/auth
// https://github.com/motdotla/dotenv

import { test as setup, expect } from '@playwright/test';

require('dotenv').config();

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto(process.env.SITE + process.env.LOGIN);
  await page.locator('#field_primaryEmail').fill(process.env.USER_EMAIL);
  await page.locator('#field_password').fill(process.env.USER_PASSWORD);
  await page.getByRole('button', { name: 'Entrar' }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  //await page.waitForURL(process.env.SITE);
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  //await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();
  //await expect(page).toHaveTitle(/Login efetuado com sucesso./);
  await expect(page.getByRole('button', { name: /Olá,/ })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
