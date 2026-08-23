# معماری قالب سمعک‌یار — مرجع کاری

مرجع استخراج‌شده از قالب `samakyar` نسخهٔ **۰.۳۵.۳**.
هدف: هر صفحهٔ جدیدی که ساخته می‌شود با همین قواعد ساخته شود.

هر عدد این سند با اجرای دستور روی خودِ کد سنجیده شده، نه تخمین.
روش سنجش کنار هر عدد آمده تا قابل بازتولید باشد.

---

## ۱ · آمار قالب

| مورد | تعداد | روش سنجش |
|---|---|---|
| کل فایل | ۲۹۵ | `find . -type f \| wc -l` |
| فایل PHP | ۲۰۶ | `find . -name '*.php' \| wc -l` |
| ماژول در `inc/` | ۳۲ PHP (۳۴ فایل با دو JSON) | `find inc -name '*.php' \| wc -l` |
| بخش در `parts/` | ۱۳۶ | `find parts -name '*.php' \| wc -l` |
| فایل CSS | ۳۳ | `find assets/css -name '*.css' \| wc -l` |
| گروه ACF | ۴۴ | `ls acf-json/*.json \| wc -l` |
| نام فیلد ACF | ۴۵۲ | برگ‌ها، با حذف `tab`/`message`/`accordion` |
| پست‌تایپ | **۷** | ۶ در `class-sy-cpt.php` + `sy_appt` در `class-sy-booking.php` |
| تاکسونومی | ۵ | `service_cat`, `age_group`, `age_bracket`, `team_role`, `faq_cat` |
| آیکون نام‌دار | ۵۱ | `inc/icon-set.php` — انتخاب‌شدنی از پیشخوان |
| آیکون هش‌نام | ۳۴۱ | `inc/icons-design.php` — تولیدشده از طرح، هاردکد |

> **هشدار:** پست‌تایپ می‌تواند بیرون از `class-sy-cpt.php` ثبت شود.
> `sy_appt` (نوبت‌ها) را `SY_Booking::init()` ثبت می‌کند. برای شمارش کامل
> همیشه `grep -rn "register_post_type(" --include=*.php .` بزنید.

**مخاطب و سه عددی که از آن می‌آید** (از داک‌بلاک `style.css`):
سالمندان و خانواده‌هایشان → کف اندازهٔ متن **۱۴px**، هدف لمسی **۴۸px**،
کنتراست دست‌کم **۴٫۵:۱**. خوانایی بر ظرافت مقدم است.

**منشأ:** همهٔ صفحه‌ها از فایل‌های طرح `.dc.html` پورت شده‌اند
(`tools/install-port.py`, `wire-links.py` — در بستهٔ قالب نیستند).
`assets/js/sy-engine.js` معادل رانتایمیِ `sc-if`/`sc-for` طرح است:
`data-sy-if`, `data-sy-for`, `data-sy-text`, `data-sy-style`, `data-sy-on`.

---

## ۲ · هشت قاعده

### ۱ · یک بخش = یک فایل + یک گروه ACF + یک سطر در `order.php`

```php
// single-service.php — کل تمپلیت همین است
$sy_layout = sy_service_layout();          // رادیوی ACF: technical|diagnostic|therapeutic
get_header();
foreach ( require __DIR__ . "/parts/service/{$sy_layout}/order.php" as $sy_section ) {
    get_template_part( "parts/service/{$sy_layout}/{$sy_section}" );
}
get_footer();
```

هیچ تمپلیتی مارک‌آپ درون خودش ندارد. `order.php` تنها منبع ترتیب است و
سربرگ «تولیدشده، دستی ویرایش نشود» دارد.

صفحهٔ اصلی همین الگو است با دو اضافه: کلید `sy_show_{section}` برای
خاموش‌کردن هر بخش از پیشخوان، و فیلتر `sy_home_sections` برای تغییر
ترتیب بدون ویرایش فایل.

