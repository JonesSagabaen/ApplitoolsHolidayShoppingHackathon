import { Selector, t } from "testcafe";
import sidebarFilterComponent from "./sidebarFilterComponent";

const mainPage = {
  logo: Selector("#logo"),

  sidebarFilterComponent,

  async pageLoaded() {
    return await this.logo.exists;
  },

  async clickColorCheckbox(color) {
    await this.sidebarFilterComponent.enableColorCheckbox(color);
  },

  async clickFilterButton() {
    await t.click(this.sidebarFilterComponent.filterButton);
  },
};

export default mainPage;
