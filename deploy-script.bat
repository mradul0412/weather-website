@echo off
echo 🌤️ Weather App Deployment Script
echo ================================

echo.
echo Step 1: Checking Git status...
git status

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Committing changes...
git commit -m "Update weather app for deployment"

echo.
echo Step 4: Pushing to GitHub...
git push origin main

echo.
echo ✅ Deployment completed!
echo.
echo 🌐 Your app will be available at:
echo https://mradul0412.github.io/weather-website/
echo.
echo 📝 Don't forget to enable GitHub Pages in repository settings!
echo.
pause 