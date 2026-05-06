# 🎭 Playwright & Artillery Tutorial: TodoMVC

Welcome to the Playwright and Artillery testing tutorial for the [TodoMVC](https://todomvc.com/) application! This repository demonstrates how to set up Playwright, record functional tests, build a Page Object Model (POM), benchmark multiple front-end frameworks (React, Angular, Vue, etc.), and perform performance load testing using Artillery.
<a id="home"></a>

## 🔗 Jump to important sections
* [Project Structure & Files Explanation](#project-structure)
* [Step 1: Project Setup](#step-1)
* [Step 2: Record a Test Session](#step-2)
* [Step 3: Page Object Model (POM) & Benchmark Testing](#step-3)
* [Step 4: Load Testing with Artillery (React)](#step-4)
* [Step 5: Load Testing across some Frameworks](#step-5)
* [Step 6: Artillery Load Testing Strategy](#step-6)

<a id="project-structure"></a>
## 📂 Project Structure & Files Explanation

Here is an overview of the files included in this repository and what they do:

### Core Files
* **`package.json` & `package-lock.json`**: Standard Node.js configuration files managing project dependencies.
* **`initializePlaywright.png`**: Screenshot reference of the Playwright initialization wizard options used for this setup.

### Test Scripts & POM
* **`test.spec.ts`**: The basic recorded functional steps generated directly via the Playwright VS Code extension.
* **`TodoPage.js`**: The Page Object Model (POM) of the Todo app, built to work seamlessly across every framework.
* **`benchmark.spec.js`**: Playwright test script that functionally checks and benchmarks different framework implementations (Angular, React, Vanilla JS, Vue, jQuery) in parallel.

### Artillery Load Testing
* **`artillery-processor.js`**: Custom JavaScript processor logic for load testing the React implementation.
* **`load-test.yml`**: YML configuration file for Artillery to run load tests using the React processor.
* **`artillery-processor-v2.js`**: Advanced processor logic configured to run tests and compare metrics across multiple frameworks.
* **`load-frameworks-test.yml`**: YML configuration file for Artillery to run and compare load tests across all frameworks.

---
[back](#home)
<a id="step-1"></a>
## 🚀 Step 1: Project Setup

Initialize the project and install all necessary dependencies for Playwright and Artillery. Run the following commands in your terminal:

```bash
# Initialize a new Node.js project
npm init -y 

# Install Playwright Test runner as a dev dependency
npm install -D @playwright/test

# Install supported browsers
npx playwright install 

# Install Artillery globally for load testing
npm install -g artillery 

# Install the Artillery Playwright reporter plugin
npm install -D @artilleryio/playwright-reporter

# Initialize Playwright to scaffold configuration files
npm init playwright@latest
```
*(Note: After running the initialization command, follow the setup wizard choices exactly as shown in `initializePlaywright.png`)*

---[back](#home)
<a id="step-2"></a>
## 🎥 Step 2: Record a Test Session

Using the **Playwright Test extension** in VS Code, we recorded a typical user flow on the[React TodoMVC app](https://todomvc.com/examples/react/dist/).

**Scenario Recorded:**
1. **Create:** Insert some Todos sequentially.
2. **Toggle:** Mark all Todos as "completed".
3. **Update:** Edit the text of some Todos.
4. **Filter:** Switch between "All", "Active", and "Completed" views.
5. **Delete:** Click the "Clear completed" button and assert an empty list.

**Output:** `test.spec.ts`

To execute the recorded test, run:
```bash
npx playwright test .\test-1.spec.ts
```

---
[back](#home)
<a id="step-3"></a>
## 🏎️ Step 3: Page Object Model (POM) & Benchmark Testing

To make our tests scalable across all TodoMVC framework implementations, we created a Page Object Model (`TodoPage.js`). This allows our tests to interact with the DOM elements uniformly regardless of the underlying framework.

We then executed a functional check across 5 different frameworks simultaneously using the POM.

**Run the Benchmark Tests (Parallel Execution):**
```bash
npx playwright test benchmark.spec.js --fully-parallel
```

**Expected Output:**
```text
Running 5 tests using 5 workers

  ✓  1 benchmark.spec.js:16:9 › Angular TodoMVC › TodoMVC Functional Check for Angular (3.1s)
  ✓  2 benchmark.spec.js:16:9 › React TodoMVC › TodoMVC Functional Check for React (3.4s)
  ✓  3 benchmark.spec.js:16:9 › Vanilla JS TodoMVC › TodoMVC Functional Check for Vanilla JS (3.1s)
  ✓  4 benchmark.spec.js:16:9 › Vue TodoMVC › TodoMVC Functional Check for Vue (3.0s)
  ✓  5 benchmark.spec.js:16:9 › jQuery TodoMVC › TodoMVC Functional Check for jQuery (2.7s)

  5 passed (5.1s)
```

---
[back](#home)
<a id="step-4"></a>
## 📉 Step 4: Load Testing with Artillery (React)

Using Artillery integrated with the Playwright engine, we simulated user load specifically targeting the React application. 

**Run Command:**
```bash
artillery run load-test.yml --record --key <key>
```
🔗 **Output Report:** [View the Artillery Dashboard Report for React](https://app.artillery.io/share/sh_e2d516e17e155a7eec04760bd531802a9dd9ec756a7a8e2ea337dee3a0b9ff1d)

---
[back](#home)
<a id="step-5"></a>
## 📊 Step 5: Load Testing across some Frameworks

To evaluate and compare how different implementations handle simulated browser traffic, we executed an Artillery test across multiple frameworks using our v2 processor.

**Run Command:**
```bash
artillery run load-frameworks-test.yml --record --key <key>
```
🔗 **Output Report:** [View the Artillery Dashboard Report for All Frameworks](https://app.artillery.io/share/sh_43ce2baf2cd42e0f451279869d012e1d316c62d271cf624c689a2ffacf86cd69)

---[back](#home)
<a id="step-6"></a>
## 📈 Step 6: Artillery Load Testing Strategy

The load tests configured in the YML files follow a tiered performance strategy to monitor how the app scales under different types of traffic.

**Defined Phases:**
```yaml
phases:
    - name: "Warm up"
      duration: 60           # 1 minute
      arrivalRate: 1         # 1 user per second
      
    - name: "Ramp up"
      duration: 180          # 3 minutes
      arrivalRate: 1         # Start at 1 user per second...
      rampTo: 10             # ...and gradually increase to 10 users per second
      
    - name: "Spike"
      duration: 30           # 30 seconds
      arrivalRate: 20        # 100 users per second immediately
```

This YAML snippet defines the **load testing strategy** for your application. It tells the testing tool (Artillery) exactly how much traffic to generate, how fast to generate it, and for how long. 

It breaks the test down into three consecutive stages (or phases) to see how the application behaves under different conditions:

**1. The "Warm up" Phase (Gentle start)**
* **What happens:** The test starts off very gently to make sure the application, database, and servers are initialized and ready to handle traffic.
* **Duration:** It lasts for **1 minute** (60 seconds).
* **Traffic:** It sends exactly **1 new user per second** consistently throughout the minute. 

**2. The "Ramp up" Phase (Gradual increase)**
* **What happens:** Now that the system is warmed up, the test begins to slowly increase the pressure to see how the application scales as it gets busier. 
* **Duration:** This phase lasts for **3 minutes** (180 seconds).
* **Traffic:** It starts off at the previous pace of **1 user per second**, but steadily adds more and more traffic over the 3 minutes until it reaches a peak of **10 new users per second**.

**3. The "Spike" Phase (Sudden surge)**
* **What happens:** Finally, the test simulates a sudden, intense burst of traffic (like a flash sale or a viral moment) to see if the application crashes or slows down under sudden stress.
* **Duration:** This lasts for a quick **30 seconds**.
* **Traffic:** It immediately jumps to a high, constant rate of **20 new users per second**. 

**In summary:** The test gently wakes the system up for 1 minute, slowly builds up the traffic over the next 3 minutes, and then hits the system with a heavy 30-second stress test to see if it holds up!

[back](#home)
