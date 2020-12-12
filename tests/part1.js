import Eyes from "@applitools/eyes-testcafe";
import mainPage from "../pages/mainPage";
import productDetailsPage from "../pages/productDetailsPage";
import productGridComponent from "../pages/productGridComponent";

const eyes = new Eyes();

fixture`part1`
  .page("https://demo.applitools.com/tlcHackathonMasterV1.html")

  // Call Close on eyes to let the server know it should display the results
  .afterEach(async () => eyes.close())
  .after(async () => {
    // Wait and collect all test results
    // we pass false to this method to suppress the exception that is thrown if we
    // find visual differences
    let allTestResults = await eyes.waitForResults(false);
    // Print results
    console.log(allTestResults);
  });

test("Main Page", async (t) => {
  await eyes.open({
    t,
    appName: "AppliFashion",
    testName: "Test 1",
  });

  await mainPage.pageLoaded();
  await t.expect(mainPage.logo.exists).ok();

  await eyes.checkWindow({
    tag: "main page",
    target: "window",
    fully: true,
  });
});

test("Filtered Product Grid", async (t) => {
  await eyes.open({
    t,
    appName: "AppliFashion",
    testName: "Test 2",
  });

  await mainPage.pageLoaded();
  let countBeforeFiltering = await mainPage.getProductGridCount();

  await mainPage.clickColorCheckbox("Black");
  await mainPage.clickFilterButton();
  let countAfterFiltering = await mainPage.getProductGridCount();
  await t.expect(countBeforeFiltering).gt(countAfterFiltering);

  await eyes.checkWindow({
    tag: "product details",
    target: "region",
    selector: productGridComponent.productGrid,
    fully: true,
  });
});

test("Product Details", async (t) => {
  await eyes.open({
    t,
    appName: "AppliFashion",
    testName: "Test 3",
  });

  let targetProduct = "Appli Air x Night";
  await mainPage.pageLoaded();
  await mainPage.clickProduct(targetProduct);

  await productDetailsPage.pageLoaded();
  await t.expect(await productDetailsPage.getProductTitle()).eql(targetProduct);

  await eyes.checkWindow({
    tag: "product details",
    target: "window",
    fully: true,
  });
});