```php
// front-page.php — چرا get_field خام و نه sy_field:
// کلیدِ خاموش false برمی‌گرداند و sy_field آن را «خالی» می‌گیرد و
// پیش‌فرضِ روشن می‌دهد — یعنی کلید هیچ‌وقت اثر نمی‌کرد.
$sy_flag = get_field( 'sy_show_' . str_replace( '-', '_', $sy_section ) );
if ( null !== $sy_flag && ! $sy_flag ) { continue; }
```

### ۲ · بخشِ بی‌داده چاپ نمی‌شود — نه کادر خالی

```php
sy_has( 'service_hero_lead' )        // فیلد این نوشته داده دارد؟
sy_gate( 'sy_opt:phone_display' )    // گزینهٔ سراسری پر است؟
sy_gate( 'sy_cpt:testimonial' )      // دست‌کم یک نوشته از آن نوع هست؟
```

هر `part` با دروازهٔ خودش شروع می‌شود (`if ( have_rows(...) )` یا
`if ( $sy_faqs )`). نکتهٔ ظریف مستندشده در `parts/team-member/faq.php`:
**دروازه روی فهرستِ پس از فیلتر است، نه قبلش** — اگر همهٔ ردیف‌ها فیلتر
شوند، خودِ سکشن هم می‌رود.

### ۳ · آبشار سه‌طبقه برای متن

```php
sy_label( $field, $option, $default )  // فیلد این نوشته ← تنظیم سراسری ← پیش‌فرض
sy_cta_text( 'title' )                 // service_cta_title ← cta_title
```

دلیل مستند: «سؤالات متداول» در هجده گروه فیلد تکرار شده بود — هجده جا
برای تایپ یک عبارت و هجده جا برای عوض‌کردنش.

### ۴ · آبشار چندطبقه برای رابطه

| تابع | زنجیره |
|---|---|
| `sy_faqs_for()` | انتخاب دستی ← معکوسِ `faq_about` ← هم‌ترمِ `faq_cat` ← برچسبِ نوعِ صفحه |
| `sy_team_for()` | انتخاب دستی ← معکوسِ `team_member_specialties` ← همه |
| `sy_services_for()` | انتخاب دستی ← تخصص‌های خودش ← `sy_siblings(service_cat, age_group)` |
| `sy_tests_for()` | انتخاب دستی ← `sy_siblings(age_group, service_cat)` |
| `sy_testimonials_for()` | انتخاب دستی ← معکوسِ `testimonial_about` ← تازه‌ترین‌ها |
| `sy_articles_for()` | انتخاب دستی ← معکوسِ `post_author_member` |

**ادمین می‌تواند هیچ‌چیز انتخاب نکند و صفحه باز هم پر باشد.**
رابطهٔ دستی فقط override است، نه شرط لازم.

### ۵ · دروازهٔ تعهد (بند ۱۴ سند تحویل)

تب «تعهدها» در تنظیمات چهار فیلد دارد: `warranty`, `installments`,
`insurers`, `trial`. هر سؤال متداول و هر ردیف ریپیتر می‌تواند فیلد
`requires` بگیرد که به یکی از این‌ها اشاره کند.

```php
if ( '' !== $requires && '' === sy_opt_text( $requires ) ) { continue; }
```

**اگر کلینیک «گارانتی» را پر نکرده باشد، هر ادعای وابسته به گارانتی —
در FAQ، در نوار اعتماد، در کارت بیمه — سایت‌به‌سایت ناپدید می‌شود.**

سایت نمی‌تواند چیزی وعده بدهد که پشتش تعهد ثبت‌شده نیست. این
اصلی‌ترین قاعدهٔ اخلاقیِ کد است و در هر صفحهٔ جدید باید رعایت شود.

### ۶ · یا مقصد واقعی، یا هیچ

- تاپ‌بار: `if ( '' !== sy_opt('instagram') )` — لینک شبکهٔ خالی چاپ نمی‌شود
- مگامنو: گروه بی‌محتوا چاپ نمی‌شود
- `sy_url()`: مقصد ساخته‌نشده به خانه می‌افتد، نه ۴۰۴
- نقشهٔ سایت: برگهٔ ساخته‌شده ولی خالی اصلاً ردیف نمی‌گیرد

