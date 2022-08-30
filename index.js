"use strict";

import { navBlock } from "./modules/navBlock.module.js";
import { navBlockData } from "./data/navBlock.data.js";
import { slider} from "./modules/slider.module.js";
import { slidesData } from "./data/slides.data.js";
import { cardsBlock } from "./modules/cardsBlock.module.js";
import { cardsBlockData } from "./data/cardsBlock.data.js";
import { aboutUsBlock } from "./modules/aboutUs.module.js";
import { aboutUsData } from "./data/aboutUs.data.js";
import { quickLinkBlock } from "./modules/quickLinksBlock.module.js";
import { quickLinksData } from "./data/quickLinks.data.js";
import { blogPostsBlock } from "./modules/blogPostsBlock.modules.js";
import { blogPostData } from "./data/blogPost.data.js";

import { SLIDES_CHANGING_TIME } from "./config/config.js";

const authorisationSection = document.getElementById("authorisation-section");
const toggleBtn = document.getElementById("toggle-btn");

const idOfNavContainer = document.getElementById("navContainer");
const idOfSliderContainer = document.getElementById("sliderContainer");

const idOfCardsContainer = document.getElementById("cardsBlockContainer");
const idOfAboutUsContainer = document.getElementById("aboutUsContainer");
const idOfQuickLinksContainer = document.getElementById("quickLinksContainer");
const idOfBlogPostsContainer = document.getElementById("blogPostsContainer");

// Autorisation section hide
let clickNum = 0;
toggleBtn.addEventListener("click", (event) => {
  if (clickNum % 2 === 0) {
    event.target.innerHTML = `+`;
    authorisationSection.style.top = "-55px";
    authorisationSection.style.marginTop = "-55px";
  } else {
    event.target.innerHTML = `-`;
    authorisationSection.style.top = "0";
    authorisationSection.style.marginTop = "0";
  }
  clickNum++;
});

// nav block

const FirstNavBlock = new navBlock(idOfNavContainer, navBlockData);
FirstNavBlock.render();

// active button in nav block
const navBtns = document.querySelectorAll("ul.nav-items li");
// Default
navBtns[0].classList.add("nav-item_active");

for (let i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", () => {
    for (let el of navBtns) {
      el.classList.remove("nav-item_active");
    }
    navBtns[i].classList.add("nav-item_active");
  });
}

// slider Block
const FirstSlider = new slider(idOfSliderContainer, slidesData);
FirstSlider.render();
// Slider moving
const sliderBtns = document.querySelectorAll("div.slider_btns div.slider_btn");
const slides = document.querySelectorAll("div.slides div.slide");

showSlides(0);
for (let i = 0; i < sliderBtns.length; i++) {
  sliderBtns[i].addEventListener("click", () => {
    showSlides(i);
  });
}

function showSlides(n) {
  for (let btn of sliderBtns) {
    btn.classList.remove("slider_btn-active");
  }
  sliderBtns[n].classList.add("slider_btn-active");

  for (let i = 0; i < slides.length; i++) {
    if (i !== n) {
      let leftSize = 100 * (i - n);
      slides[i].style.left = `${leftSize}%`;
    }
  }
  slides[n].style.left = "0";
}
let indexOfSlide=0;
let changeSlide = (n) => {
  indexOfSlide+=n;
  if(indexOfSlide>sliderBtns.length-1){
    indexOfSlide=0;
  }else if(indexOfSlide<0){
    indexOfSlide=sliderBtns.length-1;
  }showSlides(indexOfSlide);

};
const automatic = () => {
  setInterval(()=>{
    changeSlide(1);
  }, SLIDES_CHANGING_TIME);
};
automatic();

// Cards Section
const FirstcardsBlock = new cardsBlock(idOfCardsContainer, cardsBlockData);
FirstcardsBlock.render();

// Footer
// About us block
const FirstAboutUsBlock = new aboutUsBlock(idOfAboutUsContainer, aboutUsData);
FirstAboutUsBlock.render();

// Quick links block

const FirstQuickLinkBlock = new quickLinkBlock(
  idOfQuickLinksContainer,
  quickLinksData
);
FirstQuickLinkBlock.render();

// Blog Post
const FirstBlogPostsBlock = new blogPostsBlock(
  idOfBlogPostsContainer,
  blogPostData
);
FirstBlogPostsBlock.render();
