# IAMAAR — إعمار

منصة SaaS متكاملة لإدارة مشاريع البناء والتشطيبات موجّهة للمقاولين والمهندسين وشركات المقاولات في مصر والسوق العربي، وتعمل على الويب والموبايل.

## 1) الرؤية العامة
- **الفكرة:** جمع دورة حياة المشروع الإنشائي كاملة في نظام واحد: من التسويق، للتسجيل، للحاسبات، لعروض الأسعار، للفواتير، والتحصيل، والاشتراكات.
- **الفئة المستهدفة:**
  - المقاول الفردي
  - مهندس التشطيبات
  - شركات المقاولات الصغيرة والمتوسطة
  - أصحاب الأراضي والمطورون
- **القيمة:** تقليل الهدر، تسريع التسعير، رفع دقة الحسابات، وضبط التدفقات المالية.

---

## 2) نطاق التطبيق (Modules)

### A. Marketing Layer
#### `index.html`
- Hero مع عنوان ووصف وإحصائيات حية.
- CTA رئيسي: **ابدأ مجاناً** + زر ثانوي: **تسجيل الدخول**.
- Features Section (8+ مزايا) مع badges: جديد / مجاني / قريباً.
- Pricing Section: Free / Pro / Business مع مقارنة واضحة وخيارات شهري/سنوي.
- Testimonials + FAQ (Accordion) + Trust Badges.
- Footer: روابط قانونية + قنوات التواصل (واتساب/تليجرام/فيسبوك).

### B. Auth System
#### `signup.html` (3 خطوات)
1. **بيانات الحساب:** الاسم، الإيميل، الهاتف، كلمة السر (strength meter)، الموافقة على الشروط.
2. **التخصص:** مقاول / مهندس / مساح / صنايعي / مالك أرض / شركة + سنوات الخبرة.
3. **بيانات الشركة:** اسم الشركة، المدينة، حجم الشركة، مصدر التعرف على المنصة.

#### `activation.html`
- OTP (6 أرقام) عبر الإيميل أو الموبايل.
- إعادة إرسال بكاونت داون 60 ثانية.
- بعد النجاح ➜ `onboarding.html`.

#### صفحات إضافية
- `login.html`: تسجيل بالإيميل أو الهاتف + كلمة السر + تذكرني + نسيت كلمة السر.
- `forgot.html`: استعادة كلمة المرور عبر OTP.
- `onboarding.html`: 3 شاشات ترحيبية تعريفية.

### C. Dashboard
#### `dashboard.html`
- Header (الشعار، اسم/صورة المستخدم، إشعارات، إعدادات).
- Welcome Banner ذكي.
- 4 بطاقات إحصائية (مشاريع نشطة، عروض مرسلة، فواتير معلقة، إيرادات شهرية).
- Quick Actions: مشروع جديد / عرض سعر / فاتورة / حاسبة سريعة.
- آخر المشاريع وآخر الفواتير.
- Bottom Navigation للموبايل.

### D. Projects
- `projects.html`: فلترة + بحث + بطاقات مشاريع مع progress وحالة وقيمة.
- `project-details.html`: بيانات كاملة + Tasks + Materials + Invoices + Documents + Activity Log + Comments.
- `new-project.html`: إدخال المشروع والعميل والتواريخ والقيمة وطريقة الدفع.

### E. Engineering Calculators
#### `calculators.html`
حزم حاسبات تشطيبات + هيكل + كهرباء/سباكة + مالية.

أمثلة الحاسبات:
- الرخام، البلاط، الدهانات، الجبس، الباركيه.
- الخرسانة، حديد التسليح، الطوب، الملاط.
- الكابلات الكهربائية، مواسير السباكة.
- تكلفة المشروع، سعر المتر المربع.

**خصائص كل حاسبة:**
- حساب فوري بدون زر.
- نتائج مفصلة (كمية + وحدة + هدر مقترح).
- سعر تقديري قابل للتعديل.
- أزرار: أضف لعرض الأسعار / احفظ الحساب / شارك النتيجة.

### F. Quotations
- `quotes.html`: فلترة حالات + بحث + فلترة تاريخ.
- `new-quote.html`: جدول بنود ديناميكي + خصم + ضريبة + صافي + ملاحظات.
- دعم استيراد بنود من نتائج الحاسبات.
- PDF Preview + توليد PDF + إرسال واتساب/إيميل.

### G. Invoices
- `invoices.html`: حالات الفواتير + إجماليات (محصّل/متبقي/متأخر).
- `new-invoice.html`: بنود + تواريخ + شروط دفع + دفعة أولى.
- متابعة الدفعات الجزئية/الكاملة + تذكيرات واتساب/إيميل.

### H. Debt Tracker
- `debts.html`: ديون لك وديون عليك + دفعات جزئية + صافي الديون + تذكيرات الاستحقاق.

