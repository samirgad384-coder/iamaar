# IAMAAR Frontend Prototype

واجهة أولية احترافية متعددة الصفحات لتطبيق **إعمار** لإدارة مشاريع البناء والتشطيبات.

## المميزات المنفذة
- تصميم عربي RTL بخط **Cairo**.
- هوية بصرية احترافية (ألوان موحدة، بطاقات، ظلال ناعمة).
- أنيميشن راقي وخفيف (fade-up + floating).
- واجهات غير مزدحمة ومقسّمة على صفحات مستقلة لتسهيل التعديل.
- نظام تصميم مشترك عبر ملف CSS واحد وملف JS واحد.
- دعم المسارات بدون امتداد (`/dashboard` بدل `/dashboard.html`) لتفادي مشكلة Not Found على بعض بيئات النشر.

## الصفحات المتاحة
- `index.html`
- `signup.html`
- `activation.html`
- `onboarding.html`
- `login.html`
- `forgot.html`
- `dashboard.html`
- `projects.html`
- `new-project.html`
- `calculators.html`
- `quotes.html`
- `new-quote.html`
- `invoices.html`
- `pricing.html`
- `settings.html`
- `support.html`

## ملفات الأنماط والسكريبت
- `assets/css/style.css`
- `assets/js/app.js`

## تشغيل محلي
```bash
python3 -m http.server 8000
```
ثم افتح:
`http://localhost:8000/index.html`
