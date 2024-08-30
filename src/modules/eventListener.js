import DOM from "./dom";

class EventListener {
    constructor() {
        this.dom = new DOM();
    }

    addListener({ element, event, func, toBind }) {
        if (element) {
            element.addEventListener(event, async (e) => {
                e.preventDefault();
                const location = this.dom.getElementValue("#location");
                if (location) {
                    const bindedFunc = func.bind(toBind);
                    bindedFunc(location);
                }
            });
        }
    }
}

export default EventListener;
