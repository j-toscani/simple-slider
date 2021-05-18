import getSliderElements from "./getSliderElements.js";
import createHandleButtonClick from "./handleButtonClick.js";
import getDirectionButtons from "./getDirectionButtons.js";
import getSliderEnds from "./getSliderEnds.js";

export default function setUpFiniteSlider(root = document, limits) {
  let { track, buttons } = getSliderElements(root);
  const handleButtonClick = createHandleButtonClick(limits);
  const { rightButton, leftButton } = getDirectionButtons(buttons);

  rightButton.addEventListener("click", () => handleButtonClick(-1, track));
  leftButton.addEventListener("click", () => handleButtonClick(1, track));
}
