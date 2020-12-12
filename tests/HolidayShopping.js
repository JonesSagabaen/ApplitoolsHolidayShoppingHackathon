import Eyes from "@applitools/eyes-testcafe";
import mainPage from "../pages/mainPage";
import productDetailsPage from "../pages/productDetailsPage";

const eyes = new Eyes();

fixture`HolidayShopping`
  // Used for Part 1 for Hackathon instructions
  //.page("https://demo.applitools.com/tlcHackathonMasterV1.html")

  // Used for Part 2 for Hackathon instructions
  //.page("https://demo.applitools.com/tlcHackathonDev.html")

  // Used for Part 3 for Hackathon instructions
  .page("https://demo.applitools.com/tlcHackathonMasterV2.html")

  .afterEach(async () => eyes.close())
  .after(async () => {
    let allTestResults = await eyes.waitForResults(false);
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
  //let countBeforeFiltering = await mainPage.getProductGridCount();

  await mainPage.clickColorCheckbox("Black");
  await mainPage.clickFilterButton();
  //let countAfterFiltering = await mainPage.getProductGridCount();
  //await t.expect(countBeforeFiltering).gt(countAfterFiltering);  // Disabled check for Applitools to detect test failure

  await eyes.checkWindow({
    tag: "product details",
    target: "region",
    selector: mainPage.productGridComponent.productGrid,
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
