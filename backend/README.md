# Backend (ASP.NET Core) - Quick Setup

متطلبات:
- .NET 7 SDK أو أحدث
- SQL Server (SQL Server Express أو Docker image)
- EF Core tools (dotnet ef)

خطوات تشغيل محلياً:
1. افتح المجلد backend/
2. انسخ الملف appsettings.Development.example.json إلى appsettings.Development.json وحرّر connection string لربط SQL Server المحلي.

مثال connection string:

"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=TravelERP;Trusted_Connection=True;MultipleActiveResultSets=true"
}

3. ثبت الحزم وادخل الأوامر:

  dotnet restore
  dotnet tool install --global dotnet-ef
  dotnet ef migrations add InitialCreate
  dotnet ef database update

4. شغّل التطبيق:
  dotnet run --project TravelErp.Backend

ملاحظات:
- ملفات الإعدادات في repo هي أمثلة فقط. لا تربط أي بيانات حساسة هنا.
- ستجد ملف Migrations فارغ (placeholder) الآن؛ ستُضيف الجداول الأساسية في المراحل القادمة.
