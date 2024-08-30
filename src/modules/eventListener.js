class EventListener {
    addListener({ element, event, func }) {
        if (element) {
            element.addEventListener(event, async (e) => {
                try {
                    e.preventDefault();
                    const location = DOM.getElementValue("#location");
                    if (location) {
                        await func(location);
                    }
                } catch (error) {
                    console.log(error);
                }
            });
        }
    }
}

export default EventListener;
