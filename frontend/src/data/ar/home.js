/**
 * Arabic home page content.
 *
 * Not a translation of the English home page — a different argument for a
 * different buyer. Three things changed structurally, and each is in the
 * brief rather than a stylistic choice:
 *
 *   1. The multi-trade maintenance company leads the trades block. One
 *      licence covering AC, plumbing and electrical is the normal shape of a
 *      Gulf contractor, not an exception.
 *   2. WhatsApp is the action everywhere the English page says "call".
 *   3. Both spellings of Google appear in the copy — قوقل dominates in Saudi
 *      and جوجل elsewhere, and covering only one loses half the galaxy.
 *
 * There is no testimonial block here. The English page has one and marks it
 * as illustrative; inventing three Gulf contractors with quotes to match
 * would be the same disclosure debt in a market where the names read as
 * real. It ships when there are real customers.
 */

export const HERO = {
  eyebrow: 'صيانة · تكييف · سباكة · كهرباء',
  h1: 'جيرانك يبحثون عن فني الآن.',
  sub: 'ويدجيتا يبني لشركتك موقعاً كاملاً من بضعة أسئلة، جاهزاً في دقيقة تقريباً، ويظهر في قوقل وجوجل لكل خدمة في كل حي تخدمه. الواتساب يرن، وأنت في الموقع.',
  ctaSecondary: { label: 'شاهد أمثلة حقيقية', href: '#examples' },
  fine: 'دقيقتان من الأسئلة · يعمل في نفس اليوم · بدون عقد، تلغي وقتما تشاء',
};

/** The search result mock — the page's largest element and its LCP. */
export const MOCK = {
  label: 'مثال توضيحي',
  query: 'تصليح مكيف سبليت الرياض',
  ours: {
    mark: 'ن',
    url: 'alnakhla-maint.com › تصليح-مكيفات-الرياض',
    title: 'مؤسسة النخلة للصيانة — تصليح مكيفات، الرياض',
    badge: 'هذا أنت',
    snippet: 'صيانة وتصليح مكيفات سبليت وشباك في الرياض، خلال نفس اليوم. سجل تجاري وفنيون معتمدون…',
    action: 'رسالة واتساب',
    phone: '‎+966 55 555 0114',
  },
  others: [
    { url: 'haraj.com.sa › خدمات', title: 'حراج — فنيين مكيفات بالرياض' },
    { url: 'khamsat.com › خدمات-الصيانة', title: 'خمسات — عروض صيانة مكيفات' },
  ],
  pill: 'صيانة مكيف — حي الملقا، الرياض',
};

export const BADGES = [
  'مبني لشركات الصيانة والخدمات',
  'الموقع والعملاء ملكك',
  'الواتساب هو زر الطلب الأساسي',
  'لا شيء تتعلمه، أبداً',
];

export const STEPS = [
  {
    n: '٠١',
    tag: 'خطوتك الوحيدة',
    title: 'تجيب على بضعة أسئلة',
    body: 'اسم المؤسسة، تخصصاتك، الأحياء والمدن التي تخدمها، وبعض الصور. دقيقتان — أقرب للرد على رسائل واتساب من تعبئة نموذج.',
  },
  {
    n: '٠٢',
    title: 'موقعك يعمل',
    body: 'بعد دقيقة تقريباً: موقع كامل، صفحة لكل خدمة في كل مدينة، وزر واتساب في كل صفحة.',
  },
  {
    n: '٠٣',
    title: 'يستمر بنفسه',
    body: 'ويدجيتا يقرأ ما يبحث عنه الناس قربك ويضيف الصفحات التي تجيب عليه. شغلك هو الشغل، لا الموقع.',
  },
];

export const CAPABILITY_CARDS = [
  {
    slug: 'website',
    label: 'الموقع',
    status: 'live',
    title: 'موقع حقيقي باسم مؤسستك',
    body: 'كامل ومنظّم من إجاباتك — الخدمات، المدن، الصور، السجل التجاري. ملكك، لا مستأجر.',
  },
  {
    slug: 'seo',
    label: 'الظهور في البحث',
    status: 'live',
    title: 'تظهر في قوقل في كل مدينة تخدمها',
    body: 'صفحة لكل خدمة في كل مدينة، مع العمل التقني الذي يتوقعه محرك البحث — يجري باستمرار، ولا تراه.',
  },
  {
    slug: 'content',
    label: 'المحتوى',
    status: 'live',
    title: 'إجابات جديدة لما يسأله الجيران',
    body: 'ويدجيتا يتابع عمليات البحث المحلية ويكتب الصفحات التي تجيب عليها — ورقم واتسابك في كل واحدة.',
  },
  {
    slug: 'call-answering',
    label: 'الرد على المكالمات',
    status: 'coming-soon',
    title: 'لا تفوتك مكالمة، حتى وأنت على السلّم',
    body: 'المكالمات التي تفوتك وأنت في موقع العمل تذهب لمن يرد أولاً. ويدجيتا سيرد، يسجل تفاصيل الطلب، ويرسلها لك.',
  },
];

