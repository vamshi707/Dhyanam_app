# Dhyanam Wellness Mobile App

🧘 Dhyanam Project

A modern and responsive web application built using React.
This project focuses on clean UI, user-friendly design, and smooth performance.

A wellness app featuring yoga instruction, diet planning, and lifestyle coaching, available as native iOS and Android applications.

## 🎯 Project Overview

This project is a mobile app built with:
- **React** + **TypeScript** for the UI
- **Vite** for fast development and building
- **Capacitor** for native iOS and Android functionality
- **Tailwind CSS** for styling

## 📱 Getting Started

### For Local Development (Web)
```bash
npm install
npm run dev
```

### For Mobile App Development

See **[QUICK_START.md](QUICK_START.md)** for testing on devices/emulators.

See **[MOBILE_BUILD_GUIDE.md](MOBILE_BUILD_GUIDE.md)** for complete publishing instructions.

## 📂 Project Structure

```
├── src/                   # React source code
├── public/               # Static assets
├── android/              # Android native project (created after npx cap add android)
├── ios/                  # iOS native project (created after npx cap add ios)
├── capacitor.config.ts   # Capacitor configuration
└── MOBILE_BUILD_GUIDE.md # Complete publishing guide
```

## 🚀 Quick Commands

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build           # Build for production
npx cap sync            # Sync to native platforms

# Mobile Development
npx cap add android     # Add Android platform
npx cap add ios         # Add iOS platform
npx cap open android    # Open in Android Studio
npx cap open ios        # Open in Xcode
```

## 📖 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Quick reference for testing locally
- **[MOBILE_BUILD_GUIDE.md](MOBILE_BUILD_GUIDE.md)** - Complete guide to publish to app stores

## 🏪 Publishing to App Stores

This app is ready to be published to:
- ✅ Google Play Store (Android)
- ✅ Apple App Store (iOS)

Follow the comprehensive guide in **MOBILE_BUILD_GUIDE.md** for step-by-step instructions.

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- Capacitor 6
- Tailwind CSS
- React Router

## 📄 License

See project settings for license information.


