import SLIDER_STRUCTURE from "./sliderStructure.js";
import createHTML from "./lib/createHTML.js";
import setUpFiniteSlider from "./lib/setUpFiniteSlider.js";

class Slider extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute("href", "./component/slider.css");

    const content = createHTML(SLIDER_STRUCTURE);
    const template = document.createElement("template");
    template.content.appendChild(content);
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(styleLink);
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const limits = {
      min: this.children.length * -1 + 1,
      max: 0,
    };
    setUpFiniteSlider(this.shadowRoot, limits);
  }
}

export default Slider;
