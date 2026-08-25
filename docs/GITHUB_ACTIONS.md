# GitHub Actions

The repository includes a CI workflow (.github/workflows/ci.yml) that builds:
- Backend (ASP.NET Core) and publishes artifacts.
- Flutter Android debug APK (artifact: app-debug-apk).
- Flutter Windows debug build (artifact: flutter-windows-debug).

Artifacts are available from the Actions run page after each push to main (or manual dispatch).
