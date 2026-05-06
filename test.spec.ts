import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  

  //Create todo item
  await page.getByTestId('text-input').fill('test2');
  await page.getByTestId('text-input').press('Enter');
  //Toggle todo item
  await page.getByRole('listitem').filter({ hasText: 'test2' }).getByTestId('todo-item-toggle').check();
  await page.getByTestId('todo-item-toggle').check();
  //Update todo item
  await page.getByText('test2').dblclick();
  await page.getByTestId('todo-list').getByTestId('text-input').fill('test2_new');
  await page.getByTestId('todo-list').getByTestId('text-input').press('Enter');
  //Check filters
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  //Delete all completed todos
  await page.getByRole('button', { name: 'Clear completed' }).click();
  //assert empty list
  await expect(page.getByTestId('todo-list')).toBeEmpty();


  

});