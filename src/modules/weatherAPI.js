const key = "Q7MKKBQ99ERRV9PAU6W4Y9E2D";

class WeatherAPI {
    async getWeather(location) {
        try {
            const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}`, {
                mode: "cors"
            });
            return await data.json();
        } catch (error) {
            console.log(error);
        }
    }

    processWeatherData(data) {
        const neededData = {};
        if (data && data.currentConditions) {
            const currentConditions = data.currentConditions;
            neededData.temp = currentConditions?.temp;
            neededData.icon = currentConditions?.icon;
            neededData.location = data.address;
        }
        return neededData;
    }
}

export default WeatherAPI;
