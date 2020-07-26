export const getNextSiblingBySelector = (element, selector) => {
    let nextElementSibling = element.nextElementSibling;
    while (nextElementSibling) {
        if (nextElementSibling.matches(selector)) {
            return nextElementSibling;
        }
        nextElementSibling = nextElementSibling.nextElementSibling;
    }
    return null;
};
