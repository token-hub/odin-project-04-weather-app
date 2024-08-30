import "./styles.css";
import DOM from "./modules/dom";
import EventListener from "./modules/eventListener";
import weatherAPI from "./modules/weatherAPI";

class Main {
    constructor() {
        this.eventListener = new EventListener();
    }

    init() {
        // do something here
        // attach eventListener
        this.addEventListeners();
    }

    addEventListeners() {
        const submitBtn = DOM.getElement("#location-form");
        this.eventListener.addListener({
            element: submitBtn,
            event: "submit",
            func: () => console.log("Hello")
        });
    }
}

const app = new Main();
app.init();
