# Quick Start Guide - Dhyanam Wellness Mobile App

## 🚀 Test Locally (Before Building for Stores)

### 1. Export & Setup
```bash
# Clone from GitHub (after exporting from Lovable)
git clone <your-repo-url>
cd <your-project>

# Install dependencies
npm install

# Build web app
npm run build
```

### 2. Add Mobile Platforms
```bash
# Add iOS (Mac only)
npx cap add ios

# Add Android (any OS)
npx cap add android

# Sync the build
npx cap sync
```

### 3. Run on Device/Emulator

**Android:**
```bash
npx cap run android
```
This opens Android Studio. Click the green play button to run on emulator or connected device.

**iOS (Mac only):**
```bash
npx cap open ios
```
This opens Xcode. Select a simulator or device, then click play (▶️).

---

## 📝 Quick Commands

| Task | Command |
|------|---------|
| Pull updates from Lovable | `git pull` |
| Install dependencies | `npm install` |
| Build web app | `npm run build` |
| Sync to native apps | `npx cap sync` |
| Open Android Studio | `npx cap open android` |
| Open Xcode | `npx cap open ios` |
| Run on Android | `npx cap run android` |

---

## 🔄 Update Workflow

Every time you make changes in Lovable:

1. **Export to GitHub** (in Lovable)
2. **Pull changes:** `git pull`
3. **Install deps:** `npm install`
4. **Build:** `npm run build`
5. **Sync:** `npx cap sync`
6. **Test:** Open Android Studio or Xcode and run

---

## 📱 Ready to Publish?

See **MOBILE_BUILD_GUIDE.md** for complete step-by-step instructions for:
- Building release versions
- Creating signing keys
- Submitting to Google Play Store
- Submitting to Apple App Store
- All required assets and configurations

---

## ⚡ Troubleshooting

**Build fails?**
- Make sure Node.js v18+ is installed
- Try: `rm -rf node_modules && npm install`
- Try: `npm run build` again

**Android Studio issues?**
- File → Invalidate Caches → Invalidate and Restart
- Update Android Studio to latest version

**Xcode issues?**
- Product → Clean Build Folder
- Restart Xcode

**Sync issues?**
- Delete `ios` and `android` folders
- Run `npx cap add ios` and `npx cap add android` again
- Run `npx cap sync`

---

## 🎯 Current App Details

- **App Name:** Dhyanam Wellness
- **Bundle ID (iOS):** com.dhyanam.wellness
- **Package Name (Android):** com.dhyanam.wellness
- **Platform:** iOS & Android
- **Tech Stack:** React + Vite + Capacitor

---

Need detailed publishing instructions? Open **MOBILE_BUILD_GUIDE.md**!
