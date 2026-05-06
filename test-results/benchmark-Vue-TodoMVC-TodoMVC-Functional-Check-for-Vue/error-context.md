# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: benchmark.spec.js >> Vue TodoMVC >> TodoMVC Functional Check for Vue
- Location: benchmark.spec.js:16:9

# Error details

```
Error: locator.dblclick: Error: strict mode violation: locator('.todo-list li').first().locator('label') resolved to 2 elements:
    1) <label>test1</label> aka getByText('test1', { exact: true })
    2) <label for="edit-todo-input" class="visually-hidden">Edit Todo Input</label> aka getByText('Edit Todo Input').first()

Call log:
  - waiting for locator('.todo-list li').first().locator('label')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - complementary [ref=e2]:
    - generic [ref=e3]:
      - heading "Vue.js" [level=3] [ref=e4]
      - generic [ref=e5]:
        - heading "Example" [level=5] [ref=e6]
        - link "Source" [ref=e7] [cursor=pointer]:
          - /url: https://github.com/tastejs/todomvc/tree/gh-pages/examples/vue
    - separator [ref=e8]
    - blockquote [ref=e9]:
      - paragraph [ref=e10]: “ Vue.js provides efficient MVVM data bindings with a simple and flexible API. It uses plain JavaScript object models, DOM-based templating and extendable directives and filters. ”
      - link "Vue.js" [ref=e12] [cursor=pointer]:
        - /url: http://vuejs.org
    - separator [ref=e13]
    - heading "Official Resources" [level=4] [ref=e14]
    - list [ref=e15]:
      - listitem [ref=e16]:
        - link "Documentation" [ref=e17] [cursor=pointer]:
          - /url: http://vuejs.org/guide/
      - listitem [ref=e18]:
        - link "API Reference" [ref=e19] [cursor=pointer]:
          - /url: http://vuejs.org/api/
      - listitem [ref=e20]:
        - link "Examples" [ref=e21] [cursor=pointer]:
          - /url: http://vuejs.org/examples/
      - listitem [ref=e22]:
        - link "Vue.js on GitHub" [ref=e23] [cursor=pointer]:
          - /url: https://github.com/vuejs/vue
    - heading "Community" [level=4] [ref=e24]
    - list [ref=e25]:
      - listitem [ref=e26]:
        - link "Twitter" [ref=e27] [cursor=pointer]:
          - /url: http://twitter.com/vuejs
      - listitem [ref=e28]:
        - link "Gitter Channel" [ref=e29] [cursor=pointer]:
          - /url: https://gitter.im/yyx990803/vue
      - listitem [ref=e30]:
        - link "Discussions on GitHub" [ref=e31] [cursor=pointer]:
          - /url: https://github.com/vuejs/Discussion/issues
    - generic [ref=e32]:
      - separator [ref=e33]
      - emphasis [ref=e34]:
        - text: If you have other helpful links to share, or find any of the links above no longer work, please
        - link "let us know" [ref=e35] [cursor=pointer]:
          - /url: https://github.com/tastejs/todomvc/issues
        - text: .
  - generic [ref=e36]:
    - generic [ref=e37]:
      - link "todos":
        - /url: "#/"
        - heading "todos" [level=1] [ref=e38] [cursor=pointer]
      - textbox "What needs to be done?" [active] [ref=e39]
    - main [ref=e40]:
      - generic:
        - checkbox "❯ Toggle All Input" [ref=e41]
        - generic: ❯ Toggle All Input
      - list [ref=e42]:
        - listitem [ref=e43]:
          - generic [ref=e44]:
            - checkbox [ref=e45]
            - generic [ref=e46]: test1
            - text: ×
          - generic [ref=e47]: Edit Todo Input
        - listitem [ref=e48]:
          - generic [ref=e49]:
            - checkbox [ref=e50]
            - generic [ref=e51]: test2
            - text: ×
          - generic [ref=e52]: Edit Todo Input
        - listitem [ref=e53]:
          - generic [ref=e54]:
            - checkbox [ref=e55]
            - generic [ref=e56]: test3
            - text: ×
          - generic [ref=e57]: Edit Todo Input
        - listitem [ref=e58]:
          - generic [ref=e59]:
            - checkbox [ref=e60]
            - generic [ref=e61]: test4
            - text: ×
          - generic [ref=e62]: Edit Todo Input
        - listitem [ref=e63]:
          - generic [ref=e64]:
            - checkbox [ref=e65]
            - generic [ref=e66]: test5
            - text: ×
          - generic [ref=e67]: Edit Todo Input
        - listitem [ref=e68]:
          - generic [ref=e69]:
            - checkbox [ref=e70]
            - generic [ref=e71]: test6
            - text: ×
          - generic [ref=e72]: Edit Todo Input
        - listitem [ref=e73]:
          - generic [ref=e74]:
            - checkbox [ref=e75]
            - generic [ref=e76]: test7
            - text: ×
          - generic [ref=e77]: Edit Todo Input
        - listitem [ref=e78]:
          - generic [ref=e79]:
            - checkbox [ref=e80]
            - generic [ref=e81]: test8
            - text: ×
          - generic [ref=e82]: Edit Todo Input
        - listitem [ref=e83]:
          - generic [ref=e84]:
            - checkbox [ref=e85]
            - generic [ref=e86]: test9
            - text: ×
          - generic [ref=e87]: Edit Todo Input
        - listitem [ref=e88]:
          - generic [ref=e89]:
            - checkbox [ref=e90]
            - generic [ref=e91]: test10
            - text: ×
          - generic [ref=e92]: Edit Todo Input
    - generic [ref=e93]:
      - generic [ref=e94]:
        - strong [ref=e95]: "10"
        - text: items left
      - list [ref=e96]:
        - listitem [ref=e97]:
          - link "All" [ref=e98] [cursor=pointer]:
            - /url: "#/"
        - listitem [ref=e99]:
          - link "Active" [ref=e100] [cursor=pointer]:
            - /url: "#/active"
        - listitem [ref=e101]:
          - link "Completed" [ref=e102] [cursor=pointer]:
            - /url: "#/completed"
  - contentinfo [ref=e103]:
    - paragraph [ref=e104]: Double-click to edit a todo
    - paragraph [ref=e105]: Created by the TodoMVC Team
    - paragraph [ref=e106]:
      - text: Part of
      - link "TodoMVC" [ref=e107] [cursor=pointer]:
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
> 90  |       await currentItem.locator('label').dblclick();
      |                                          ^ Error: locator.dblclick: Error: strict mode violation: locator('.todo-list li').first().locator('label') resolved to 2 elements:
  91  |       
  92  |       // 3. Fill the edit input INSIDE this specific item. 
  93  |       // This completely bypasses the Strict Mode violation!
  94  |       const itemEditInput = currentItem.locator('.edit');
  95  |       await itemEditInput.fill(`test${i + 1}_new`);
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