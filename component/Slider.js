import createHTML from '../lib/createHTML.js'
import SLIDER_STRUCTURE from './sliderStructure.js'

class Slider extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        const template = createHTML(SLIDER_STRUCTURE) 
        const slides = document.getElementById('slider').content;
        const track = template.querySelector('[data-slider="track"]')
        track.append(slides);
        this.append(template)
  }
}


export default Slider