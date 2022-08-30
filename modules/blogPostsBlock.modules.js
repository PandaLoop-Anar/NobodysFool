import { baseClass } from "../common/base.js";

export class blogPostsBlock extends baseClass {
  constructor(id, data) {
    super(id, data);
  }

  renderBlogPostsList(list) {
    return list
      .map((obj) => {
        return `
          <div class="blog">
            <h5>${obj.post_title}</h5>
            <h6>${obj.post_info}</h6>
            <small>${obj.post_date}</small>
            <p>
              ${obj.post_text}
            </p>
            <a href="${obj.post_link}" class="primary-link">Read More »</a>
          </div>        
                `;
      })
      .join("");
  }

  render() {
    const content = this.renderBlogPostsList(this.data);
    this.setHtmlContent(content);
  }
}
