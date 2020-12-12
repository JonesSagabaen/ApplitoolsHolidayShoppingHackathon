# Applitools Holiday Shopping Hackathon
[Hackathon Annoucement](https://applitools.com/blog/holiday-shopping-hackathon-announcement/)
[Hackathon Instructions](https://applitools.com/hackathon-v20-3-instructions/)

My entry for the hackathon hosted by Applitools which gives the opportunity to compose 
visual test scripts utilizing their Applitools test products.

## Execute Tests

Use the following command to run all tests:
`npm run test`

## Dashboard Test Results

Upon running Applitools integrated tests, results are available to the user in their Dashboard.  Here are Dashboard results 
requested by the Hackathon instructions:

* [Part 1 Test results](https://eyes.applitools.com/app/test-results/00000251794498809037?accountId=OG8oG7fjPU2EfpTNhI38oA~~&display=details&top=00000251794498809037%281%29)

* [Part 2 Test results](https://eyes.applitools.com/app/test-results/00000251794495650359/00000251794495636163/steps/1/edit?accountId=OG8oG7fjPU2EfpTNhI38oA~~&diff=eyJub2RlMSI6eyJ0b3AiOjY5MywibGVmdCI6MTUsIndpZHRoIjo1NzAsImhlaWdodCI6MTA1fSwibm9kZTFoYXNoIjotMTk0NjAxNDQ5Mywibm9kZTIiOnsidG9wIjo3NTYsImxlZnQiOjE1LCJ3aWR0aCI6NTAsImhlaWdodCI6MTAwOH0sIm5vZGUyaGFzaCI6LTE5NDYwMTQ0OTN9&mode=step-editor)

* [Part 3 Test results](https://eyes.applitools.com/app/test-results/00000251794493537078?accountId=OG8oG7fjPU2EfpTNhI38oA~~&display=details&top=00000251794492625817%284%29)

### Errors

Upon running the test configuration for Part 3, observed internal errors that are suggesting that  screenshot rendering is failing.
Here is the error stack observed:

```
➜  ApplitoolsHolidayShoppingHackathon git:(main) ✗ npm run test                                                                                                                                                                                      <<<

> applitoolsholidayshoppinghackathon@1.0.0 test /Users/jonessagabaen/Documents/Programming/ApplitoolsHolidayShoppingHackathon
> npm run testcafe chrome:headless tests/


> applitoolsholidayshoppinghackathon@1.0.0 testcafe /Users/jonessagabaen/Documents/Programming/ApplitoolsHolidayShoppingHackathon
> testcafe "chrome:headless" "tests/"

(node:54001) ExperimentalWarning: Conditional exports is an experimental feature. This feature could change at any time
⠦
 Running tests in:
 - Chrome 87.0.4280.88 / macOS 11.0.1

 HolidayShopping
 ✓ Main Page
 ✓ Filtered Product Grid


The following errors were found:
Error: failed to render screenshot de86a630-5e1c-4c2e-a69d-db5aee09b475 got error: internal failure
Error: failed to render screenshot d5070327-bdcf-41fe-afd7-08cc55d088bd got error: internal failure
Error: failed to render screenshot b98e92cc-052c-4f8b-892d-dd49966b2d10 got error: internal failure

Important notice: Your Applitools visual tests are currently running with a concurrency value of 1.
This means that the visual tests don't run in parallel, and therefore the execution might be slower.
If your Applitools license supports a higher concurrency level, learn how to configure it here: https://www.npmjs.com/package/@applitools/eyes-testcafe#concurrency.
Need a higher concurrency in your account? Email us @ sdr@applitools.com with your required concurrency level.


[
  [
    Error: failed to render screenshot de86a630-5e1c-4c2e-a69d-db5aee09b475 got error: internal failure
        at getRenderStatusJob (/Users/jonessagabaen/Documents/Programming/ApplitoolsHolidayShoppingHackathon/node_modules/@applitools/visual-grid-client/src/sdk/waitForRenderedStatus.js:45:25)
        at runMicrotasks (<anonymous>)
        at processTicksAndRejections (internal/process/task_queues.js:97:5)
  ],
  [
    Error: failed to render screenshot d5070327-bdcf-41fe-afd7-08cc55d088bd got error: internal failure
        at getRenderStatusJob (/Users/jonessagabaen/Documents/Programming/ApplitoolsHolidayShoppingHackathon/node_modules/@applitools/visual-grid-client/src/sdk/waitForRenderedStatus.js:45:25)
        at runMicrotasks (<anonymous>)
        at processTicksAndRejections (internal/process/task_queues.js:97:5)
  ],
  [
    Error: failed to render screenshot b98e92cc-052c-4f8b-892d-dd49966b2d10 got error: internal failure
        at getRenderStatusJob (/Users/jonessagabaen/Documents/Programming/ApplitoolsHolidayShoppingHackathon/node_modules/@applitools/visual-grid-client/src/sdk/waitForRenderedStatus.js:45:25)
        at runMicrotasks (<anonymous>)
        at processTicksAndRejections (internal/process/task_queues.js:97:5)
  ]
]
 ✓ Product Details


 3 passed (6m 25s)
```
