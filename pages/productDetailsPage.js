import { Selector } from "testcafe";

const productDetailsPage = {
  productTitle: Selector("#shoe_name"),

  productImage: Selector(".product_details_img"),

  async pageLoaded() {
    return await this.productImage.exists;
  },

  async getProductTitle() {
    return await this.productTitle.innerText;
  },
};

export default productDetailsPage;
