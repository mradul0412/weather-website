# 🚀 GitHub Deployment Guide

## Quick Setup for GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name: `weather-app`
4. Make it Public
5. Click "Create repository"

### Step 2: Push to GitHub
Run these commands in your terminal:

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/weather-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "Pages"
4. Source: "Deploy from a branch"
5. Branch: "main"
6. Folder: "/ (root)"
7. Click "Save"

### Step 4: Get Your Live URL
Your app will be available at:
`https://YOUR_USERNAME.github.io/weather-app/`

## Important Notes:
- Replace `YOUR_USERNAME` with your actual GitHub username
- The API key in `script.js` is set to placeholder - users need to add their own
- GitHub Pages will host your app for free!

## Files Included:
- ✅ `index.html` - Main app
- ✅ `styles.css` - Beautiful styling
- ✅ `script.js` - Weather functionality
- ✅ `README.md` - Documentation
- ✅ `.gitignore` - Security (excludes API keys) 