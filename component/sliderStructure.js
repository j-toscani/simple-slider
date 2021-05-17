const leftButton = {
  elementName: "button",
  attrs: {
    class: "slider-button left",
    "data-slider": "button",
    text: "left",
  },
  children: ["left"],
};

const rightButton = {
  elementName: "button",
  attrs: {
    class: "slider-button right",
    "data-slider": "button",
    innerHTML: "right",
  },
  children: ["right"],
};

const track = {
  elementName: "ul",
  attrs: {
    class: "track",
    "data-slider": "track",
    style: "--position: 0",
  },
};

const slider = {
  elementName: "div",
  attrs: {
    class: "slider",
  },
  children: [track],
};

const SLIDER_STRUCTURE = {
  elementName: "div",
  attrs: {
    class: "slider-wrapper",
  },
  children: [leftButton, rightButton, slider],
};

export default SLIDER_STRUCTURE;
