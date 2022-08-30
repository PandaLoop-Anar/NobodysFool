import { baseClass } from "../common/base.js";

export class quickLinkBlock extends baseClass {
  constructor(id, data) {
    super(id, data);
  }

  renderQuickLinksList(list) {
    return list
      .map((obj) => {
        return `
              <li>
                  <a href="${obj.link_href}" class="primary-link"> ${obj.link_text}</a>
              </li>         
              `;
      })
      .join("");
  }

  render() {
    const content = this.renderQuickLinksList(this.data);
    this.setHtmlContent(content);
  }
};
