class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather.main;
        this.string.textContent = (((weather.main.temp-273.15)*1.8)+32);
        this.icon.setAttribute('src', weather.weather.icon);
        this.humidity.textContent = `Relative Humidity:  ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${(((weather.main.feels_like-273.15)*1.8)+32)}`;
        this.dewpoint.textContent = `Wind: ${weather.wind.speed}`;
    }
}