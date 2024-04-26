// https://playwright.dev/docs/downloads

import { test } from '@playwright/test';

require('dotenv').config();

test('download das respostas', async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(process.env.SITE + process.env.RESPONSE_URL);

  // Start waiting for download before clicking. Note no await.
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Exportar arquivo CSV' }).first().click();
  const download = await downloadPromise;

  // Wait for the download process to complete and save the downloaded file somewhere.
  await download.saveAs(process.env.CSV_FILE_PATH);
});
