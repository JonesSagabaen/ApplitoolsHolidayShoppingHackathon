import mainPage from "../pages/mainPage";

fixture`part1`.page("https://demo.applitools.com/tlcHackathonMasterV1.html");

test("Main Page", async (t) => {
  await mainPage.pageLoaded();
  await t.expect(mainPage.logo.exists).ok();

  // TODO: Take a screenshot
});

test("Filtered Product Grid", async (t) => {
  await mainPage.pageLoaded();
  await t.expect(mainPage.logo.exists).ok();
  await mainPage.clickColorCheckbox("Black");
  await mainPage.clickFilterButton();

  await t.debug();

  // TODO: Take a screenshot
});

test.skip("Product Details", async (t) => {
  await t.debug();

  // TODO: Without filtering, click Appli Air x Night image
  // TODO: Take a screenshot
});