### ۷ · هیچ نسخهٔ دومی از حقیقت

- مگامنو از محتوا ساخته می‌شود نه از منوی وردپرس — «خدمت جدید که اضافه
  شود، خودش در مگامنو بیاید»
- کاشی‌های عددیِ «دربارهٔ ما» با `kind = شمارش خودکار` از خود سایت شمرده
  می‌شوند
- بردکرامب هیچ فیلد ACF نمی‌خواند و نباید بخواهد: «اگر ادمین مجبور باشد
  "خانه" را تایپ کند، طراحی غلط است»
- الگوی صفحهٔ خدمت عمداً تاکسونومی **نیست** — نسخهٔ قبلی هم تاکسونومی
  داشت هم فیلد، با دو واژگان ناهم‌خوان، و رندر فقط دومی را می‌خواند

### ۸ · معیار پذیرش: فیلد خیالی صفر

`sy_field_watch()` هر نام فیلدی را که تمپلیت صدا می‌زند ولی در هیچ گروه
ACF تعریف نشده ثبت می‌کند و در `WP_DEBUG` پایین صفحه چاپ می‌کند:

```html
<!-- sy-phantom-fields (0): -->
```

فیلد خیالی یعنی «متن هاردکدی که لباس فیلد پوشیده و ادمین راهی برای
ویرایشش ندارد». در نسخهٔ ۰.۲۱ **۲۴۸ مورد** بود؛ **الان صفر است**.

**صفر ماندن این عدد شرط پذیرش هر صفحهٔ جدید است.**

---

## ۳ · سه الگوی منبع محتوا

| الگو | کجا | ساختار |
|---|---|---|
| **الف · گروه به‌ازای هر بخش، روی خودِ نوشته** | `service` (۱۵ گروه)، `team_member` (۱۲)، `product` (۷)، `brand`، `hearing_test` | هر بخش یک گروه ACF جدا |
| **ب · یک مگا-گروه روی برگه** | فقط `front_page` — ۱۷۶ فیلد، ۲۰ تب | هر تب = `sy_show_x` + `home_x` (گروه) + `home_x_items` (ریپیتر) |
| **ج · تب در تنظیمات سراسری** | `about_*`, `contact_*`, `pay_*`, `compare_*`, `faq_*` + همهٔ آرشیوها | برگهٔ ایستا خودش فیلد ندارد |

**قاعدهٔ انتخاب:** محتوایی که به یک *نوشته* تعلق دارد → **الف**.
محتوایی که یکتاست و فقط یک نمونه دارد → **ج**.
الگوی **ب** فقط یک‌بار به‌کار رفته و برای صفحهٔ جدید توصیه نمی‌شود:
۱۷۶ فیلد در یک گروه هم برای نگهداری بد است هم برای سرعت پیشخوان.

---

## ۴ · قرارداد نام‌گذاری

### فیلد — `{scope}_{section}_{slot}`

```
service_hero_eyebrow           service_symptoms_section_title
service_hero_lead              service_symptoms_section_lead
service_hero_guarantees        service_symptoms_items      ← ریپیتر
service_hero_cta_label         service_steps_steps
service_hero_image             member_faq_eyebrow
service_hero_image_alt_note    home_steps / home_steps_head
```

**اسلات‌های استاندارد:**
`eyebrow` (بَج بالای تیتر) · `section_title` یا `title` ·
`section_lead` یا `lead` · `items` / `steps` / `rows` ·
`cta_label` · `cta_note` · `note` · `image` + `image_alt_note`

**زیرفیلدهای استاندارد ریپیتر:**
`icon` (select از مجموعهٔ آیکون) · `title` · `desc` ·
`requires` (دروازهٔ تعهد) · `urgent` / `highlight` (true_false، واریانت بصری)

### فایل

