/**
 * The Arabic examples showcase.
 *
 * Every business, domain and number here is invented, so every card carries
 * a visible «مثال» label and a 555-style number. That is a legal disclosure,
 * not decoration, and the brief records it as already fixed once.
 *
 * Each card also carries a "why it works" line, because the spec asks this
 * page to earn a query rather than sit as a wall of screenshots: a grid with
 * no commentary has nothing to rank with.
 *
 * The grouping is by trade rather than by city, and the copy under each
 * heading is written for that trade — the AC group talks about the summer
 * wave, the pest group about the spring one. Same rule as the hubs: if a
 * block cannot be made specific, it should not be repeated.
 */

export const AR_EXAMPLE_FILTERS = [
  { key: 'maintenance-companies', label: 'شركات الصيانة' },
  { key: 'ac', label: 'تكييف وتبريد' },
  { key: 'plumbing', label: 'سباكة' },
  { key: 'electrical', label: 'كهرباء' },
  { key: 'pest-control', label: 'مكافحة حشرات' },
];

export const AR_EXAMPLE_HEADINGS = {
  all: [
    'أمثلة مواقع شركات صيانة وخدمات منزلية',
    'مواقع كاملة بُنيت من ورقة إجابات واحدة — ومعها سبب عمل كل واحد منها.',
  ],
  'maintenance-companies': [
    'مواقع شركات صيانة متعددة التخصصات',
    'الميزة هنا أن رخصة واحدة تغطي كل التخصصات — والموقع يجعل كل تخصص يظهر على حدة بدل أن يذوب في صفحة «خدماتنا».',
  ],
  ac: [
    'مواقع شركات تكييف وتبريد',
    'التكييف أشد التخصصات موسمية، فالموقع الجيد يفصل الطلب العاجل «المكيف ما يبرد» عن البحث المؤجل «سعر تركيب مركزي».',
  ],
  plumbing: [
    'مواقع شركات سباكة',
    'السباكة تخصص طوارئ يُشترى بالثقة: الرقم ظاهر، والسجل التجاري والضمان في المقدمة، وصفحة لكل مشكلة على حدة.',
  ],
  electrical: [
    'مواقع شركات كهرباء',
    'للكهرباء مشتريان لا واحد: عطل الليلة، ومشروع تمديد يُقرأ لأسابيع. الموقع الجيد يخدمهما بصفحات مختلفة.',
  ],
  'pest-control': [
    'مواقع شركات مكافحة حشرات',
    'كل آفة سوق منفصل بعميل مختلف — والموسم قصير، فالصفحة تُنشر قبله لا بعده.',
  ],
};

export const AR_EXAMPLE_SITES = [
  {
    trade: 'maintenance-companies',
    tradeLabel: 'صيانة متعددة',
    url: 'alnakhla-maint.com',
    name: 'مؤسسة النخلة للصيانة',
    cities: 'الرياض · الخرج',
    wa: 'واتساب ‎+966 55 555 0114',
    p1: 'صيانة مكيفات — الملقا',
    p2: 'كشف تسربات المياه — النرجس',
    p3: 'تمديدات كهرباء — الخرج',
    pages: '١٢',
    why: 'لماذا يعمل: التخصصات الثلاثة لها صفحات منفصلة في كل حي، فتظهر الشركة لثلاث عمليات بحث مختلفة بدل واحدة عامة.',
  },
  {
    trade: 'maintenance-companies',
    tradeLabel: 'خدمات فنية',
    url: 'rawasi-services.com',
    name: 'رواسي للخدمات الفنية',
    cities: 'جدة · مكة',
    wa: 'واتساب ‎+966 55 555 0176',
    p1: 'تسليك مجاري — الروضة',
    p2: 'مكافحة حشرات — السلامة',
    p3: 'صيانة مصاعد — مكة',
    pages: '١١',
    why: 'لماذا يعمل: خدمات لا يجمعها منافس عادة في مكان واحد — والصفحة المنفصلة لكل واحدة تلتقط بحثاً لا ينافس عليه أحد.',
  },
  {
    trade: 'ac',
    tradeLabel: 'تكييف',
    url: 'albahr-cool.ae',
    name: 'البحر للتكييف والتبريد',
    cities: 'دبي · الشارقة',
    wa: 'واتساب ‎+971 55 555 0142',
    p1: 'صيانة مكيفات مركزية — المرابع',
    p2: 'تنظيف دكت — الشارقة',
    p3: 'عقود صيانة سنوية — دبي',
    pages: '١٠',
    why: 'لماذا يعمل: صفحة العقود السنوية منفصلة عن صفحات الأعطال — مشترٍ مختلف يبحث بعبارات مختلفة ويقرأ قبل أن يتواصل.',
  },
  {
    trade: 'ac',
    tradeLabel: 'تكييف',
    url: 'burood-riyadh.com',
    name: 'برود للتكييف',
    cities: 'الرياض · الخرج',
    wa: 'واتساب ‎+966 55 555 0198',
    p1: 'تصليح مكيفات سبليت — شرق الرياض',
    p2: 'تركيب مكيفات — حطين',
    p3: 'صيانة مركزي — الخرج',
    pages: '٩',
    why: 'لماذا يعمل: «تصليح» و«تركيب» صفحتان لا صفحة واحدة — الأولى طلب اليوم والثانية بحث هذا الشهر.',
  },
  {
    trade: 'plumbing',
    tradeLabel: 'سباكة',
    url: 'almasar-plumb.com',
    name: 'المسار للسباكة',
    cities: 'جدة · رابغ',
    wa: 'واتساب ‎+966 55 555 0121',
    p1: 'كشف تسربات المياه — أبحر',
    p2: 'تسليك مجاري — الروضة',
    p3: 'عزل خزانات — رابغ',
    pages: '١٠',
    why: 'لماذا يعمل: الضمان ومدة الاستجابة مكتوبان في أعلى كل صفحة — وهما أول ما يبحث عنه من سيُدخل غريباً إلى بيته.',
  },
  {
    trade: 'electrical',
    tradeLabel: 'كهرباء',
    url: 'tayyar-electric.com',
    name: 'التيار للمقاولات الكهربائية',
    cities: 'الدمام · الخبر',
    wa: 'واتساب ‎+966 55 555 0163',
    p1: 'أعطال كهرباء طوارئ — الخبر',
    p2: 'تمديدات فلل — الدمام',
    p3: 'تركيب شاحن سيارة كهربائية — الخبر',
    pages: '٩',
    why: 'لماذا يعمل: صفحة شاحن السيارة الكهربائية نُشرت مبكراً — منافستها شبه معدومة اليوم، وستكبر مع السوق.',
  },
  {
    trade: 'pest-control',
    tradeLabel: 'مكافحة حشرات',
    url: 'daroualsakan.com',
    name: 'درع السكن لمكافحة الحشرات',
    cities: 'الرياض · الخرج',
    wa: 'واتساب ‎+966 55 555 0187',
    p1: 'مكافحة النمل الأبيض — النرجس',
    p2: 'مكافحة القوارض للمطاعم — الرياض',
    p3: 'رش مبيدات للمنازل — الخرج',
    pages: '١١',
    why: 'لماذا يعمل: صفحة المطاعم منفصلة عن صفحات المنازل — عقد دوري بمعايير مكتوبة، لا زيارة واحدة.',
  },
];
