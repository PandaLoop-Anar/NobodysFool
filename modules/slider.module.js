
import { baseClass } from "../common/base.js";


export class slider extends baseClass {
  constructor(id, data) {
    super(id, data);
  }

  renderBtnsList(list) {
    return list
      .map((obj) => {
        return `
          <div class="slider_btn">${obj.slider_btn}</div>
          `;
      })
      .join("");
  }

  renderSlidesList(list) {
    return list
      .map((obj) => {
        return `
          <div class="slide">
            <div class="slide_text-block">
              <h2>${obj.slide_title}</h2>
              <p>
                ${obj.slide_text}
              </p>
              <button class="primary-btn">Read More >></button>
            </div>
            <div class="slide_img-block">
              <div style="background-image: url(${obj.slide_img});">
              <!-- <span>${obj.slide_imgText}</span> -->
              </div>
            </div>
          </div>
          `;
      })
      .join("");
  }

  renderSliderBlock(sliderBtnsContent, slidesContent) {
    return `
      <div class="slider_btns">
        ${sliderBtnsContent}
      </div>
      <div class="slides">
        ${slidesContent}
      </div>
      `;
  }

  render() {
    const sliderBtnsContent = this.renderBtnsList(this.data);
    const slidesContent = this.renderSlidesList(this.data);
    const content = this.renderSliderBlock(sliderBtnsContent, slidesContent);
    this.setHtmlContent(content);
  }
}
