# Dhyanam Wellness Mobile App - Complete Build & Publishing Guide

## 🚀 Overview
This guide will walk you through building and publishing your Dhyanam Wellness app to both Google Play Store and Apple App Store.

---

## 📋 Prerequisites

### For Both Platforms:
- Node.js (v18 or higher) installed
- Git installed
- A GitHub account (to export your code from Lovable)

### For Android (Google Play Store):
- **Android Studio** (latest version)
- **Java Development Kit (JDK)** 11 or higher
- A **Google Play Console Developer Account** ($25 one-time fee)
- Windows, Mac, or Linux computer

### For iOS (Apple App Store):
- **macOS** computer (required by Apple)
- **Xcode** (latest version from Mac App Store)
- **Apple Developer Account** ($99/year)
- Valid Apple ID

---

## 🔧 Part 1: Initial Setup (One-Time)

### Step 1: Export Your Project from Lovable

1. In Lovable, click the **GitHub icon** in the top right
2. Click **"Export to GitHub"**
3. Follow the prompts to connect your GitHub account
4. Your project will be pushed to a new GitHub repository

### Step 2: Clone the Project to Your Computer

```bash
# Clone the repository (replace with your actual GitHub URL)
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Navigate into the project directory
cd YOUR_REPO_NAME

# Install dependencies
npm install
```

### Step 3: Build the Web App

```bash
# Build the production version
npm run build
```

This creates a `dist` folder with your compiled app.

### Step 4: Add iOS and Android Platforms

```bash
# Add iOS platform (Mac only)
npx cap add ios

# Add Android platform (Windows, Mac, or Linux)
npx cap add android

# Sync the built web app to native projects
npx cap sync
```

---

## 📱 Part 2: Building for Android

### Step 1: Open Android Studio

```bash
# Open the Android project in Android Studio
npx cap open android
```

Wait for Android Studio to finish indexing and syncing Gradle.

### Step 2: Configure App Details

1. In Android Studio, open `android/app/build.gradle`
2. Update these values:

```gradle
android {
    namespace "com.dhyanam.wellness"
    compileSdk 34
    
    defaultConfig {
        applicationId "com.dhyanam.wellness"
        minSdk 22
        targetSdk 34
        versionCode 1         // Increment this for each update
        versionName "1.0.0"   // Your app version
    }
}
```

### Step 3: Add App Icon and Splash Screen

1. **App Icon:**
   - Create a 1024x1024px PNG icon
   - Use [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/) to generate all sizes
   - Place generated files in `android/app/src/main/res/` folders

2. **Splash Screen:**
   - Edit `android/app/src/main/res/values/styles.xml`
   - Customize the splash screen colors

### Step 4: Generate a Signing Key (For Release)

```bash
# In your project root, run:
keytool -genkey -v -keystore dhyanam-release.keystore -alias dhyanam -keyalg RSA -keysize 2048 -validity 10000

# You'll be asked for:
# - Keystore password (remember this!)
# - Key password (remember this!)
# - Your name, organization, etc.
```

**IMPORTANT:** Save this keystore file and passwords securely. You need them for all future updates!

### Step 5: Configure Signing in Android Studio

1. Create `android/key.properties` file:

```properties
storePassword=YOUR_KEYSTORE_PASSWORD
keyPassword=YOUR_KEY_PASSWORD
keyAlias=dhyanam
storeFile=../dhyanam-release.keystore
```

2. Update `android/app/build.gradle`:

