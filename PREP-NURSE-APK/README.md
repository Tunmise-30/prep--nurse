# Prep Nurse — Android APK

Installable Android app built from the Prep Nurse PWA (Next.js + Capacitor).

## File

**`PrepNurse-v1.0-debug.apk`**

| | |
|---|---|
| Package | `com.prepnurse.app` |
| App name | Prep Nurse |
| Version | 1.0 (versionCode 1) |
| Size | 3.87 MB (4,056,031 bytes) |
| SHA-256 | `1c50dfcccbced6350daef1063875897d403c446b7cf5f8ef7fd5c25df10d7bfc` |
| Min Android | 7.0 (API 24) |
| Target / compiled | Android 16 (API 36) |
| Signature | APK Signature Scheme v2, RSA-2048, Android Debug certificate |
| Launchable activity | `com.prepnurse.app.MainActivity` |
| Permissions | `INTERNET` only |

## Install on your phone

1. Copy the APK to your phone (cable, Drive, email, or download from this PC).
2. Open it with your file manager.
3. Android will ask you to allow installs from this source — tap **Settings → Allow**.
4. Tap **Install**.

Or over USB with a developer cable:

```powershell
$env:PATH += ";$env:USERPROFILE\android-sdk\platform-tools"
adb install -r "C:\Users\USER\Documents\PREP NURSE\PREP-NURSE-APK\PrepNurse-v1.0-debug.apk"
```

## How it works

The APK is a native Android shell (Capacitor) around the live Prep Nurse web app at
`https://ubiquitous-starlight-594033.netlify.app`.

- **All features work**: Learn (24 lessons), Practice (7 modes, 90 questions),
  Exam prep, Scenarios, Progress, Study plans, Search, Flashcards, Saved, and the
  Paystack test payment.
- **Needs internet** for the first load. The deployed service worker then caches the
  core pages so lessons and practice remain readable offline.
- Progress, bookmarks, notes, goals and plans are stored on-device in localStorage,
  exactly as on the web.
- The payment flow needs internet: the Paystack secret key is server-side and is never
  shipped inside the app.

## Rebuild

```powershell
powershell -ExecutionPolicy Bypass -File C:\Users\USER\Documents\PREP NURSE\build-apk.ps1
```

Add `-Clean` for a full clean rebuild.

## Note on signing

This is a **debug-signed** APK, which is what is appropriate for testing/distribution
to a device. For Play Store release you need a release keystore — if you have one,
place it outside the repo and add a `keystore.properties` file (excluded from git) so
the build can be re-signed for production.