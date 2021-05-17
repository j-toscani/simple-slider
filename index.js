import Slider from './component/Slider.js';
import setUpFiniteSlider from './lib/setUpFiniteSlider.js';

customElements.define('custom-slider', Slider);
setUpFiniteSlider();
