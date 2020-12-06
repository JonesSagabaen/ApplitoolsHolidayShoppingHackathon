import mainPage from "../pages/mainPage";

fixture`part1`.page("https://demo.applitools.com/tlcHackathonMasterV1.html");

test("Main Page", async (t) => {
  await mainPage.pageLoaded().ok();
  //await t.debug();
  await t.expect(mainPage.logo.exists).ok();

  // TODO: Take a screenshot
});

test.skip("Filtered Product Grid", async (t) => {
  await t.debug();

  // TODO: On left panel component, check Black under colors filter
  // TODO: Click Filter button
  // TODO: Take a screenshot
});

test.skip("Product Details", async (t) => {
  await t.debug();

  // TODO: Without filtering, click Appli Air x Night image
  // TODO: Take a screenshot
});
