import { Selector, t } from "testcafe";
import mainPage from "./mainPage";

const productGridComponent = {
  productGrid: Selector("#product_grid"),

  async clickProduct(productName) {
    let targetProduct = this.productGrid
      .find(".grid_item a")
      .withText(productName);
    await t.click(targetProduct);
  },
};

export default { ...mainPage, ...productGridComponent };

