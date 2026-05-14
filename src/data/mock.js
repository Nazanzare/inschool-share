export const roles = [
  {
    id: "student",
    title: "دانش‌آموز / دانشجو",
    description: "جستجو، خرید، ذخیره و امتیازدهی به فایل‌های آموزشی.",
    icon: "🎓",
  },
  {
    id: "teacher",
    title: "معلم / مدرس",
    description: "انتشار محتوا، فروش آنلاین و دیدن گزارش بازدید و خرید.",
    icon: "👩‍🏫",
  },
];

export const grades = ["همه پایه‌ها", "هفتم", "هشتم", "نهم", "دهم", "یازدهم", "دوازدهم", "دانشگاه"];
export const lessons = ["همه درس‌ها", "ریاضی", "فیزیک", "شیمی", "زیست", "ادبیات", "برنامه‌نویسی", "زبان انگلیسی"];
export const contentTypes = ["همه فایل‌ها", "جزوه", "ویدئو", "تمرین", "دوره", "نمونه سوال", "قالب"];

export const categories = [
  { slug: "math", title: "ریاضی", icon: "∑", color: "from-violet-500 to-fuchsia-500" },
  { slug: "science", title: "علوم و تجربی", icon: "⚗", color: "from-emerald-500 to-teal-500" },
  { slug: "programming", title: "برنامه‌نویسی", icon: "</>", color: "from-sky-500 to-indigo-500" },
  { slug: "humanities", title: "علوم انسانی", icon: "📚", color: "from-amber-400 to-orange-500" },
];

export const products = [
  {
    id: 1,
    slug: "grade-12-math-final-pack",
    title: "پک نهایی ریاضی دوازدهم؛ جزوه، تست و ویدئو",
    lesson: "ریاضی",
    grade: "دوازدهم",
    type: "دوره",
    category: "math",
    teacher: "سارا احمدی",
    teacherRole: "معلم ریاضی مدرسه شاهد",
    price: 240000,
    oldPrice: 320000,
    rating: 4.9,
    reviews: 128,
    views: 12400,
    sales: 860,
    updatedAt: "اردیبهشت ۱۴۰۵",
    duration: "۸ ساعت ویدئو + ۶ فایل PDF",
    cover: "from-violet-500 to-fuchsia-500",
    tags: ["کنکور", "امتحان نهایی", "حل تشریحی"],
    description: "یک مسیر کامل برای جمع‌بندی فصل‌های مهم ریاضی دوازدهم با تمرین‌های سطح‌بندی‌شده و پاسخ تشریحی.",
    files: [
      { title: "فصل اول: تابع و دامنه", type: "PDF", size: "۱۸MB", order: 1 },
      { title: "ویدئو حل تست تابع", type: "MP4", size: "۴۸۰MB", order: 2 },
      { title: "آزمون شبیه‌ساز نهایی", type: "PDF", size: "۹MB", order: 3 },
    ],
  },
  {
    id: 2,
    slug: "physics-11-lab-notes",
    title: "جزوه فیزیک یازدهم با آزمایش‌های تصویری",
    lesson: "فیزیک",
    grade: "یازدهم",
    type: "جزوه",
    category: "science",
    teacher: "رضا مرادی",
    teacherRole: "دبیر فیزیک",
    price: 165000,
    oldPrice: 0,
    rating: 4.7,
    reviews: 74,
    views: 7200,
    sales: 390,
    updatedAt: "فروردین ۱۴۰۵",
    duration: "۴ فصل + ۱۲ آزمایش",
    cover: "from-emerald-500 to-teal-500",
    tags: ["آزمایشگاه", "تشریحی", "یازدهم"],
    description: "جزوه‌ای مرتب برای یادگیری مفهومی فیزیک همراه با تصویر آزمایش‌ها، مثال و تمرین پایان فصل.",
    files: [
      { title: "الکتریسیته ساکن", type: "PDF", size: "۲۲MB", order: 1 },
      { title: "ویدئو آزمایش قانون کولن", type: "MP4", size: "۲۱۰MB", order: 2 },
      { title: "تمرین‌های فصل دوم", type: "PDF", size: "۷MB", order: 3 },
    ],
  },
  {
    id: 3,
    slug: "python-exercise-bank",
    title: "بانک تمرین پایتون برای دانشجویان مبتدی",
    lesson: "برنامه‌نویسی",
    grade: "دانشگاه",
    type: "تمرین",
    category: "programming",
    teacher: "نیما رستگار",
    teacherRole: "دانشجوی ارشد نرم‌افزار",
    price: 0,
    oldPrice: 0,
    rating: 4.8,
    reviews: 214,
    views: 18700,
    sales: 2100,
    updatedAt: "اردیبهشت ۱۴۰۵",
    duration: "۱۲۰ تمرین + پاسخ نمونه",
    cover: "from-sky-500 to-indigo-500",
    tags: ["رایگان", "پایتون", "پروژه کوچک"],
    description: "تمرین‌های مرحله‌ای از متغیرها تا فایل و تابع، مناسب کلاس‌های مقدماتی برنامه‌نویسی.",
    files: [
      { title: "تمرین‌های پایه و شرط", type: "ZIP", size: "۳MB", order: 1 },
      { title: "تمرین حلقه و لیست", type: "ZIP", size: "۵MB", order: 2 },
      { title: "پروژه دفترچه تلفن", type: "ZIP", size: "۸MB", order: 3 },
    ],
  },
  {
    id: 4,
    slug: "literature-exam-questions",
    title: "نمونه سوال ادبیات دهم با پاسخ تشریحی",
    lesson: "ادبیات",
    grade: "دهم",
    type: "نمونه سوال",
    category: "humanities",
    teacher: "مریم شفیعی",
    teacherRole: "معلم ادبیات",
    price: 79000,
    oldPrice: 110000,
    rating: 4.6,
    reviews: 51,
    views: 6300,
    sales: 310,
    updatedAt: "اسفند ۱۴۰۴",
    duration: "۱۰ آزمون PDF",
    cover: "from-amber-400 to-orange-500",
    tags: ["امتحانی", "پاسخ تشریحی", "دهم"],
    description: "مجموعه آزمون‌های طبقه‌بندی‌شده برای مرور سریع ادبیات دهم قبل از امتحان.",
    files: [
      { title: "آزمون نوبت اول", type: "PDF", size: "۶MB", order: 1 },
      { title: "آزمون نوبت دوم", type: "PDF", size: "۸MB", order: 2 },
      { title: "پاسخ‌نامه کامل", type: "PDF", size: "۴MB", order: 3 },
    ],
  },
  {
    id: 5,
    slug: "english-speaking-mini-course",
    title: "مینی دوره مکالمه زبان انگلیسی برای مدرسه",
    lesson: "زبان انگلیسی",
    grade: "هشتم",
    type: "ویدئو",
    category: "humanities",
    teacher: "آرمان نوری",
    teacherRole: "مدرس زبان",
    price: 135000,
    oldPrice: 0,
    rating: 4.5,
    reviews: 42,
    views: 5100,
    sales: 260,
    updatedAt: "بهمن ۱۴۰۴",
    duration: "۱۵ ویدئو کوتاه",
    cover: "from-rose-500 to-purple-500",
    tags: ["مکالمه", "هشتم", "تمرین صوتی"],
    description: "تمرین‌های مکالمه کوتاه، فایل صوتی و برگه فعالیت برای کلاس‌های مدرسه.",
    files: [
      { title: "معرفی و احوال‌پرسی", type: "MP4", size: "۱۲۰MB", order: 1 },
      { title: "تمرین صوتی درس ۲", type: "MP3", size: "۲۵MB", order: 2 },
      { title: "برگه فعالیت کلاس", type: "PDF", size: "۵MB", order: 3 },
    ],
  },
  {
    id: 6,
    slug: "chemistry-12-formula-sheet",
    title: "فرمول‌نامه شیمی دوازدهم و نکات پرتکرار",
    lesson: "شیمی",
    grade: "دوازدهم",
    type: "جزوه",
    category: "science",
    teacher: "الهام کریمی",
    teacherRole: "دبیر شیمی",
    price: 98000,
    oldPrice: 145000,
    rating: 4.7,
    reviews: 89,
    views: 8400,
    sales: 470,
    updatedAt: "اردیبهشت ۱۴۰۵",
    duration: "۳ فایل خلاصه",
    cover: "from-lime-500 to-emerald-500",
    tags: ["فرمول‌نامه", "کنکور", "جمع‌بندی"],
    description: "خلاصه فرمول‌ها، واکنش‌ها و نکات پرتکرار شیمی دوازدهم برای مرور سریع.",
    files: [
      { title: "فرمول‌نامه فصل اول", type: "PDF", size: "۴MB", order: 1 },
      { title: "واکنش‌های مهم", type: "PDF", size: "۶MB", order: 2 },
      { title: "فلش‌کارت نکات", type: "PDF", size: "۳MB", order: 3 },
    ],
  },
];

