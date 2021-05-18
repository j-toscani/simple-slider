/**
 *
 * @param {HTMLElement} track
 */

export function getActiveSlide(track) {
  return parseInt(track.style.getPropertyValue("--position"));
}

/**
 *
 * @param {HTMLElement} track
 */

export default function setActiveSlide(track, value) {
  track.style.setProperty("--position", value);
}
