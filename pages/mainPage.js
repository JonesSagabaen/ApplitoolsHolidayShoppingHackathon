import { Selector, t } from "testcafe";
import sidebarFilterComponent from "./sidebarFilterComponent";
import productGridComponent from "./productGridComponent";

const mainPage = {
  logo: Selector("#logo"),

  sidebarFilterComponent,

  productGridComponent,

  async pageLoaded() {
    return await this.logo.exists;
  },

  async clickColorCheckbox(color) {
    await this.sidebarFilterComponent.enableColorCheckbox(color);
  },

  async clickFilterButton() {
    await t.click(this.sidebarFilterComponent.filterButton);
  },

  async getProductGridCount() {
    return await this.productGridComponent.getProductGridCount();
  },

  async clickProduct(productName) {
    await this.productGridComponent.clickProduct(productName);
  },
};

export default mainPage;