```
parts/{type}/{layout}/{section}.php      بخش
parts/{type}/{layout}/order.php          ترتیب
assets/css/{template_slug}.css           استایل — وجودش یعنی «پورت‌شده»
assets/js/{template_slug}.js             رفتار، خودکار با وابستگی sy-engine
acf-json/group_{scope}_{section}.json    فیلدها
```

### `template_slug()` — چطور حل می‌شود

| شرط | خروجی |
|---|---|
| `is_shop()` یا `is_product_taxonomy()` | `shop` |
| `is_cart()` یا `is_checkout()` | `purchase` |
| `is_home()` / `is_category()` / `is_tag()` (نه صفحهٔ اول) | `blog-archive` |
| Page Template دارد | نام همان فایل |
| `is_front_page()` | `front-page` |
| برگهٔ ایستا | `page-{نامک}` |
| `is_singular('service')` | `single-service--{layout}` |
| تک‌نوشتهٔ دیگر | `single-{post_type}` |
| آرشیو | `archive-{post_type}` |
| تاکسونومی | `taxonomy-{taxonomy}` |
| جست‌وجو / ۴۰۴ | `search` / `error404` |

---

## ۵ · زنجیرهٔ استایل

```
tokens.css          تنها جای مجاز هگز خام
  └─ base.css
      └─ components.css
style.css           لایهٔ قالب  (:root دومِ خودش را هم دارد — بند ۷)
  └─ chrome.css     تاپ‌بار، هدر، مگامنو، فوتر، نوار موبایل — همه‌جا
      └─ {slug}.css        فقط این نما
      └─ corrections.css   لایهٔ دسترس‌پذیری، همیشه آخر
legacy.css          فقط برای نماهای هنوز پورت‌نشده
```

`is_ported()` یعنی «آیا `assets/css/{slug}.css` وجود دارد؟» و همین بولین
سه چیز را کنترل می‌کند:

1. خاموش‌شدن `legacy.css`
2. حذف CSS قالب مادر و المنتور (`clear_the_deck()`)
3. بارگذاری رانتایم JS (`enqueue_runtime()`)

**ساختن فایل CSS هم‌نام، عملاً اعلام «پورت‌شدن» است.**

دلیل مستند برای اینکه فهرست نیست: «صفحهٔ عضو تیم پورت شد و فهرست
نمی‌دانست، پس `legacy.css` رویش آمد و اندازهٔ متن بدنه را از ۱۶ به ۱۷ و
ارتفاع خط را از `normal` به ۱٫۸۵ برد — در هر بخشِ صفحه، و بدون هیچ خطایی.»

### دو سیستم آیکون

| | تعداد | صدا زدن | ادمین عوض می‌کند؟ |
|---|---|---|---|
| `icon-set.php` | ۵۱ نام‌دار | `sy_icon_get( get_sub_field('icon') )` | **بله** — select در ACF |
| `icons-design.php` | ۳۴۱ هش‌نام (`sy-i-d9671c`) | `sy_icon_raw('sy-i-...')` | خیر — هاردکد |

دومی میراث پورت است. **صفحهٔ جدید باید اولی را ترجیح بدهد.**
مقدار ناشناخته در `sy_icon_get()` یعنی آیکون چاپ نمی‌شود، نه اینکه صفحه
بشکند. هیچ SVGای در دیتابیس ذخیره نمی‌شود.

---

## ۶ · چک‌لیست صفحهٔ جدید

1. تعیین منبع محتوا: **الف** (روی نوشته) یا **ج** (تب تنظیمات) — بند ۳
2. `acf-json/group_{scope}_{section}.json` به‌ازای هر بخش، با نام‌گذاری بند ۴
3. `parts/.../{section}.php` به‌ازای هر بخش — دروازه در سطر اول
4. `parts/.../order.php` با ترتیب
5. تمپلیت اصلی: فقط `get_header()` + حلقهٔ `order.php` + `get_footer()`
6. `assets/css/{slug}.css` — بدون هگز خام، فقط `var(--sy-*)`
7. `assets/js/{slug}.js` در صورت نیاز — با `data-sy-*` و موتور مشترک
8. بردکرامب: `sy_breadcrumb()` — بدون هیچ فیلدی
9. لینک داخلی: `sy_url('کلید')` — نه آدرس ثابت
10. آیکون: `sy_icon_get()` با فیلد select
11. اگر FAQ دارد: `sy_faqs_for()` **و** `sy_faq_schema()`
12. اگر ادعای وابسته به تعهد دارد: فیلد `requires`

