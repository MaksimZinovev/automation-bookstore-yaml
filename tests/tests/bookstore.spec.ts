import { test, expect } from '@playwright/test';


// Verify that page has title 
test('has title', async ({page}) => {
    const title = 'Agile Test Automation Book';
    await page.goto('/');
    await expect(page).toHaveTitle(title);
}
)



test('agile test automation book', async ({ page }) => {
  await page.goto('/');
  
  await expect(page.getByRole('link', { name: 'Test Automation in the Real' })).toBeVisible();
  await expect(await page.getByRole('link', { name: 'Test Automation in the Real' })).toHaveText(/Test Automation in the Real World/);
  await expect(await page.getByRole('link', { name: 'Test Automation in the Real' })).toHaveText(/Greg Paskal/);
  // await expect(await page.getByRole('link', { name: 'Test Automation in the Real' })).toHaveText(/$9.99/);

});

test