```gradle
// Add before the android block
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    // ... existing config ...
    
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }
    
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

### Step 6: Build Release APK/AAB

In Android Studio:

1. Go to **Build** → **Generate Signed Bundle / APK**
2. Select **Android App Bundle (AAB)** (recommended for Play Store)
3. Select your keystore file and enter passwords
4. Choose **release** build variant
5. Click **Finish**

The AAB file will be in: `android/app/release/app-release.aab`

---

## 🍎 Part 3: Building for iOS

### Step 1: Open Xcode

```bash
# Open the iOS project in Xcode (Mac only)
npx cap open ios
```

### Step 2: Configure App Details

1. In Xcode, select **App** target
2. Go to **General** tab:
   - **Display Name:** Dhyanam Wellness
   - **Bundle Identifier:** com.dhyanam.wellness
   - **Version:** 1.0.0
   - **Build:** 1 (increment for each submission)

### Step 3: Configure Signing & Capabilities

1. Go to **Signing & Capabilities** tab
2. Check **Automatically manage signing**
3. Select your **Team** (your Apple Developer account)
4. Xcode will create provisioning profiles automatically

### Step 4: Add App Icon

1. Create a 1024x1024px PNG app icon
2. In Xcode, go to **Assets.xcassets**
3. Click **AppIcon**
4. Drag your icon to the **App Store iOS 1024pt** slot
5. Xcode will generate all required sizes

### Step 5: Configure App Privacy Settings

Edit `ios/App/App/Info.plist` to add privacy descriptions:

```xml
<key>NSCameraUsageDescription</key>
<string>We need camera access to capture photos for your wellness journey.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>We need photo library access to let you choose images.</string>
```

### Step 6: Build for Release

1. In Xcode, select **Any iOS Device (arm64)** as target
2. Go to **Product** → **Archive**
3. Wait for the archive to complete
4. In the Organizer window, click **Distribute App**
5. Select **App Store Connect**
6. Follow the wizard to upload to App Store Connect

---

## 🏪 Part 4: Publishing to Google Play Store

### Step 1: Create Google Play Console Account

1. Go to [Google Play Console](https://play.google.com/console)
2. Pay the $25 one-time registration fee
3. Complete your account profile

### Step 2: Create a New App

1. Click **Create app**
2. Fill in:
   - **App name:** Dhyanam Wellness
   - **Default language:** English (US)
   - **App or game:** App
   - **Free or paid:** Free (or Paid)
3. Accept declarations and click **Create app**

### Step 3: Complete Store Listing

Fill in all required information:

1. **App details:**
   - Short description (80 characters)
   - Full description (4000 characters)
   - App icon (512x512px PNG)
   - Feature graphic (1024x500px)
   - Screenshots (at least 2, ideally 4-8)

2. **Categorization:**
   - App category: Health & Fitness
   - Tags: wellness, yoga, diet, lifestyle

3. **Contact details:**
   - Email
   - Phone (optional)
   - Website (your Lovable published URL)
   - Privacy policy URL (required!)

### Step 4: Set Up Privacy Policy

You need a privacy policy URL. Simple options:

- Use [Privacy Policy Generator](https://app-privacy-policy-generator.firebaseapp.com/)
- Host it on your website
- Use [GitHub Pages](https://pages.github.com/) for free hosting

### Step 5: Content Rating

1. Go to **Content rating**
2. Fill out the questionnaire honestly
3. Submit for rating

### Step 6: Target Audience & Content

1. Set **Target age:** Adults (or appropriate age)
2. Complete **App content** sections:
   - Data safety
   - Government apps
   - Financial features (if any)
   - etc.

### Step 7: Upload Your AAB

1. Go to **Production** → **Create new release**
2. Upload your `app-release.aab` file
3. Add release notes (e.g., "Initial release of Dhyanam Wellness app")
4. Click **Review release**

### Step 8: Submit for Review

1. Review all sections (all must have green checkmarks)
2. Click **Send X countries for review**
3. Google will review your app (usually 1-7 days)

---

## 📱 Part 5: Publishing to Apple App Store

### Step 1: Create Apple Developer Account

1. Go to [Apple Developer](https://developer.apple.com/)
2. Enroll in the Apple Developer Program ($99/year)
3. Complete verification (may take 1-2 days)

### Step 2: Register Your App in App Store Connect

1. Go to [App Store Connect](https://appstoreconnect.apple.com/)
2. Click **My Apps** → **+** → **New App**
3. Fill in:
   - **Platform:** iOS
   - **Name:** Dhyanam Wellness
   - **Primary Language:** English (U.S.)
   - **Bundle ID:** com.dhyanam.wellness (select from dropdown)
   - **SKU:** dhyanam-wellness (unique identifier for your records)

### Step 3: Complete App Information

1. **App Information:**
   - Category: Health & Fitness
   - Subcategory (optional): Wellness
   - Content rights: Check if you own all rights

2. **Pricing and Availability:**
   - Price: Free (or select price tier)
   - Availability: All territories or select specific countries

### Step 4: Prepare App Store Listing

1. **Version Information:**
   - Screenshots (required):
     - iPhone 6.7" (1290x2796px): 3-10 screenshots
     - iPhone 6.5" (1242x2688px): 3-10 screenshots
     - iPad Pro 12.9" (2048x2732px): 3-10 screenshots
   - Use [App Screenshot Generator](https://theapplaunchpad.com/) or take real device screenshots

2. **Description:**
   - Promotional text (170 characters)
   - Description (4000 characters)
   - Keywords (100 characters, comma-separated)
   - Support URL
   - Marketing URL (optional)

3. **App Icon:**
   - 1024x1024px PNG (no transparency, no rounded corners)

### Step 5: App Privacy

1. Click **App Privacy**
2. Answer questions about data collection:
   - Do you collect data? (Yes/No)
   - If yes, specify what data and how it's used
   - Specify if data is linked to user identity
   - Specify if data is used for tracking

### Step 6: Content Rights and Age Rating

1. Fill out the **Age Rating Questionnaire**
2. Answer honestly about content in your app
3. Apple will assign an age rating

### Step 7: Upload Your Build

Your build was already uploaded when you archived in Xcode. Now:

1. Go to **App Store** → **iOS App** → **Version**
2. Under **Build**, click **+**
3. Select your uploaded build
4. Add **What's New in This Version** (release notes)

### Step 8: Submit for Review

1. Complete all required sections (must have blue checkmarks)
2. Fill out **App Review Information:**
   - Contact information
   - Demo account (if login required)
   - Notes for reviewer
3. Click **Add for Review**
4. Click **Submit to App Review**
5. Apple reviews apps in 1-3 days typically

---

## 🔄 Part 6: Updating Your App

When you make changes in Lovable and want to update your mobile apps:

### Step 1: Pull Latest Changes

```bash
# Pull latest from GitHub
git pull origin main

