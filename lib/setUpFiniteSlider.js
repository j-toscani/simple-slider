import getSliderElements from "./getSliderElements.js";
import createHandleButtonClick from "./handleButtonClick.js";
import getDirectionButtons from './getDirectionButtons.js'

export default function setUpFiniteSlider() {
    let {track, buttons, slides} = getSliderElements();

    const handleButtonClick = createHandleButtonClick({min:(slides.length -1) * -1, max:0});
    const {rightButton, leftButton} = getDirectionButtons(buttons);

    rightButton.addEventListener("click", () => handleButtonClick(-1, track))
    leftButton.addEventListener("click", () => handleButtonClick(1, track))
}

