const { TodoPage } = require('./TodoPage');

// Artillery injects page, vuContext, and events
async function runBenchmark(page, vuContext, events) {
  // 1. Get the framework variables defined in the YAML scenarios
  // Access them from vuContext.scenario.variables
  const frameworkName = vuContext.scenario.variables.frameworkName;
  const frameworkUrl = vuContext.scenario.variables.frameworkUrl;

  const todoPage = new TodoPage(page, frameworkUrl);

  // 2. Start a timer to measure how long this specific framework takes
  const startTime = Date.now();

  // 3. Open the page
  await todoPage.navigate();

  // 4. Run the user journey
  await todoPage.createItems(10);
  await todoPage.updateItems(5);
  await todoPage.toggleAllItems();
  await todoPage.checkFilters();
  await todoPage.deleteCompletedAndAssertEmpty();

  // 5. Calculate total duration
  const duration = Date.now() - startTime;

  // 6. Emit a custom metric to the Artillery report
  // This will create a histogram in your report called e.g., "journey_time_React"
  if (events && events.emit) {
    events.emit('histogram', `journey_time_${frameworkName}`, duration);
  }
}

module.exports = {
  runBenchmark
};