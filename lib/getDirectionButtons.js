/**
 * 
 * @param {HTMLButtonElement} buttons 
 * @returns Two buttons having one of the following classes assigned to them each: "right" | "left".
 *
 */

export default function getDirectionButtons(buttons) {
    buttons = Array.from(buttons);

    const leftButton = getDirectionButton(buttons,"left")
    const rightButton = getDirectionButton(buttons, "right")

    return {
        leftButton,
        rightButton
    }
}



function getDirectionButton(buttons, direction) {
    return buttons.find(button => Array.from(button.classList).includes(direction))
}