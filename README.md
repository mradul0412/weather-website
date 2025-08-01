# 🌤️ Weather App

A simple and beautiful web application that shows current weather for any city using OpenWeatherMap API.

![Weather App](https://img.shields.io/badge/Weather-App-blue?style=for-the-badge&logo=weather)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- 🔍 **City Search**: Type any city name to get weather information
- 🌡️ **Temperature**: Current temperature and feels like temperature
- 💧 **Humidity**: Percentage of moisture in the air
- 💨 **Wind Speed**: Air velocity in m/s
- 📊 **Pressure**: Atmospheric pressure
- 👁️ **Visibility**: Visibility distance in kilometers
- 🌅 **Sunrise/Sunset**: Sunrise and sunset times
- ☁️ **Clouds**: Percentage of cloud cover
- 📱 **Responsive Design**: Works well on mobile, tablet and desktop
- 🌍 **Multi-language Support**: Supports city names in any language
- ⚡ **Real-time Data**: Live data from OpenWeatherMap API

## 🚀 Quick Start

### Option 1: Use Online Demo
Visit the live demo: [Weather App Demo](https://your-username.github.io/weather-app)

### Option 2: Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Get API Key:**
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for free account
   - Get your API key from dashboard

3. **Add API Key:**
   - Open `script.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

4. **Run the app:**
   - Open `index.html` in your browser
   - Or use a local server

## 📁 Project Structure

```
weather-app/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Modern styling, gradients, animations
- **JavaScript (ES6+)**: API calls, DOM manipulation
- **OpenWeatherMap API**: Weather data
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 🎨 Design Features

- **Modern UI**: Glassmorphism design with blur effects
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: Fade-in effects and hover animations
- **Responsive Grid**: Flexible layout for all screen sizes
- **Weather Icons**: Dynamic icons based on weather conditions

## 📱 Responsive Design

- **Desktop**: Full layout with all weather details
- **Tablet**: Optimized grid layout
- **Mobile**: Stacked layout with touch-friendly buttons

## 🌐 API Information

- **Provider**: OpenWeatherMap
- **Endpoint**: Current Weather Data
- **Units**: Metric (Celsius)
- **Language**: English
- **Rate Limit**: 60 calls/minute (free tier)

## 🔧 Customization

### To change colors:
Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ff6b6b;
}
```

### To set default city:
Uncomment in `script.js`:

```javascript
cityInput.value = 'London';
getWeather();
```

## 🚀 Deploy to GitHub Pages

1. **Fork this repository**
2. **Add your API key** to `script.js`
3. **Go to Settings** → **Pages**
4. **Select Source**: Deploy from a branch
5. **Select Branch**: main
6. **Save** and wait for deployment

## 🐛 Troubleshooting

### Common Issues:

1. **API Key Error**: Make sure you've entered the correct API key
2. **City Not Found**: Enter the correct city name
3. **Network Error**: Check your internet connection
4. **Rate Limit**: Free tier allows 60 calls per minute

### Error Messages:
- City not found: Wrong city name
- API Error: API key or network issue
- Empty Input: No city name provided

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any issues, please create an issue or contact us.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography

---

**Made with ❤️ for weather enthusiasts**

⭐ **Star this repository if you found it helpful!** 