**دو معیار پذیرش:**
- `sy-phantom-fields (0)` در `WP_DEBUG`
- هیچ فیلد تعریف‌شده‌ای که در هیچ تمپلیتی چاپ نشود (بند ۷ را ببینید)

---

## ۷ · بدهی‌های وضعیت فعلی

مواردی که در بررسی پیدا شد و روی صفحهٔ جدید اثر می‌گذارند.

### ۷٫۱ توکن‌ها دو بار تعریف شده‌اند — ۵ مورد متناقض

`tokens.css` می‌گوید «تنها جایی در کل CSS که مقدار خام هگز مجاز است»،
ولی `style.css` هم `:root` خودش را دارد (۴۲ توکن) و دیرتر لود می‌شود.

| توکن | `tokens.css` | `style.css` (**برنده**) |
|---|---|---|
| `--sy-body` | `#35525B` | `#2E4850` |
| `--sy-muted` | `#4A6670` | `#5B7178` |
| `--sy-r-btn` | `11px` | `13px` |
| `--sy-r-card` | `18px` | `20px` |
| `--sy-surface-2` | `#EEF4F4` | `#F7FBFB` |

همچنین دو مقیاس فاصلهٔ موازی (`--sy-s1..s8` در برابر `--sy-2..--sy-16`)
و دو عرض ظرف (`--sy-max: 1240px` در برابر `--sy-shell: 1180px`).

**تا این تثبیت نشود، صفحهٔ جدید نمی‌داند کدام مقدار را بردارد.**

### ۷٫۲ نُه فیلد یتیم — ادمین پر می‌کند، هیچ‌جا چاپ نمی‌شود

| فیلد | نوع | گروه |
|---|---|---|
| `sticky_cta_label` | text | `sy_options` |
| `sticky_cta_url` | link | `sy_options` |
| `brand_differentiator` | text | `brand` |
| `hearing_test_is_painless` | true_false | `hearing_test` |
| `hearing_test_needs_sedation` | true_false | `hearing_test` |
| `product_installment_note` | text | `product_extra` |
| `product_page_quantity_note` | text | `product_page` |
| `team_member_license_no` | text | `team_member` |
| `team_member_credentials` (+ زیرفیلد `year`) | repeater | `team_member` |

این معکوسِ مشکل «فیلد خیالی» است و از همان جنس: دروغی در پیشخوان.
مشخصاً نوار چسبان موبایل در `footer.php` دکمهٔ سومش («رزرو نوبت») هاردکد
است، در حالی که `sticky_cta_label` و `sticky_cta_url` برای همین ساخته
شده‌اند.

### ۷٫۳ یک بخش FAQ بدون schema

`parts/team-member/faq.php` تنها رندرکنندهٔ FAQ است که `sy_faq_schema()`
ندارد. نُه جای دیگر دارند:
`page-contact`, `page-faq`, `page-insurance-payment`,
`parts/hearing-test/body`, `parts/home/faq`, `parts/product/product-faq`,
`parts/service/{diagnostic/parent-faq, technical/faq, therapeutic/faq}`.

### ۷٫۴ نام‌گذاری کلاس‌ها

از **۲۳۹۳ سلکتور کلاسِ متمایز** در `assets/css/`:

| نوع | تعداد | سهم |
|---|---|---|
| شماره‌دارِ تولیدشده (`svc-p058`, `dr-p105`) | ۱۵۹۸ | **۶۶٪** |
| نام‌دارِ `sy-*` | ۵۳۳ | ۲۲٪ |
| اختصارهای طرح (`acctbtn`, `artaside`, `buycol`) | ۲۶۲ | ۱۰٪ |

