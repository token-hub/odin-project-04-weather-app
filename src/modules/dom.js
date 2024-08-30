class DOM {
    static getElement(selector) {
        return document.querySelector(selector);
    }

    static getElementValue(selector) {
        const target = DOM.getElement(selector);
        if (target) {
            return target.value;
        }
    }
}

export default DOM;
