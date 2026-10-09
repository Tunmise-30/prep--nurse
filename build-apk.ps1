# Prep Nurse - Android APK build script (Windows / PowerShell)
#
# Rebuilds the installable Android APK from scratch and drops it in
# PREP-NURSE-APK\ next to this script.
#
# Requirements (already installed user-local on this machine, no admin needed):
#   JDK 21      -> %USERPROFILE%\tools\jdk21
#   Android SDK -> %USERPROFILE%\android-sdk  (platform-36, build-tools 36.0.0)
#
# Usage:
#   powershell -ExecutionPolicy Bypass -File build-apk.ps1
#   powershell -ExecutionPolicy Bypass -File build-apk.ps1 -Clean

param(
    [switch]$Clean
)

$ErrorActionPreference = "Stop"

$repo     = Split-Path -Parent $MyInvocation.MyCommand.Path
$webDir   = Join-Path $repo "web"
$android  = Join-Path $webDir "android"
$jdk21    = Join-Path $env:USERPROFILE "tools\jdk21"
$sdk      = Join-Path $env:USERPROFILE "android-sdk"
$outDir   = Join-Path $repo "PREP-NURSE-APK"

Write-Host "=== Prep Nurse APK build ===" -ForegroundColor Cyan

# --- toolchain checks -------------------------------------------------------
if (-not (Test-Path $jdk21)) {
    throw "JDK 21 not found at $jdk21. Reinstall Temurin 21 (Adoptium) there, or edit this script."
}
if (-not (Test-Path (Join-Path $sdk "build-tools\36.0.0\apksigner.bat"))) {
    throw "Android SDK build-tools 36.0.0 not found at $sdk. Run sdkmanager to install platform-tools, platforms;android-36, build-tools;36.0.0."
}

$env:JAVA_HOME       = $jdk21
$env:ANDROID_HOME    = $sdk
$env:ANDROID_SDK_ROOT = $sdk
$env:PATH            = "$jdk21\bin;$sdk\platform-tools;$env:PATH"

$ErrorActionPreference = "Continue"
$javaVer = (& "$jdk21\bin\java.exe" -version 2>&1 | Out-String).Split("`n")[0].Trim()
$ErrorActionPreference = "Stop"
Write-Host "Java:    $javaVer"
Write-Host "SDK:     $sdk"

# --- sync web assets into the native project --------------------------------
Push-Location $webDir
try {
    Write-Host "Syncing web assets into Android project..." -ForegroundColor Cyan
    & cmd /c "npx cap sync android" | Out-Null
    if ($LASTEXITCODE -ne 0) { throw "npx cap sync android failed" }
} finally { Pop-Location }

# --- build ------------------------------------------------------------------
Push-Location $android
try {
    if ($Clean) {
        Write-Host "Cleaning previous build..." -ForegroundColor Yellow
        & cmd /c "gradlew.bat clean --no-daemon --console=plain" | Out-Null
    }

    Write-Host "Building debug APK..." -ForegroundColor Cyan
    & cmd /c "gradlew.bat assembleDebug --no-daemon --console=plain"
    if ($LASTEXITCODE -ne 0) { throw "Gradle build failed (exit $LASTEXITCODE)" }
} finally { Pop-Location }

$built = Join-Path $android "app\build\outputs\apk\debug\app-debug.apk"
if (-not (Test-Path $built)) { throw "APK not found at $built after build" }

# --- collect + verify -------------------------------------------------------
New-Item -ItemType Directory -Path $outDir -Force | Out-Null
$dest = Join-Path $outDir "PrepNurse-v1.0-debug.apk"
Copy-Item $built $dest -Force

$env:JAVA_HOME = $jdk21
Write-Host ""
Write-Host "=== APK ready ===" -ForegroundColor Green
Write-Host "Path:   $dest"
Write-Host ("Size:   " + [math]::Round((Get-Item $dest).Length / 1MB, 2) + " MB")
Write-Host ("SHA256: " + (Get-FileHash $dest -Algorithm SHA256).Hash.ToLower())

Write-Host ""
Write-Host "Signature:" -ForegroundColor Cyan
& cmd /c "`"$sdk\build-tools\36.0.0\apksigner.bat`" verify `"$dest`""
Write-Host ""
Write-Host "Install with: adb install -r `"$dest`"" -ForegroundColor Cyan