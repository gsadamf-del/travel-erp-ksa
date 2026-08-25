# Frontend (Flutter) - Quick Setup

متطلبات:
- Flutter SDK
- Android SDK / Android Studio (لتشغيل emulator أو بناء APK)
- (لتشغيل على Windows Desktop) Windows build enabled in Flutter

تشغيل محلي:

1. انتقل إلى المجلد frontend/
2. جلب الحزم:

  flutter pub get

3. تشغيل التطبيق (Android emulator):

  flutter run -d emulator-5554

أو تشغيل على Windows desktop:

  flutter run -d windows

بناء APK للإختبار:

  flutter build apk --debug

ملاحظات:
- التطبيق مُهيّأ لدعم لغتين (AR/EN) وRTL. ملفات الترجمة موجودة في lib/l10n/ (قالب).
- مزامنة أوفلاين مبنية على SQLite محلي + آلية Sync queue مع الـAPI.
