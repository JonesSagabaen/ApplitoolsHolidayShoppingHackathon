import { Selector, t } from "testcafe";

const mainPage = {
  logo: Selector("#logo"),

  // TODO: Left panel component

  // TODO: Main view that holds shoe images

  async pageLoaded() {
    // TODO: Delete this.  It's temp notes that this works
    //await t.debug();
    //await t.click(this.logo);

    return await this.logo.exists;
  },
};

export default mainPage;
