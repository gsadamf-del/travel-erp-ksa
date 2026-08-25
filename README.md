# Travel & Services ERP (MVP Scaffold)

مستودع سكافولد نظام ERP للمكاتب السياحية ومكاتب التعقيب في السعودية.

محتويات هذا المستودع:
- backend/ : مشروع ASP.NET Core (مبدئي) مع إرشادات إعداد SQL Server وmigrations.
- frontend/ : مشروع Flutter (واجهة موحّدة لـ Android / iOS / Windows) مع تعليمات البناء.
- erd/ : وصف ERD مبدئي لكائنات النظام.
- data/ : ملفات Excel/CSV جاهزة للاستيراد (شجرة الحسابات COA، قوالب عملاء وحجوزات) — بيانات Demo معقّمة.

تعليمات سريعة (Quick Start)

1. استنساخ المستودع:

  git clone https://github.com/gsadamf-del/travel-erp-ksa.git

2. Backend (.NET / SQL Server)
  - مطلوب: .NET 7+ SDK, SQL Server (أو SQL Server Express / Docker).
  - افتح المجلد backend/ واتبع backend/README.md لتشغيل المigrations.

3. Frontend (Flutter)
  - مطلوب: Flutter SDK وبيئة تشغيل (Android SDK أو Windows desktop).
  - افتح المجلد frontend/ واتبع frontend/README.md لبناء وتشغيل التطبيق.

ملاحظات أمنيّة
- لا يحتوي هذا المستودع على أي بيانات حساسة أو مفاتيح. قم بإعداد appsettings محليًا (انظر backend/appsettings.Development.example.json).
- ملفات keystore والتواقيع يجب أن تبقى خارجة عن المستودع وتمر عبر قنوات آمنة.

هذا الإصدار هو سكافولد MVP — ستُضاف الميزات تدريجيًا (المحاسبة، الفواتير الإلكترونية، المزامنة أوفلاين، تقارير ZATCA، إلخ).