/** Trade cards. The multi-trade hub is featured; the rest are one line each. */
export const TRADE_CARDS = [
  {
    slug: 'maintenance-companies',
    name: 'شركات الصيانة متعددة التخصصات',
    feature: true,
    tag: 'الأكثر ملاءمة في الخليج',
    line: 'سجل تجاري واحد يغطي التكييف والسباكة والكهرباء — وموقع واحد يظهر لكل واحدة منها على حدة.',
    cta: 'شركات الصيانة',
  },
  { slug: 'ac', name: 'تكييف وتبريد', line: 'ذروة الصيف تبدأ ببحث، لا بمكالمة.' },
  { slug: 'plumbing', name: 'سباكة', line: 'كشف تسربات وتسليك — الطلب فوري.' },
  { slug: 'electrical', name: 'كهرباء', line: 'أحمال الصيف، الأعطال، التمديدات.' },
  { slug: 'pest-control', name: 'مكافحة حشرات', line: 'موسمي بحت — والصفحة تسبق الموسم.' },
];

/**
 * Example sites. Every business here is invented, so every card carries a
 * visible مثال label and a 555 number. Same disclosure rule as the English
 * site, and the note under the block says it in plain Arabic.
 */
export const EXAMPLES = [
  {
    domain: 'alnakhla-maint.com',
    business: 'مؤسسة النخلة للصيانة',
    areas: 'الرياض · الخرج',
    wa: 'واتساب ‎+966 55 555 0114',
    pages: ['صيانة مكيفات — الرياض', 'كشف تسربات المياه — الرياض', 'تمديدات كهرباء — الخرج'],
    caption: 'صيانة متعددة · ١٢ صفحة · جاهز في دقيقة',
  },
  {
    domain: 'albahr-cool.ae',
    business: 'البحر للتكييف والتبريد',
    areas: 'دبي · الشارقة',
    wa: 'واتساب ‎+971 55 555 0142',
    pages: ['صيانة مكيفات مركزية — دبي', 'تنظيف دكت — الشارقة', 'عقود صيانة سنوية — دبي'],
    caption: 'تكييف · ١٠ صفحات · جاهز في دقيقة',
  },
  {
    domain: 'rawasi-services.com',
    business: 'رواسي للخدمات الفنية',
    areas: 'جدة · مكة',
    wa: 'واتساب ‎+966 55 555 0176',
    pages: ['تسليك مجاري — جدة', 'مكافحة حشرات — جدة', 'صيانة مصاعد — مكة'],
    caption: 'خدمات فنية · ١١ صفحة · جاهز في دقيقة',
  },
];

export const EXAMPLES_NOTE =
  'جميع المؤسسات المعروضة أمثلة توضيحية — ستُستبدل بعملاء حقيقيين عند الإطلاق.';

export const RENTING = {
  title: 'منصات الوساطة والإعلانات المدفوعة',
  items: [
    'تدفع على كل عميل، بلا نهاية',
    'نفس الطلب يُعرض على ثلاث أو أربع شركات معك',
    'توقف الدفع فتختفي في نفس اليوم',
    'العميل ملك المنصة، لا ملكك',
  ],
};

export const OWNING = {
  title: 'أن تملك حضورك',
  items: [
    'سعر شهري ثابت، كم ما وصلك من طلبات',
    'رسائل الواتساب تصلك أنت وحدك',
    'ترتيبك في البحث يتراكم شهراً بعد شهر',
    'اسمك، موقعك، عملاؤك',
  ],
};

export const FAQ = [
  {
    q: 'هل هناك عقد؟',
    a: 'لا. شهر بشهر، وتلغي وقتما تشاء. وإذا ألغيت، الموقع والنطاق يبقيان لك.',
  },
  {
    q: 'هل يظهر الموقع في قوقل؟',
    a: 'هذا هو عمله الأساسي: صفحة لكل خدمة في كل مدينة، مكتوبة بالكلمات التي يستخدمها الناس فعلاً — بالإملاءين معاً، «قوقل» و«جوجل». الظهور يبدأ خلال أيام ويتحسن شهرياً.',
  },
  {
    q: 'هل أحتاج أن أكتب أو أتعلم برنامجاً؟',
    a: 'لا. تجيب على أسئلة قصيرة مرة واحدة — دقيقتان تقريباً. كل ما بعد ذلك يحدث تلقائياً.',
  },
];

export const CLOSING = {
  title: 'ضع مؤسستك حيث يبحث جيرانك.',
  lead: 'أجب على بضعة أسئلة اليوم. موقعك يعمل قبل زيارتك القادمة.',
  fine: 'بدون عقد · كل شيء ملكك',
};
