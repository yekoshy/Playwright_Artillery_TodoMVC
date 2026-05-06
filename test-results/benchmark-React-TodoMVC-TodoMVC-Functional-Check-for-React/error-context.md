# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: benchmark.spec.js >> React TodoMVC >> TodoMVC Functional Check for React
- Location: benchmark.spec.js:16:9

# Error details

```
Test timeout of 180000ms exceeded.
```

```
Error: locator.fill: Test timeout of 180000ms exceeded.
Call log:
  - waiting for locator('.todo-list li').first().locator('.edit')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - complementary [ref=e2]:
    - generic [ref=e3]:
      - heading "React" [level=3] [ref=e4]
      - generic [ref=e5]:
        - heading "React" [level=5] [ref=e6]
        - link "Source" [ref=e7] [cursor=pointer]:
          - /url: https://github.com/tastejs/todomvc/tree/gh-pages/examples/react
        - heading "TypeScript + React" [level=5] [ref=e8]
        - link "Demo" [ref=e9] [cursor=pointer]:
          - /url: https://todomvc.com/examples/typescript-react
        - text: ","
        - link "Source" [ref=e10] [cursor=pointer]:
          - /url: https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react
    - separator [ref=e11]
    - blockquote [ref=e12]:
      - paragraph [ref=e13]: “ React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes. ”
      - link "React" [ref=e15] [cursor=pointer]:
        - /url: http://facebook.github.io/react
    - separator [ref=e16]
    - heading "Official Resources" [level=4] [ref=e17]
    - list [ref=e18]:
      - listitem [ref=e19]:
        - link "Quick Start" [ref=e20] [cursor=pointer]:
          - /url: https://react.dev/learn
      - listitem [ref=e21]:
        - link "API Reference" [ref=e22] [cursor=pointer]:
          - /url: https://react.dev/reference/react
      - listitem [ref=e23]:
        - link "Philosophy" [ref=e24] [cursor=pointer]:
          - /url: https://petehuntsposts.quora.com/React-Under-the-Hood
      - listitem [ref=e25]:
        - link "React Community" [ref=e26] [cursor=pointer]:
          - /url: https://react.dev/community
    - heading "Community" [level=4] [ref=e27]
    - list [ref=e28]:
      - listitem [ref=e29]:
        - link "ReactJS on Stack Overflow" [ref=e30] [cursor=pointer]:
          - /url: https://stackoverflow.com/questions/tagged/reactjs
    - generic [ref=e31]:
      - separator [ref=e32]
      - emphasis [ref=e33]:
        - text: If you have other helpful links to share, or find any of the links above no longer work, please
        - link "let us know" [ref=e34] [cursor=pointer]:
          - /url: https://github.com/tastejs/todomvc/issues
        - text: .
  - generic [ref=e35]:
    - generic [ref=e36]:
      - heading "todos" [level=1] [ref=e37]
      - generic [ref=e38]:
        - textbox "New Todo Input Edit Todo Input" [ref=e39]:
          - /placeholder: What needs to be done?
        - generic [ref=e40]: New Todo Input
    - main [ref=e41]:
      - generic:
        - checkbox "❯ Toggle All Input" [ref=e42]
        - generic: ❯ Toggle All Input
      - list [ref=e43]:
        - listitem [ref=e44]:
          - generic [ref=e46]:
            - textbox [active] [ref=e47]: test1
            - generic [ref=e48]: Edit Todo Input
        - listitem [ref=e49]:
          - generic [ref=e50]:
            - checkbox [ref=e51]
            - generic [ref=e52]: test2
            - text: ×
        - listitem [ref=e53]:
          - generic [ref=e54]:
            - checkbox [ref=e55]
            - generic [ref=e56]: test3
            - text: ×
        - listitem [ref=e57]:
          - generic [ref=e58]:
            - checkbox [ref=e59]
            - generic [ref=e60]: test4
            - text: ×
        - listitem [ref=e61]:
          - generic [ref=e62]:
            - checkbox [ref=e63]
            - generic [ref=e64]: test5
            - text: ×
        - listitem [ref=e65]:
          - generic [ref=e66]:
            - checkbox [ref=e67]
            - generic [ref=e68]: test6
            - text: ×
        - listitem [ref=e69]:
          - generic [ref=e70]:
            - checkbox [ref=e71]
            - generic [ref=e72]: test7
            - text: ×
        - listitem [ref=e73]:
          - generic [ref=e74]:
            - checkbox [ref=e75]
            - generic [ref=e76]: test8
            - text: ×
        - listitem [ref=e77]:
          - generic [ref=e78]:
            - checkbox [ref=e79]
            - generic [ref=e80]: test9
            - text: ×
        - listitem [ref=e81]:
          - generic [ref=e82]:
            - checkbox [ref=e83]
            - generic [ref=e84]: test10
            - text: ×
    - generic [ref=e85]:
      - generic [ref=e86]: 10 items left!
      - list [ref=e87]:
        - listitem [ref=e88]:
          - link "All" [ref=e89] [cursor=pointer]:
            - /url: "#/"
        - listitem [ref=e90]:
          - link "Active" [ref=e91] [cursor=pointer]:
            - /url: "#/active"
        - listitem [ref=e92]:
          - link "Completed" [ref=e93] [cursor=pointer]:
            - /url: "#/completed"
      - button "Clear completed" [disabled] [ref=e94] [cursor=pointer]
  - contentinfo [ref=e95]:
    - paragraph [ref=e96]: Double-click to edit a todo
    - paragraph [ref=e97]: Created by the TodoMVC Team
    - paragraph [ref=e98]:
      - text: Part of
      - link "TodoMVC" [ref=e99] [cursor=pointer]:
        - /url: http://todomvc.com
```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | exports.TodoPage = class TodoPage {
  4   |   /**
  5   |    * Constructor sets up the page, the variable URL, and all locators
  6   |    * @param {import('@playwright/test').Page} page
  7   |    * @param {string} url
  8   |    */
  9   |   constructor(page, url) {
  10  |     this.page = page;
  11  |     this.url = url;
  12  | 
  13  |     // Vanilla JS locators
  14  |     this.todoList = page.locator('.todo-list');
  15  |     this.newTodoInput = page.locator('.new-todo'); 
  16  |     this.todoListItems = page.locator('.todo-list li');
  17  |     this.todoLabels = page.locator('.todo-list li label');
  18  |     this.itemToggles = page.locator('.todo-list li .toggle');
  19  |     this.editInput = page.locator('.todo-list li .edit');
  20  |     this.clearCompletedBtn = page.locator('.clear-completed');
  21  |     this.filterActive = page.locator('.filters').getByRole('link', { name: 'Active', exact: true });
  22  |     this.filterCompleted = page.locator('.filters').getByRole('link', { name: 'Completed', exact: true });
  23  |     this.filterAll = page.locator('.filters').getByRole('link', { name: 'All', exact: true });
  24  |   
  25  |     /*
  26  |     //React locators - using data-testid attributes
  27  |     this.newTodoInput = page.getByTestId('text-input').first(); 
  28  |     this.todoListItems = page.getByRole('listitem');
  29  |     this.todoLabels = page.getByTestId('todo-item-label');
  30  |     this.itemToggles = page.getByTestId('todo-item-toggle');
  31  |     this.editInput = page.getByTestId('todo-list').getByTestId('text-input');
  32  |     this.clearCompletedBtn = page.getByRole('button', { name: 'Clear completed' });
  33  |     this.todoList = page.getByTestId('todo-list');
  34  |     this.filterActive = page.getByRole('link', { name: 'Active' });
  35  |     this.filterCompleted = page.getByRole('link', { name: 'Completed' });
  36  |     this.filterAll = page.getByRole('link', { name: 'All' });
  37  |   */  
  38  |   }
  39  | 
  40  |   // Navigate to the URL passed in the constructor
  41  |   async navigate() {
  42  |     await this.page.goto(this.url);
  43  |   }
  44  | 
  45  |   // Create N number of items
  46  |   async createItems(n) {
  47  |     for (let i = 1; i <= n; i++) {
  48  |       await this.newTodoInput.fill(`test${i}`);
  49  |       await this.newTodoInput.press('Enter');
  50  |     }
  51  |   }
  52  | 
  53  |   // Toggle all items currently in the list
  54  |   async toggleAllItems() {
  55  |     const count = await this.itemToggles.count();
  56  |     for (let i = 0; i < count; i++) {
  57  |       // Loop through and check every individual toggle
  58  |       await this.itemToggles.nth(i).check();
  59  |     }
  60  |   }
  61  | 
  62  |   // Update N number of items
  63  |   /*
  64  |   async updateItems(n) {
  65  |     // Get the total number of items, so we don't try to update items that don't exist
  66  |     const count = await this.todoLabels.count();
  67  |     const limit = Math.min(n, count); 
  68  | 
  69  |     for (let i = 0; i < limit; i++) {
  70  |       const itemToUpdate = this.todoLabels.nth(i);
  71  |       
  72  |       // Double click to enter edit mode
  73  |       await itemToUpdate.dblclick();
  74  |       
  75  |       // Fill with new text and press enter
  76  |       await this.editInput.fill(`test${i + 1}_new`);
  77  |       await this.editInput.press('Enter');
  78  |     }
  79  |   }
  80  |   */
  81  |  async updateItems(n) {
  82  |     const count = await this.todoListItems.count();
  83  |     const limit = Math.min(n, count); 
  84  | 
  85  |     for (let i = 0; i < limit; i++) {
  86  |       // 1. Grab the specific list item for this loop iteration
  87  |       const currentItem = this.todoListItems.nth(i);
  88  |       
  89  |       // 2. Double click the label INSIDE this specific item
  90  |       await currentItem.locator('label').dblclick();
  91  |       
  92  |       // 3. Fill the edit input INSIDE this specific item. 
  93  |       // This completely bypasses the Strict Mode violation!
  94  |       const itemEditInput = currentItem.locator('.edit');
> 95  |       await itemEditInput.fill(`test${i + 1}_new`);
      |                           ^ Error: locator.fill: Test timeout of 180000ms exceeded.
  96  |       await itemEditInput.press('Enter');
  97  |     }
  98  |   }
  99  | 
  100 |   // Click through all filters
  101 |   async checkFilters() {
  102 |     await this.filterActive.click();
  103 |     await this.filterCompleted.click();
  104 |     await this.filterAll.click();
  105 |   }
  106 | /*
  107 |   // Delete all completed items, assert empty list
  108 |   async deleteCompletedAndAssertEmpty() {
  109 |     await this.clearCompletedBtn.click();
  110 |     
  111 |     // Assert the list is completely empty
  112 |     await expect(this.todoList).toBeEmpty();
  113 | 
  114 | 
  115 |   }
  116 | */
  117 | async deleteCompletedAndAssertEmpty() {
  118 |     await this.clearCompletedBtn.click();
  119 |     
  120 |     // Use toHaveCount(0) instead of toBeEmpty().
  121 |     // This works flawlessly even if Angular entirely deletes the parent <ul> from the DOM!
  122 |     await expect(this.todoListItems).toHaveCount(0);
  123 |   }
  124 | 
  125 | };
```