import { baseClass } from "../common/base.js";

export class navBlock extends baseClass {
  constructor(id, data) {
    super(id, data);
  }

  renderNavItemsList(list) {
    return list
      .map((obj) => {
        return `
            <li class="nav-item">
              <a href="${obj.navBtn_link}">${obj.navBtn_text}</a>
              <div class="line"></div>
            </li>           
              `;
      })
      .join("");
  }

  renderNavBlock(obj, navItemsContent) {
    return `
          <button class="dropdown-btn primary-btn">${obj.dropdownBtn}</button>  
          <ul class="nav-items">
            ${navItemsContent}
          </ul>
          <div class="liner"></div>
          `;
  }

  render() {
    const navItemsContent = this.renderNavItemsList(this.data.navItems);
    const content = this.renderNavBlock(this.data, navItemsContent);
    this.setHtmlContent(content);
  }
};
