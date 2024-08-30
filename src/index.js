import "./styles.css";
import DOM from "./modules/dom";
import EventListener from "./modules/eventListener";
import WeatherAPI from "./modules/weatherAPI";

class Main {
    constructor() {
        this.eventListener = new EventListener();
        this.weatherAPI = new WeatherAPI();
        this.dom = new DOM();
    }

    init() {
        // do something here
        // attach eventListener
        this.addEventListeners();
    }

    async showWeather(location) {
        try {
            const data = await this.weatherAPI.getWeather(location);
            const processedData = this.weatherAPI.processWeatherData(data);
            this.dom.appendWeather(processedData);
        } catch (error) {
            console.log(error);
        }
    }

    addEventListeners() {
        const submitBtn = this.dom.getElement("#location-form");
        this.eventListener.addListener({
            element: submitBtn,
            event: "submit",
            func: this.showWeather,
            toBind: this
        });
    }
}

const app = new Main();
app.init();