export const dashboardStats = [
  { label: "بازدید این ماه", value: "۲۴,۸۰۰", change: "+۱۸٪" },
  { label: "فروش فایل‌ها", value: "۹۶,۵۰۰,۰۰۰ تومان", change: "+۳۲٪" },
  { label: "دانلود موفق", value: "۳,۴۹۰", change: "+۲۱٪" },
  { label: "میانگین امتیاز", value: "۴٫۸ از ۵", change: "+۰٫۲" },
];

export const activityReports = [
  { title: "پک ریاضی دوازدهم", views: 12400, sales: 860, revenue: "۲۰۶,۴۰۰,۰۰۰" },
  { title: "فرمول‌نامه شیمی", views: 8400, sales: 470, revenue: "۴۶,۰۶۰,۰۰۰" },
  { title: "جزوه فیزیک یازدهم", views: 7200, sales: 390, revenue: "۶۴,۳۵۰,۰۰۰" },
];

export const comments = [
  { name: "الناز رضایی", role: "دانش‌آموز دوازدهم", text: "فایل‌ها مرتب بود و بعد از خرید بلافاصله به همه محتواها دسترسی داشتم.", score: "۵/۵" },
  { name: "محمد کریمی", role: "معلم فیزیک", text: "پنل گزارش‌ها کمک کرد بفهمم کدام درس بیشتر فروش دارد و چه محتوایی باید اضافه کنم.", score: "۴٫۸/۵" },
  { name: "زهرا عباسی", role: "دانشجو", text: "فیلتر پایه، درس و نوع فایل دقیقاً همان چیزی بود که برای پیدا کردن محتوا لازم داشتم.", score: "۴٫۹/۵" },
];

export function formatPrice(price) {
  if (price === 0) return "رایگان";
  return `${price.toLocaleString("fa-IR")} تومان`;
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
