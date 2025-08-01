# 🚀 Google Cloud Platform Deployment Guide

## Prerequisites
1. Google Cloud Account (Free tier available)
2. Google Cloud SDK installed
3. OpenWeatherMap API key

## Step 1: Install Google Cloud SDK

### Windows:
1. Download from: https://cloud.google.com/sdk/docs/install
2. Run installer and follow setup

### Or use PowerShell:
```powershell
# Install via PowerShell
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")
& $env:Temp\GoogleCloudSDKInstaller.exe
```

## Step 2: Initialize Google Cloud

```bash
# Login to Google Cloud
gcloud auth login

# Create new project (or use existing)
gcloud projects create weather-app-123456 --name="Weather App"

# Set project
gcloud config set project weather-app-123456

# Enable App Engine API
gcloud services enable appengine.googleapis.com
```

## Step 3: Deploy to App Engine

```bash
# Deploy the app
gcloud app deploy

# Open the deployed app
gcloud app browse
```

## Step 4: Get Your Public URL

Your app will be available at:
`https://weather-app-123456.uc.r.appspot.com`

## Step 5: Custom Domain (Optional)

1. Go to Google Cloud Console
2. App Engine → Settings → Custom Domains
3. Add your domain

## Cost Information
- **Free Tier**: 28 instance hours/day
- **Static files**: Free
- **Custom domain**: Free

## Files Created:
- ✅ `app.yaml` - App Engine configuration
- ✅ `requirements.txt` - Python dependencies (empty for static files)
- ✅ `deploy-gcp.md` - This guide

## Troubleshooting:
- Make sure Google Cloud SDK is installed
- Check if project is created and set
- Verify App Engine API is enabled 