// Weather API Configuration
// IMPORTANT: Replace with your own OpenWeatherMap API key
// Get free API key from: https://openweathermap.org/api
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherContainer = document.getElementById('weatherContainer');
const errorContainer = document.getElementById('errorContainer');
const loadingContainer = document.getElementById('loadingContainer');

// Weather Icons Mapping
const weatherIcons = {
    '01d': 'fas fa-sun',
    '01n': 'fas fa-moon',
    '02d': 'fas fa-cloud-sun',
    '02n': 'fas fa-cloud-moon',
    '03d': 'fas fa-cloud',
    '03n': 'fas fa-cloud',
    '04d': 'fas fa-clouds',
    '04n': 'fas fa-clouds',
    '09d': 'fas fa-cloud-rain',
    '09n': 'fas fa-cloud-rain',
    '10d': 'fas fa-cloud-sun-rain',
    '10n': 'fas fa-cloud-moon-rain',
    '11d': 'fas fa-bolt',
    '11n': 'fas fa-bolt',
    '13d': 'fas fa-snowflake',
    '13n': 'fas fa-snowflake',
    '50d': 'fas fa-smog',
    '50n': 'fas fa-smog'
};

// Event Listeners
searchBtn.addEventListener('click', getWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather();
    }
});

// Get weather data from API
async function getWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    showLoading();
    hideError();
    hideWeather();

    try {
        const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=en`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please enter a valid city name.');
            } else if (response.status === 401) {
                throw new Error('Invalid API key. Please check your API key.');
            } else {
                throw new Error('Failed to fetch weather information. Please try again.');
            }
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Weather API Error:', error);
        showError(error.message);
    } finally {
        hideLoading();
    }
}

// Display weather information
function displayWeather(data) {
    const weatherHTML = `
        <div class="weather-main">
            <div class="weather-icon">
                <i class="${getWeatherIcon(data.weather[0].icon)}"></i>
            </div>
            <div class="temperature">${Math.round(data.main.temp)}°C</div>
            <div class="city-name">${data.name}, ${data.sys.country}</div>
            <div class="weather-description">${data.weather[0].description}</div>
        </div>
        
        <div class="weather-details">
            <div class="weather-detail">
                <i class="fas fa-thermometer-half"></i>
                <div class="label">Feels Like</div>
                <div class="value">${Math.round(data.main.feels_like)}°C</div>
            </div>
            
            <div class="weather-detail">
                <i class="fas fa-tint"></i>
                <div class="label">Humidity</div>
                <div class="value">${data.main.humidity}%</div>
            </div>
            
            <div class="weather-detail">
                <i class="fas fa-wind"></i>
                <div class="label">Wind Speed</div>
                <div class="value">${data.wind.speed} m/s</div>
            </div>
            
            <div class="weather-detail">
                <i class="fas fa-compress-alt"></i>
                <div class="label">Pressure</div>
                <div class="value">${data.main.pressure} hPa</div>
            </div>
            
            <div class="weather-detail">
                <i class="fas fa-eye"></i>
                <div class="label">Visibility</div>
                <div class="value">${(data.visibility / 1000).toFixed(1)} km</div>
            </div>
            
            <div class="weather-detail">
                <i class="fas fa-sun"></i>
                <div class="label">Sunrise</div>
                <div class="value">${formatTime(data.sys.sunrise)}</div>
            </div>
            
            <div class="weather-detail">
                <i class="fas fa-moon"></i>
                <div class="label">Sunset</div>
                <div class="value">${formatTime(data.sys.sunset)}</div>
            </div>
            
            <div class="weather-detail">
                <i class="fas fa-cloud"></i>
                <div class="label">Clouds</div>
                <div class="value">${data.clouds.all}%</div>
            </div>
        </div>
    `;

    weatherContainer.innerHTML = weatherHTML;
    showWeather();
}

// Get weather icon based on weather condition
function getWeatherIcon(iconCode) {
    return weatherIcons[iconCode] || 'fas fa-cloud';
}

// Format time from timestamp
function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}

// Show/Hide functions
function showLoading() {
    loadingContainer.classList.add('show');
}

function hideLoading() {
    loadingContainer.classList.remove('show');
}

function showWeather() {
    weatherContainer.classList.add('show');
}

function hideWeather() {
    weatherContainer.classList.remove('show');
}

function showError(message) {
    errorContainer.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <p>${message}</p>
    `;
    errorContainer.classList.add('show');
}

function hideError() {
    errorContainer.classList.remove('show');
}

// Initialize app with default city (optional)
document.addEventListener('DOMContentLoaded', () => {
    // You can set a default city here if needed
    // cityInput.value = 'London';
    // getWeather();
});

// Add some helpful tips
console.log(`
🌤️ Weather App Tips:
1. This app now uses OpenWeatherMap API for better reliability
2. The API key should work with OpenWeatherMap
3. The app supports city names in any language
4. Try searching for cities like: London, New York, Tokyo, Paris, Sydney, Jabalpur
`); 