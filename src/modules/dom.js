class DOM {
    getElement(selector) {
        return document.querySelector(selector);
    }

    getElementValue(selector) {
        const target = this.getElement(selector);
        if (target) {
            return target.value;
        }
    }

    appendWeather(data) {
        const forcast = this.getElement("#forcast");
        if (forcast && Object.values(data).length) {
            const weather = `
            <h2> Location: <em>${data.location}</em></h2>
            <h3>Temperature: <em>${data.temp}</em> <h3>
            `;
            forcast.innerHTML = weather;
        }
    }
}

export default DOM;
