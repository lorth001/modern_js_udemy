class Weather {
    constructor(city) {
        this.apiKey = 'fe5cd4372f0730608150a3be4efa0dba';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        const responseData = response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}