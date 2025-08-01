@echo off
echo 🚀 Google Cloud Platform Setup Script
echo =====================================

echo.
echo Step 1: Installing Google Cloud SDK...
echo Downloading Google Cloud SDK installer...

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe', '$env:TEMP\GoogleCloudSDKInstaller.exe')"

echo.
echo Step 2: Running installer...
echo Please follow the installation wizard...
start /wait %TEMP%\GoogleCloudSDKInstaller.exe

echo.
echo Step 3: Opening Google Cloud Console...
echo Please:
echo 1. Create a new project or select existing
echo 2. Enable App Engine API
echo 3. Note your project ID
start https://console.cloud.google.com

echo.
echo Step 4: After setup, run these commands:
echo gcloud auth login
echo gcloud config set project YOUR_PROJECT_ID
echo gcloud app deploy
echo.
echo 🌐 Your app will be available at:
echo https://YOUR_PROJECT_ID.uc.r.appspot.com
echo.
pause 