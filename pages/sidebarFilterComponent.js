import { Selector, t } from "testcafe";
import mainPage from "./mainPage";

const sidebarFilterComponent = {
  colorCategory: Selector(".filter_type").withText("colors"),

  filterButton: Selector("#filterBtn"),

  async enableColorCheckbox(color) {
    let targetCheckbox = this.colorCategory.find("li").withText(color);
    if (!(await this.checkboxChecked(targetCheckbox))) {
      await t.click(targetCheckbox);
    }
  },

  async checkboxChecked(listItemCheckboxSelector) {
    if (listItemCheckboxSelector.find("input").checked) {
      return false;
    }
    return true;
  },
};

export default { ...mainPage, ...sidebarFilterComponent };
