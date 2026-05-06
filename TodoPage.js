const { expect } = require('@playwright/test');

exports.TodoPage = class TodoPage {
  constructor(page, url) {
    this.page = page;
    this.url = url;

    // Improved Locators for cross-framework compatibility
    this.newTodoInput = page.locator('input.new-todo'); 
    this.todoListItems = page.locator('.todo-list li');
    // Using .view label ensures we don't hit hidden accessibility labels
    this.todoLabels = page.locator('.todo-list li .view label');
    this.itemToggles = page.locator('.todo-list li .toggle');
    this.editInput = page.locator('.todo-list li input.edit');
    this.clearCompletedBtn = page.locator('.clear-completed');
    this.todoList = page.locator('.todo-list');
    
    this.filterActive = page.getByRole('link', { name: 'Active', exact: true });
    this.filterCompleted = page.getByRole('link', { name: 'Completed', exact: true });
    this.filterAll = page.getByRole('link', { name: 'All', exact: true });
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async createItems(n) {
    for (let i = 1; i <= n; i++) {
      await this.newTodoInput.fill(`test${i}`);
      await this.newTodoInput.press('Enter');
    }
  }

  async toggleAllItems() {
    const count = await this.itemToggles.count();
    for (let i = 0; i < count; i++) {
      await this.itemToggles.nth(i).check();
    }
  }

  /**
   * UPDATED: Most efficient update logic
   */
  // TodoPage.js

// TodoPage.js

async updateItems(n) {
  const count = await this.todoListItems.count();
  const limit = Math.min(n, count); 

  for (let i = 0; i < limit; i++) {
    const currentItem = this.todoListItems.nth(i);
    
    // 1. Target the label specifically. 
    // .first() avoids the Vue strict-mode "2 elements" error.
    const label = currentItem.locator('label').first();
    
    
    // to process the first click before the second one arrives.
    await label.dblclick();
    
    // 3. Target the edit input. 
    // We use '.edit' to be more flexible across frameworks[cite: 3].
    const itemEditInput = currentItem.locator('.edit');
    
    // 4. Use .fill() directly.
    // Playwright's .fill() has a built-in 'wait for visible' check.
    // By removing the manual .waitFor(), we allow Playwright to use its 
    // internal retry logic which is more efficient[cite: 3].
    if(this.page.url().includes('react')) {
      await label.fill(`test${i + 1}_new`); // Update the label as well for consistency
      await label.press('Enter'); // Press Enter on the label to save changes
    } else {
      await itemEditInput.fill(`test${i + 1}_new`);
      await itemEditInput.press('Enter');
  }}
}

  async checkFilters() {
    await this.filterActive.click();
    await this.filterCompleted.click();
    await this.filterAll.click();
  }

  async deleteCompletedAndAssertEmpty() {
    // Only click if the button is visible (some frameworks hide it if nothing is completed)
    if (await this.clearCompletedBtn.isVisible()) {
        await this.clearCompletedBtn.click();
    }
    await expect(this.todoListItems).toHaveCount(0);
  }
};