### I. Materials & Suppliers
- `materials.html`: قاعدة مواد + أسعار + مورد + بحث/تصفية.
- `suppliers.html`: بيانات المورد + سجل المشتريات + التقييم.

### J. Workers
- `workers.html`: بيانات العمال، الأجور، المشاريع، الحضور، المستحقات.

### K. Subscription & Payment
- `pricing.html` / `subscription.html`.
- باقات:
  - **FREE**: 3 مشاريع + حدود شهرية لعروض الأسعار والفواتير.
  - **PRO**: لا محدود + كل الحاسبات + واتساب + PDF مخصص.
  - **BUSINESS**: خصائص PRO + 5 مستخدمين + تقارير متقدمة + API + دعم 24/7.
- طرق الدفع: Visa/Mastercard، فوري، المحافظ الإلكترونية، InstaPay، تحويل بنكي.
- Checkout كامل + تفعيل فوري + فاتورة ضريبية + إدارة ترقية/تخفيض/إلغاء.

### L. Notifications
- أنواع: فاتورة متأخرة، قرب التسليم، دفعة مستلمة، قبول عرض، انتهاء اشتراك، إلخ.
- قنوات: In-app + Email + WhatsApp (للمدفوع).

### M. Reports
- `reports.html`: إيرادات، أفضل العملاء، أفضل أنواع المشاريع، نسب قبول العروض، ديون، رسم 12 شهر.
- تصدير PDF/Excel.

### N. Settings
- `settings.html`: بيانات الشركة، الحساب الشخصي، الإشعارات، الاشتراك، المظهر، تصدير/حذف البيانات.

### O. Support
- `support.html`: مركز مساعدة، تذاكر دعم، واتساب، تليجرام، فيديوهات تعليمية.

---

## 3) Backend Architecture
- **Stack:** PHP + MySQL.

### API Endpoints
- `/api/auth/`
  - `register.php` (POST)
  - `login.php` (POST)
  - `logout.php` (POST)
  - `activate.php` (POST)
  - `resend-otp.php` (POST)
  - `reset-password.php` (POST)

- `/api/projects/`
  - `list.php` (GET)
  - `create.php` (POST)
  - `update.php` (PUT)
  - `delete.php` (DELETE)

- `/api/quotes/`
  - `list.php` (GET)
  - `create.php` (POST)
  - `update.php` (PUT)
  - `delete.php` (DELETE)
  - `pdf.php` (GET)

- `/api/invoices/`
  - `list.php` (GET)
  - `create.php` (POST)
  - `pay.php` (POST)
  - `pdf.php` (GET)

- `/api/calculators/`
  - `calculate.php` (POST)

- `/api/subscription/`
  - `plans.php` (GET)
  - `checkout.php` (POST)
  - `webhook.php` (POST)
  - `cancel.php` (POST)

- `/api/notifications/`
  - `list.php` (GET)
  - `mark-read.php` (POST)

### قاعدة البيانات (Tables)
`users`, `companies`, `projects`, `tasks`, `quotes`, `quote_items`, `invoices`, `invoice_items`, `payments`, `debts`, `materials`, `suppliers`, `workers`, `attendance`, `subscriptions`, `transactions`, `notifications`, `otp_codes`, `activity_logs`.

---

## 4) LocalStorage Contract
- `iamaar_logged_in = "1"`
- `iamaar_user_id = "123"`
- `iamaar_user_name = "أحمد محمد"`
- `iamaar_user_email = "ahmed@mail.com"`
- `iamaar_subscription = "pro" | "free" | "business"`
- `iamaar_company_name = "شركة النيل"`
- `iamaar_onboarded = "1"`
- `iamaar_theme = "dark" | "light"`
- `iamaar_token = "JWT_TOKEN"`

---

## 5) رحلة المستخدم (User Journey)
1. يرى إعلان ➜ يفتح `index.html`.
2. يضغط **ابدأ مجاناً** ➜ `signup.html`.
3. يكمل التسجيل ➜ `activation.html`.
4. يمر على `onboarding.html`.
5. يدخل `dashboard.html`.
6. يستخدم الحاسبات ➜ ينشئ عرض سعر ➜ يرسل PDF.
7. موافقة العميل ➜ تحويله إلى فاتورة.
8. متابعة التحصيل والديون.
9. ترقية بعد 14 يوم إلى PRO.

---

## 6) ملاحظات تنفيذية مقترحة
- اعتماد تصميم RTL افتراضياً مع دعم التحويل إلى EN.
- Mobile-first مع Bottom Navigation في الشاشات التشغيلية.
- نظام صلاحيات مبسط مبدئياً ثم RBAC متقدم لاحقاً.
- تتبع الأحداث التحليلية لكل خطوة تحويل (Landing ➜ Signup ➜ Activation ➜ First Quote).
