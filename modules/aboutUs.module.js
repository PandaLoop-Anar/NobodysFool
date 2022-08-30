import { baseClass } from "../common/base.js";

export class aboutUsBlock extends baseClass {
  constructor(id, data) {
    super(id, data);
  }

  renderAboutUs(obj) {
    return `
    <div class="about-us_img-block">
      <div style="background-image: url(${obj.img_url});">
        <span>${obj.img_text}</span>
      </div>
    </div>
    <p>
      ${obj.text}
    </p>
    <a href="${obj.btn_link}" class="primary-link">Read More »</a>       
      `;
  }

  render() {
    const content = this.renderAboutUs(this.data);
    this.setHtmlContent(content);
  }
};
