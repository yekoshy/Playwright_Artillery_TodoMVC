import { test } from '@playwright/test';
import {TodoPage} from './TodoPage';

// 1. Define all the URLs and give them readable names
const frameworks =[
  { name: 'React', url: 'https://todomvc.com/examples/react/dist/' },
  { name: 'Angular', url: 'https://todomvc.com/examples/angular/dist/browser/#/all' },
  { name: 'Vue', url: 'https://todomvc.com/examples/vue/dist/#/' },
  { name: 'Vanilla JS', url: 'https://todomvc.com/examples/javascript-es6/dist/' },
  { name: 'jQuery', url: 'https://todomvc.com/examples/jquery/dist/#/all' }
];

// 2. Loop through each framework
for (const framework of frameworks) {
  test.describe(`${framework.name} TodoMVC`, () => {
    test(`TodoMVC Functional Check for ${framework.name}`, async ({ page }) => {
  // Increase the timeout to 3 minutes (180,000 milliseconds)
  test.setTimeout(180000); 
  
  // 1. Initialize the POM with the page and your variable URL
  const todoPage = new TodoPage(page, framework.url);

  // 2. Open the page
  await todoPage.navigate();

  // 3. Create 5 items
  await todoPage.createItems(10);

  // 4. Update the first 3 items in the list
  await todoPage.updateItems(5);

  // 5. Toggle all 5 items to "Completed"
  await todoPage.toggleAllItems();

  // 6. Check the UI Filters
  await todoPage.checkFilters();

  // 7. Clear the completed items, assert it's empty, and take a screenshot!
  await todoPage.deleteCompletedAndAssertEmpty();
});
});
}