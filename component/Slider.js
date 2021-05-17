import createHTML from "../lib/createHTML.js";
import SLIDER_STRUCTURE from "./sliderStructure.js";

class Slider extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    const template = createHTML(SLIDER_STRUCTURE);

    this.append(template);
    const slides = document.querySelector(`[data-sliderId='mySlider']`).content;
    document.querySelector("[data-slider='track']").append(slides);
    this.append(slides);
  }
}

export default Slider;