یعنی حدود سه‌چهارم CSS با نام‌هایی نوشته شده که بدون باز کردن فایل طرح
اصلی قابل فهم نیستند. میراث پورت خودکار است و کار می‌کند، ولی برای کد
جدید توصیه نمی‌شود.

### ۷٫۵ داک‌بلاک کهنه دربارهٔ `corrections.css`

`class-sy-assets.php` در داک‌بلاک `enqueue_corrections()` می‌گوید روشن‌بودن
`sy_corrections` باعث **۱۱٫۵۳٪** اختلاف با طرح می‌شود که ۱۱٫۴۶ واحدش از
`line-height: 1.85` است.

ولی خودِ `corrections.css` می‌گوید آن نسخه (که قاعده را روی `body`
می‌گذاشت) «یک انحراف بود، نه اصلاح» و اصلاح شده. قاعدهٔ فعلی فقط این است:

```css
p, li, dd, figcaption, .sy-body { line-height: var(--sy-lh-body); }
```

پس عدد ۱۱٫۵۳٪ احتمالاً کهنه است و وضعیت فعلی را توصیف نمی‌کند.
**قبل از استناد به آن باید دوباره اندازه‌گیری شود.**

نکتهٔ وابسته: `--sy-lh-body` فقط در `tokens.css` و `legacy.css` تعریف شده،
نه در `:root` فایل `style.css`. روی صفحهٔ پورت‌شده `legacy.css` حذف می‌شود
پس مقدار از `tokens.css` می‌آید (۱٫۸۵) و درست کار می‌کند — ولی وابستگی
شکننده است.

### ۷٫۶ تکرار در `parts/`

- **۱۰ فایل `breadcrumb.php` بایت‌به‌بایت یکسان** (یک `md5` مشترک؛ فایل
  یازدهم — `hearing-test-archive` — متفاوت است). هرکدام ۱۲ خط‌اند و فقط
  `sy_breadcrumb()` را صدا می‌زنند، پس منطق از قبل متمرکز است و سود
  یکی‌کردن ناچیز است. وجودشان از معماری `order.php` می‌آید: هر بخش باید
  یک فایل باشد.
- **۸ واریانت «نوار پایانی»** با ساختار نزدیک (۲۲ تا ۴۱ خط). این یکی
  ارزش یک `parts/shared/final-cta.php` پارامترپذیر را دارد.

---

## ۸ · نکات مثبتی که باید حفظ شوند

- **فیلد خیالی صفر** — از ۲۴۸ در ۰.۲۱ به ۰ رسیده. انضباط واقعی است.
- **امنیت:** `check_ajax_referer` روی همهٔ endpointهای رزرو و OTP،
  سنیتایز کامل ورودی‌ها، محدودسازی نرخ با transient روی OTP.
- **Schema:** `MedicalClinic` روی خانه و تماس، `BreadcrumbList` سراسری،
  `FAQPage` روی نُه از ده رندرکنندهٔ FAQ.
- **`SY_Numerals` عمداً به `the_content` قلاب نمی‌زند** تا `IP68` به
  `IP۶۸` و `L90-R` به `L۹۰-R` تبدیل نشود. تبدیل فقط جایی که تمپلیت
  صریحاً صدایش می‌زند: قیمت، تاریخ، تلفن.
- **نسخه‌گذاری با `filemtime`** — کش مرورگر بعد از هر ویرایش خودکار
  می‌شکند، بدون بالا بردن دستی شمارهٔ نسخه.
- **`SY_Url_Check`** — صفحهٔ «ابزارها ← ساختار آدرس» که آدرس تولیدشده را
  کنار آدرس مشخصات می‌گذارد. ادعا را قابل بازبینی می‌کند.
- **Local JSON برای ACF** — تعریف فیلدها در گیت، کنار کد صفحه‌ها.
