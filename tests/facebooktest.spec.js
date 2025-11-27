import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Facebook - log in or sign up/);
});
test('login link', async ({ page }) => {
  await page.goto('https://www.facebook.com/'); 

  // Click the login link.
  await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForTimeout(3000);    
    // Expects page to have a heading with the name of Email or Phone.
    await expect(page.getByPlaceholder('Email or phone number')).toBeVisible();
});

test('signup link', async ({ page }) => {
  await page.goto('https://www.facebook.com/'); 
    // Click the signup link.
    await page.getByRole('button', { name: 'Create new account' }).click();
    await page.waitForTimeout(3000);
    // Expects page to have a heading with the name of Sign Up.
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
});
 test('create a page link', async ({ page }) => {
  await page.goto('https://www.facebook.com/');     

    // Click the create a page link.
    await page.getByRole('link', { name: 'Create a Page' }).click();
    await page.waitForTimeout(3000);
    // Expects page to have a heading with the name of Get Started.
    await expect(page.getByRole('button', { name: 'Get Started' }).first()).toBeVisible();
});
 test('forgotten password link', async ({ page }) => {
  await page.goto('https://www.facebook.com/');     
    // Click the forgotten password link.
    await page.getByRole('link', { name: 'Forgot password?' }).click();
    await page.waitForTimeout(3000);    
    // Expects page to have a heading with the name of Find Your Account.
    await expect(page.getByRole('heading', { name: 'Find Your Account' })).toBeVisible();
});