import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
  // navigate to 
  
})

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Bookstore/);
});

test('agile test automation book', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/');
  
  await expect(page.getByRole('link', { name: 'Test Automation in the Real' })).toBeVisible();
  await expect(await page.getByRole('link', { name: 'Test Automation in the Real' })).toHaveText(/Test Automation in the Real World/);
  await expect(await page.getByRole('link', { name: 'Test Automation in the Real' })).toHaveText(/Greg Paskal/);
  await expect(await page.getByRole('link', { name: 'Test Automation in the Real' })).toHaveText(/$9.99/);

});


