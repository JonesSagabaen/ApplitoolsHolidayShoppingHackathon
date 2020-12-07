import mainPage from "../pages/mainPage";
import productDetailsPage from "../pages/productDetailsPage";

fixture`part1`.page("https://demo.applitools.com/tlcHackathonMasterV1.html");

test("Main Page", async (t) => {
  await mainPage.pageLoaded();
  await t.expect(mainPage.logo.exists).ok();

  // TODO: Take a screenshot
});

test("Filtered Product Grid", async (t) => {
  await mainPage.pageLoaded();
  let countBeforeFiltering = await mainPage.getProductGridCount();

  await mainPage.clickColorCheckbox("Black");
  await mainPage.clickFilterButton();
  let countAfterFiltering = await mainPage.getProductGridCount();
  await t.expect(countBeforeFiltering).gt(countAfterFiltering);

  // TODO: Take a screenshot
});

test("Product Details", async (t) => {
  let targetProduct = "Appli Air x Night";
  await mainPage.pageLoaded();
  await mainPage.clickProduct(targetProduct);

  await productDetailsPage.pageLoaded();
  await t.expect(await productDetailsPage.getProductTitle()).eql(targetProduct);

  // TODO: Take a screenshot
});
