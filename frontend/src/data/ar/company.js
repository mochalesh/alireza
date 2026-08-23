/**
 * The Arabic company pages' content.
 *
 * `AR_PLACEHOLDER` is the same switch as the English `PLACEHOLDER`: while it
 * is true, About and Contact show a visible notice saying the people and the
 * contact details are placeholders. Set both false the day the real ones are
 * in and every notice disappears on its own.
 *
 * The contact details deliberately point at the same inbox as the English
 * site rather than inventing a second one. A Gulf phone number and a Riyadh
 * address would be the easiest thing in the world to write here and the
 * worst thing to have written: an address nobody sits at is a lie a customer
 * can drive to.
 */

export const AR_PLACEHOLDER = true;

export const AR_CONTACT = {
  email: 'hello@widgeta.app',
  responseWindow: 'يوم عمل واحد',
};

export const AR_ABOUT = {
  h1: 'صاحب المهنة لا يجب أن يستأجر عملاءه.',
  p: [
    'هذه الشركة كلها في هذه الجملة. كل تخصص نعرفه له القصة نفسها: ممتاز في عمله، ومحروق من التسويق — رسوم طلبات ترتفع، ووكالات تختفي، ومواقع لم تجعل الهاتف يرن مرة واحدة.',
    'ويدجيتا موجود ليملك صاحب شركة الصيانة حضوراً حقيقياً على الإنترنت بسعر ثابت يعرفه مسبقاً، بلا أن يتعلم أداة واحدة جديدة. نحن نبني البرنامج، وبحث جيرانك هو ما يوجّه الطلب، وواتسابك يفعل الباقي.',
    'وإن كانت ميزة لا تنتهي بعمل محجوز فعلاً، فلا ننشرها.',
  ],
  /** What the company will and will not do, stated so it can be held to it. */
  promisesTitle: 'ما نلتزم به',
  promises: [
    'الموقع والنطاق ملكك، وينتقلان معك إن ألغيت الاشتراك.',
    'بلا عقد وبلا رسوم تأسيس، وتلغي متى شئت.',
    'لا نعرض رقماً ولا اسماً ولا شهادة لا نستطيع إثباتها — وكل مثال على هذا الموقع مكتوب عليه أنه مثال.',
    'لا نَعِد بمرتبة أولى في قوقل. لا أحد يستطيع ذلك، ومن يَعِدك به يبيعك شيئاً آخر.',
  ],
};

export const AR_CONTACT_PAGE = {
  h1: 'تواصل معنا',
  sub: 'أسرع طريق هو الواتساب، والبريد يصل إلى الشخص نفسه.',
  faqTitle: 'قبل أن تراسل',
  faqs: [
    {
      q: 'أريد أن أرى موقعاً قبل أن أشترك',
      a: 'صفحة الأمثلة فيها مواقع كاملة لخمسة تخصصات، ومكتوب تحت كل واحد سبب عمله. وكلها أمثلة توضيحية مكتوب عليها ذلك.',
    },
    {
      q: 'سؤالي عن السعر',
      a: 'صفحة الأسعار تعرض السعر الشهري وما يشمله بالكامل — بلا رسوم تأسيس وبلا عقد. والسعر المعروض اليوم مبدئي ويُثبَّت عند الإطلاق، وهذا مكتوب على الصفحة نفسها.',
    },
    {
      q: 'أريد أن أعرف متى يُطلق الرد على المكالمات',
      a: 'اترك بريدك في صندوق «أبلغوني» على صفحة الأسعار وسنراسلك يوم الإطلاق. لا شيء يُباع منه اليوم.',
    },
  ],
};
