document.addEventListener("DOMContentLoaded", function() {
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetchWeather(latitude, longitude);
    }

    function error() {
        document.getElementById('weatherDisplay').innerText = 'Unable to retrieve your location for weather data.';
    }

    async function fetchWeather(lat, lon) {
        const apiKey = 'YOUR_API_KEY';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            displayWeather(data);
        } catch (err) {
            console.error(err);
            document.getElementById('weatherDisplay').innerText = 'Failed to fetch weather data.';
        }
    }

    function displayWeather(data) {
        const temp = data.main.temp;
        document.getElementById('weatherDisplay').innerText = `Current temperature: ${temp}°C`;
    }
});
