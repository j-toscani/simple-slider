function createHTMLElement(elementName) {
    return document.createElement(elementName);
}

function appendHTML (container, child) {
    const isText = typeof child === 'string';
    const appendMethod = isText ? 'append' : 'appendChild'
    return container[appendMethod](child)
}

/**
 * 
 * @param {HTMLElement} element 
 */

function addAttrs (element, attrs) {
    const attrOptions =  Object.entries(attrs);
    attrOptions.forEach(attr => element.setAttribute(attr[0], attr[1]));
    return element;
}

function addChildren(element, children) {

    children.forEach(child => {
        const isText = typeof child === 'string'
        let childElement = child
        if (!isText) {
            childElement = createHTML(child);
        }
        appendHTML(element, childElement);
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
    const {elementName, attrs, children} = structure;

    let element = createHTMLElement(elementName);
    const elementWithAttrs = addAttrs(element, attrs);

    if (children && Array.isArray(children)) {
        element = addChildren(element, children)
    }
    
    return elementWithAttrs;
}