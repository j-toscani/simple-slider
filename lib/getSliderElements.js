/**
 * 
 * @param {string} elementName 
 * @returns A list of Element Nodes
 */

function getSliderElement(elementName) {
    return document.querySelectorAll(`[data-slider=${elementName}]`)
}

function getSliderElements() {
    const buttons = getSliderElement('button');
    const slides = getSliderElement('slide');
    const track = getSliderElement('track')[0];

    return {
        track,
        slides,
        buttons
    }
}

export default getSliderElements;