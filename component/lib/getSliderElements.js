/**
 *
 * @param {string} elementName
 * @returns A list of Element Nodes
 */

function getSliderElement(elementName, root) {
  return root.querySelectorAll(`[data-slider=${elementName}]`);
}

function getSliderElements(root) {
  const buttons = getSliderElement("button", root);
  const slides = getSliderElement("slide", root);
  const track = getSliderElement("track", root)[0];

  return {
    track,
    slides,
    buttons,
  };
}

export default getSliderElements;
