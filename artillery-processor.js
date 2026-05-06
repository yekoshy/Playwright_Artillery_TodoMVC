//import {TodoPage} from './TodoPage';
const { TodoPage } = require('./TodoPage');

// Artillery injects the Playwright 'page' object directly into this function
async function runBenchmark(page) {
  page.setDefaultTimeout(180000);
  const todoPage = new TodoPage(page, 'https://todomvc.com/examples/react/dist/');

  // 1. Open the page
  await todoPage.navigate();

  // 2. Run the user journey
  await todoPage.createItems(10);
  await todoPage.updateItems(5);
  await todoPage.toggleAllItems();
  await todoPage.checkFilters();
  await todoPage.deleteCompletedAndAssertEmpty();
}

module.exports = {
  runBenchmark
};