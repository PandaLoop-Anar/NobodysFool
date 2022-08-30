import { baseClass } from "../common/base.js";

export class cardsBlock extends baseClass {
  constructor(id, data) {
    super(id, data);
  }

  renderCardsList(list) {
    return list
      .map((obj) => {
        return `
            <div class="card">
              <div class="card_img" style="background-image: url(${obj.card_img});">
              <!-- <span>${obj.card_imgText}</span>  -->
              </div>
              <div class="card_text">
                <h4>${obj.card_title}</h4>
                <p>
                  ${obj.card_text}
                </p>
              </div>
            </div>            
              `;
      })
      .join("");
  }

  renderCardsSection(obj, cardsContent) {
    return `
              <div class="intro_img">
                <img src="${obj.bigLeftImg_url}" alt="${obj.bigLeftImg_alt}" />
              </div>
              <div class="intro_cards">
                ${cardsContent}
              </div>
          `;
  }

  render() {
    const cardsContent = this.renderCardsList(this.data.cards);
    const content = this.renderCardsSection(this.data, cardsContent);
    this.setHtmlContent(content);
  }
}
