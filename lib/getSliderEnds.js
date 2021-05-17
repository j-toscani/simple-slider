
/**
 * 
 * @param {NodeList} slides 
 */

export default function getSliderEnds(slides) {
    const maxSlides = slides.length;
    return {min:(slides.length -1) * -1, max:0}
}