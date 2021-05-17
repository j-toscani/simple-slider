import setActiveSlide, { getActiveSlide } from "./setActiveSlide.js";

/**
 * 
 * @param {number} step 
 * @param {HTMLElement} track 
 */

export default function createHandleButtonClick(limits) {
    const checkLimits = createLimitCheck(limits)
    return (step, track) => {
        let nextSlide = getNextSlide(step, track);
        nextSlide = checkLimits(nextSlide);
        setNextSlide(nextSlide, track);
    }
}

function getNextSlide(step, track) {
    let activeSlide = getActiveSlide(track);
    activeSlide = activeSlide ?? 0; 
    const nextSlide = parseInt(activeSlide) + step;
    return nextSlide;
}

function setNextSlide(nextSlide, track) {
    setActiveSlide(track, nextSlide)
}

function createLimitCheck(limits) {
    const {min, max} = limits;

    return (nextSlide) => {
        if(nextSlide > max) {
            nextSlide = max
        }
    
        if (nextSlide < min) {
            nextSlide = min
        }
    
        return nextSlide
    }
}