# Install any new dependencies
npm install

# Build the updated web app
npm run build

# Sync to native platforms
npx cap sync
```

### Step 2: Increment Version Numbers

**Android** (`android/app/build.gradle`):
```gradle
versionCode 2        // Increment by 1
versionName "1.1.0"  // Update version
```

**iOS** (in Xcode):
- Version: 1.1.0 (semantic versioning)
- Build: 2 (increment by 1)

### Step 3: Rebuild and Resubmit

Follow the same build processes as before and submit to both stores.

---

## 🎨 Customization Tips

### Splash Screen

**Android:**
- Edit `android/app/src/main/res/values/styles.xml`
- Modify `<item name="android:background">@color/splashBackground</item>`

**iOS:**
- Edit `ios/App/App/Assets.xcassets/Splash.imageset`
- Add your custom splash image

### App Name Changes

**Android:**
- Edit `android/app/src/main/res/values/strings.xml`

**iOS:**
- In Xcode, change **Display Name** under General tab

### Change App Colors

1. Update your design system in `src/index.css`
2. Rebuild with `npm run build`
3. Sync with `npx cap sync`

---

## 📊 Testing Before Release

### Android Testing:

```bash
# Install on connected Android device/emulator
npx cap run android

# Or create a debug APK
cd android
./gradlew assembleDebug
# APK will be in android/app/build/outputs/apk/debug/
```

### iOS Testing:

1. In Xcode, select a simulator or connected device
2. Click the **Play** button (or press Cmd+R)
3. Test all features thoroughly

### Beta Testing:

**Android:**
- Use Google Play Console's **Internal Testing** or **Closed Testing** tracks
- Invite testers via email

**iOS:**
- Use **TestFlight** (built into App Store Connect)
- Add internal or external testers
- Share invite link or code

---

## ⚠️ Common Issues & Solutions

### Issue: "Gradle build failed"
**Solution:** 
- Update Android Gradle Plugin in `android/build.gradle`
- Sync project in Android Studio
- Clean and rebuild

### Issue: "No provisioning profiles found" (iOS)
**Solution:**
- Make sure you're signed in to Xcode with your Apple ID
- Enable "Automatically manage signing"
- Your account must be part of Apple Developer Program

### Issue: App rejected due to privacy policy
**Solution:**
- Ensure privacy policy URL is accessible
- Privacy policy must cover all data collection in your app
- Update in both Play Console and App Store Connect

### Issue: Keystore file lost (Android)
**Solution:**
- Unfortunately, you cannot update your app without the original keystore
- You'll need to create a new app listing with a new package name
- **Always backup your keystore file!**

---

## 📱 Required App Store Assets Checklist

### Google Play Store:
- [ ] 512x512px app icon (PNG)
- [ ] 1024x500px feature graphic
- [ ] 2-8 phone screenshots (1080x1920px or 1080x2340px)
- [ ] Privacy policy URL
- [ ] Short description (80 chars max)
- [ ] Full description (4000 chars max)
- [ ] Content rating completed

### Apple App Store:
- [ ] 1024x1024px app icon (PNG, no transparency)
- [ ] 3-10 iPhone screenshots (6.7" and 6.5" required)
- [ ] 3-10 iPad screenshots (12.9" recommended)
- [ ] Description (4000 chars max)
- [ ] Keywords (100 chars, comma-separated)
- [ ] Privacy policy URL
- [ ] Support URL
- [ ] Age rating completed

---

## 🎉 After Approval

Once your apps are live:

1. **Monitor Reviews:** Respond to user feedback promptly
2. **Track Analytics:** Use Google Play Console and App Store Connect analytics
3. **Plan Updates:** Regular updates keep users engaged
4. **Market Your App:** Share on social media, your website, etc.
5. **Consider ASO:** App Store Optimization to improve discoverability

---

## 🔗 Useful Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [App Store Connect Help](https://developer.apple.com/help/app-store-connect/)
- [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)
- [App Icon Generator](https://appicon.co/)
- [Screenshot Creator](https://screenshots.pro/)

---

## 💬 Need Help?

If you encounter issues:

1. Check the official Capacitor docs
2. Search Stack Overflow
3. Ask in Lovable Discord community
4. Contact Lovable support through the app

---

**Good luck with your app launch! 🚀**

Remember: App store approval can take 1-7 days for Android and 1-3 days for iOS. Plan your launch accordingly!
