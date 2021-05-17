function createHTMLElement(elementName) {
    return document.createElement(elementName);
}

function appendHTML (container, child) {
    return container.appendChild(child)
}

/**
 * 
 * @param {HTMLElement} element 
 */

function addAttrs (element, attrs) {
    const attrOptions =  Object.keys(attrs);

    attrOptions.forEach(attr => element.setAttribute(attr[0], attr[1]));
    return element;
}

function addChildren(element, children) {
    const children = children.forEach(element => {
        const childElement = createHTMLElement(element);
        appendHTML(elementWithAttrs, childElement);
    })

    return element
}

/**
 * @typedef {Object} ElementObject
 * @property {string} element    The name of an HTMLElement as string
 * @property {Object.<string, string>} attrs
 * @property {ElementObject[]} [children]
 */

/**
 * @param {...ElementObject} structure
 */


export default function createHTML(structure) {
    const element = createHTMLElement(structure.name);
    const elementWithAttrs = addAttrs(element, element.attrs);

    if (element.children.length) {
        addChildren(element, children)
    }
    
    return elementWithAttrs;
}