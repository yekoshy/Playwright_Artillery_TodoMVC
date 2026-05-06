const { expect } = require('@playwright/test');

exports.TodoPage = class TodoPage {
  /**
   * Constructor sets up the page, the variable URL, and all locators
   * @param {import('@playwright/test').Page} page
   * @param {string} url
   */
  constructor(page, url) {
    this.page = page;
    this.url = url;

    // Vanilla JS locators
    this.todoList = page.locator('.todo-list');
    this.newTodoInput = page.locator('.new-todo'); 
    this.todoListItems = page.locator('.todo-list li');
    this.todoLabels = page.locator('.todo-list li label');
    this.itemToggles = page.locator('.todo-list li .toggle');
    this.editInput = page.locator('.todo-list li .edit');
    this.clearCompletedBtn = page.locator('.clear-completed');
    this.filterActive = page.locator('.filters').getByRole('link', { name: 'Active', exact: true });
    this.filterCompleted = page.locator('.filters').getByRole('link', { name: 'Completed', exact: true });
    this.filterAll = page.locator('.filters').getByRole('link', { name: 'All', exact: true });
  
    /*
    //React locators - using data-testid attributes
    this.newTodoInput = page.getByTestId('text-input').first(); 
    this.todoListItems = page.getByRole('listitem');
    this.todoLabels = page.getByTestId('todo-item-label');
    this.itemToggles = page.getByTestId('todo-item-toggle');
    this.editInput = page.getByTestId('todo-list').getByTestId('text-input');
    this.clearCompletedBtn = page.getByRole('button', { name: 'Clear completed' });
    this.todoList = page.getByTestId('todo-list');
    this.filterActive = page.getByRole('link', { name: 'Active' });
    this.filterCompleted = page.getByRole('link', { name: 'Completed' });
    this.filterAll = page.getByRole('link', { name: 'All' });
  */  
  }

  // Navigate to the URL passed in the constructor
  async navigate() {
    await this.page.goto(this.url);
  }

  // Create N number of items
  async createItems(n) {
    for (let i = 1; i <= n; i++) {
      await this.newTodoInput.fill(`test${i}`);
      await this.newTodoInput.press('Enter');
    }
  }

  // Toggle all items currently in the list
  async toggleAllItems() {
    const count = await this.itemToggles.count();
    for (let i = 0; i < count; i++) {
      // Loop through and check every individual toggle
      await this.itemToggles.nth(i).check();
    }
  }

  // Update N number of items
  /*
  async updateItems(n) {
    // Get the total number of items, so we don't try to update items that don't exist
    const count = await this.todoLabels.count();
    const limit = Math.min(n, count); 

    for (let i = 0; i < limit; i++) {
      const itemToUpdate = this.todoLabels.nth(i);
      
      // Double click to enter edit mode
      await itemToUpdate.dblclick();
      
      // Fill with new text and press enter
      await this.editInput.fill(`test${i + 1}_new`);
      await this.editInput.press('Enter');
    }
  }
  */
 async updateItems(n) {
    const count = await this.todoListItems.count();
    const limit = Math.min(n, count); 

    for (let i = 0; i < limit; i++) {
      // 1. Grab the specific list item for this loop iteration
      const currentItem = this.todoListItems.nth(i);
      
      // 2. Double click the label INSIDE this specific item
      await currentItem.locator('label').dblclick();
      
      // 3. Fill the edit input INSIDE this specific item. 
      // This completely bypasses the Strict Mode violation!
      const itemEditInput = currentItem.locator('.edit');
      await itemEditInput.fill(`test${i + 1}_new`);
      await itemEditInput.press('Enter');
    }
  }

  // Click through all filters
  async checkFilters() {
    await this.filterActive.click();
    await this.filterCompleted.click();
    await this.filterAll.click();
  }
/*
  // Delete all completed items, assert empty list
  async deleteCompletedAndAssertEmpty() {
    await this.clearCompletedBtn.click();
    
    // Assert the list is completely empty
    await expect(this.todoList).toBeEmpty();


  }
*/
async deleteCompletedAndAssertEmpty() {
    await this.clearCompletedBtn.click();
    
    // Use toHaveCount(0) instead of toBeEmpty().
    // This works flawlessly even if Angular entirely deletes the parent <ul> from the DOM!
    await expect(this.todoListItems).toHaveCount(0);
  }

};