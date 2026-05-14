"use client";

import { useMemo, useState } from "react";

const categories = ["همه", "جزوه", "ویدئو", "دوره", "تمرین", "قالب", "پادکست"];

const contents = [
  {
    title: "جزوه جمع‌بندی ریاضی دوازدهم",
    type: "جزوه",
    author: "سارا احمدی",
    role: "معلم ریاضی",
    price: "۲۴۰٬۰۰۰ تومان",
    views: "۱۲٫۴k",
    sales: "۸۶۰",
    rating: 4.9,
    comments: 128,
    badge: "پرفروش",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "کارگاه ویدئویی مقاله‌نویسی دانشگاهی",
    type: "ویدئو",
    author: "دکتر آرمان نوری",
    role: "استاد دانشگاه",
    price: "۳۸۰٬۰۰۰ تومان",
    views: "۹٫۱k",
    sales: "۴۴۰",
    rating: 4.8,
    comments: 76,
    badge: "جدید",
    gradient: "from-indigo-500 to-sky-500",
  },
  {
    title: "بانک تمرین برنامه‌نویسی پایتون",
    type: "تمرین",
    author: "نیما رستگار",
    role: "دانشجوی ارشد",
    price: "رایگان",
    views: "۱۸٫۷k",
    sales: "۲٫۱k",
    rating: 4.7,
    comments: 214,
    badge: "رایگان",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "قالب آماده ارائه و پروژه کلاسی",
    type: "قالب",
    author: "مریم شفیعی",
    role: "دانشجو و طراح",
    price: "۹۹٬۰۰۰ تومان",
    views: "۶٫۳k",
    sales: "۳۱۰",
    rating: 4.6,
    comments: 51,
    badge: "تخفیف",
    gradient: "from-amber-400 to-orange-500",
  },
];

const stats = [
  { label: "محتوای آنلاین", value: "+۳۲هزار" },
  { label: "مدرس و دانشجو", value: "+۱۲هزار" },
  { label: "خرید امن", value: "۹۸٪" },
  { label: "میانگین رضایت", value: "۴٫۸/۵" },
];

const reports = [
  { label: "بازدید امروز", value: "۲,۴۸۰", change: "+۱۸٪" },
  { label: "فروش این ماه", value: "۹۶,۵۰۰,۰۰۰", change: "+۳۲٪" },
  { label: "کامنت‌های جدید", value: "۱۴۷", change: "+۱۲٪" },
];

const comments = [
  {
    name: "الناز رضایی",
    text: "جزوه‌ها دقیق و قابل جستجو هستند؛ برای امتحان پایان‌ترم واقعاً کمکم کرد.",
    score: "۵/۵",
  },
  {
    name: "محمد کریمی",
    text: "خرید سریع انجام شد و گزارش فروش برای منِ مدرس خیلی شفاف است.",
    score: "۴٫۸/۵",
  },
  {
    name: "زهرا عباسی",
    text: "فیلترها باعث می‌شود محتوای مناسب کلاس خودم را خیلی سریع پیدا کنم.",
    score: "۴٫۹/۵",
  },
];

function ThemeToggle({ isDark, setIsDark }) {
  return (
    <button
      type="button"
      onClick={() => setIsDark((value) => !value)}
      className="inline-flex items-center gap-2 rounded-full border border-base bg-card px-4 py-2 text-sm font-bold text-base shadow-card transition hover:-translate-y-0.5 hover:shadow-primary-light"
      aria-label="تغییر حالت روشن و تاریک"
    >
      <span>{isDark ? "☀️" : "🌙"}</span>
      {isDark ? "حالت روشن" : "حالت تاریک"}
    </button>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [query, setQuery] = useState("");

  const filteredContents = useMemo(() => {
    return contents.filter((item) => {
      const matchesCategory = selectedCategory === "همه" || item.type === selectedCategory;
      const matchesQuery = `${item.title} ${item.author} ${item.role} ${item.type}`
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  return (
    <main className={`${isDark ? "dark" : ""} min-h-screen bg-base text-base`}>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-primary-light-glow blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-primary-glow blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 py-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 flex items-center justify-between rounded-[2rem] border border-base bg-card-85 px-4 py-3 shadow-card backdrop-blur-xl">
          <a href="#hero" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-lg font-black text-white shadow-primary">آ</span>
            <span>
              <strong className="block text-lg">آموزش‌مارکت</strong>
              <small className="text-muted">اشتراک، فروش و یادگیری آنلاین</small>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-secondary lg:flex">
            <a className="hover-text-primary" href="#market">فروشگاه</a>
            <a className="hover-text-primary" href="#profiles">صفحه افراد</a>
            <a className="hover-text-primary" href="#reports">گزارش‌ها</a>
            <a className="hover-text-primary" href="#comments">نظرات</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            <a href="#upload" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-black text-white shadow-primary transition hover:-translate-y-0.5 sm:inline-flex">
              انتشار محتوا
            </a>
          </div>
        </header>

        <section id="hero" className="grid items-center gap-10 pt-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-light bg-primary-light-tint px-4 py-2 text-sm font-bold text-primary">
              <span>●</span> بازار آنلاین محتوای آموزشی برای معلم، دانش‌آموز و دانشجو
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-black leading-[1.35] tracking-tight sm:text-6xl">
                هر نفر یک صفحه، هر محتوا یک فرصت برای یادگیری و درآمد.
              </h1>
              <p className="max-w-2xl text-lg leading-9 text-secondary">
                جزوه، ویدئو، دوره، تمرین، فایل پروژه و هر محتوای آموزشی را آنلاین منتشر کنید؛ بازدید، خرید، امتیاز و کامنت‌ها را ببینید و با جستجوی هوشمند سریع‌تر بفروشید.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#market" className="rounded-2xl bg-primary px-7 py-4 text-center font-black text-white shadow-primary transition hover:-translate-y-1">
                شروع جستجو در فروشگاه
              </a>
              <a href="#profiles" className="rounded-2xl border border-base bg-card px-7 py-4 text-center font-black text-base shadow-card transition hover:-translate-y-1">
                ساخت صفحه شخصی
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-base bg-card-80 p-4 shadow-card backdrop-blur">
                  <strong className="block text-2xl text-primary">{stat.value}</strong>
                  <span className="text-sm text-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[2.5rem] border border-base bg-card p-4 shadow-card">
            <div className="rounded-[2rem] bg-secondary p-5">
              <div className="mb-5 flex items-center justify-between rounded-3xl bg-card p-4 shadow-card">
                <div>
                  <p className="text-sm text-muted">درآمد این هفته</p>
                  <strong className="text-2xl">۱۲,۸۰۰,۰۰۰ تومان</strong>
                </div>
                <span className="rounded-full bg-primary-light-medium px-3 py-1 text-sm font-bold text-primary">+۲۴٪</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {contents.slice(0, 2).map((item) => (
                  <article key={item.title} className="rounded-3xl bg-card p-4 shadow-card">
                    <div className={`mb-4 h-28 rounded-3xl bg-gradient-to-br ${item.gradient}`} />
                    <span className="rounded-full bg-primary-light-soft px-3 py-1 text-xs font-bold text-primary">{item.type}</span>
                    <h3 className="mt-3 font-black leading-7">{item.title}</h3>
                    <div className="mt-4 flex items-center justify-between text-sm text-muted">
                      <span>⭐ {item.rating}</span>
                      <span>{item.sales} فروش</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="market" className="space-y-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <span className="text-sm font-black text-primary">فروشگاه محتوا</span>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">جستجو، فیلتر، خرید و ذخیره محتوای آنلاین</h2>
            </div>
            <div className="flex flex-col gap-3 rounded-3xl border border-base bg-card p-3 shadow-card sm:flex-row">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="جستجو بر اساس عنوان، مدرس یا نوع محتوا..."
                className="min-h-12 w-full rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2 sm:w-96"
              />
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2"
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {filteredContents.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-[2rem] border border-base bg-card shadow-card transition hover:-translate-y-2 hover:shadow-primary-light">
                <div className={`h-40 bg-gradient-to-br ${item.gradient} p-4`}>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-violet-700">{item.badge}</span>
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-primary-light-soft px-3 py-1 text-xs font-bold text-primary">{item.type}</span>
                    <span className="text-sm font-bold text-accent">⭐ {item.rating}</span>
                  </div>
                  <h3 className="min-h-14 text-lg font-black leading-7">{item.title}</h3>
                  <p className="text-sm text-muted">{item.author} • {item.role}</p>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs text-muted">
                    <span className="rounded-2xl bg-secondary p-2">👁 {item.views}</span>
                    <span className="rounded-2xl bg-secondary p-2">🛒 {item.sales}</span>
                    <span className="rounded-2xl bg-secondary p-2">💬 {item.comments}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-base pt-4">
                    <strong className="text-primary">{item.price}</strong>
                    <button className="rounded-2xl bg-primary px-4 py-2 text-sm font-black text-white transition group-hover:bg-primary-dark">خرید</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="profiles" className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-base bg-card p-6 shadow-card">
            <span className="text-sm font-black text-primary">صفحه اختصاصی هر شخص</span>
            <h2 className="mt-2 text-3xl font-black leading-tight">پروفایل آموزشی با ویترین محتوا و پنل مدیریت</h2>
            <p className="mt-4 leading-8 text-secondary">
              مدرس، دانشجو یا دانش‌آموز می‌تواند بیوگرافی، مهارت‌ها، محصولات، دوره‌های رایگان و پولی، شبکه‌های اجتماعی و سابقه فروش خود را در یک صفحه مرتب نمایش دهد.
            </p>
            <div id="upload" className="mt-6 grid gap-3">
              {[
                "افزودن محتوا با قیمت، دسته‌بندی، پیش‌نمایش و فایل آنلاین",
                "ویرایش و حذف محصول، مدیریت موجودی دیجیتال و کوپن تخفیف",
                "اعلان کامنت، امتیاز، گزارش تخلف و پیام خریدار",
              ].map((feature) => (
                <div key={feature} className="rounded-2xl bg-secondary p-4 font-bold">✓ {feature}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-base bg-card p-6 shadow-card">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[2rem] bg-gradient-to-br from-violet-500 to-fuchsia-500 text-3xl font-black text-white">س</div>
              <div className="flex-1">
                <h3 className="text-2xl font-black">سارا احمدی</h3>
                <p className="text-muted">معلم ریاضی و تولیدکننده محتوای کنکوری</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
                  <span className="rounded-full bg-primary-light-soft px-3 py-1 text-primary">ریاضی</span>
                  <span className="rounded-full bg-primary-light-soft px-3 py-1 text-primary">کنکور</span>
                  <span className="rounded-full bg-primary-light-soft px-3 py-1 text-primary">ویدئو و PDF</span>
                </div>
              </div>
              <button className="rounded-2xl bg-primary px-5 py-3 font-black text-white">دنبال کردن</button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {reports.map((report) => (
                <div key={report.label} className="rounded-3xl bg-secondary p-5">
                  <p className="text-sm text-muted">{report.label}</p>
                  <strong className="mt-2 block text-2xl">{report.value}</strong>
                  <span className="mt-2 inline-block rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-black text-emerald-500">{report.change}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl bg-secondary p-5">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-black">نمودار ساده فروش محتوا</h4>
                <span className="text-sm text-muted">۷ روز اخیر</span>
              </div>
              <div className="flex h-44 items-end gap-3">
                {[45, 68, 52, 81, 60, 95, 74].map((height, index) => (
                  <div key={index} className="flex flex-1 flex-col items-center gap-2">
                    <div className="w-full rounded-t-2xl bg-primary" style={{ height: `${height}%` }} />
                    <span className="text-xs text-muted">{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reports" className="grid gap-5 lg:grid-cols-3">
          {[
            { title: "گزارش محتوا", desc: "بازدید، نرخ تبدیل، درآمد، فروش، کامنت، امتیاز و دانلود هر محصول را جداگانه ببینید.", icon: "📊" },
            { title: "امنیت خرید و فروش", desc: "پرداخت آنلاین، کیف پول مدرس، فاکتور خرید، وضعیت سفارش و قوانین بازگشت وجه برای محتوای دیجیتال.", icon: "🛡️" },
            { title: "ایده اضافه: مسیر یادگیری", desc: "کاربر می‌تواند چند محتوا را در یک مسیر یادگیری بچیند و پیشرفت خود را مرحله‌به‌مرحله دنبال کند.", icon: "🧭" },
          ].map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-base bg-card p-6 shadow-card">
              <span className="text-4xl">{item.icon}</span>
              <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
              <p className="mt-3 leading-8 text-secondary">{item.desc}</p>
            </article>
          ))}
        </section>

        <section id="comments" className="rounded-[2.5rem] border border-base bg-card p-6 shadow-card lg:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <span className="text-sm font-black text-primary">کامنت و امتیازدهی</span>
              <h2 className="mt-2 text-3xl font-black">اعتمادسازی با نظر واقعی خریداران</h2>
            </div>
            <button className="rounded-2xl border border-primary bg-primary-light-tint px-5 py-3 font-black text-primary">ثبت نظر جدید</button>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {comments.map((comment) => (
              <article key={comment.name} className="rounded-3xl bg-secondary p-5">
                <div className="mb-4 flex items-center justify-between">
                  <strong>{comment.name}</strong>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-black text-white">{comment.score}</span>
                </div>
                <p className="leading-8 text-secondary">{comment.text}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col justify-between gap-4 border-t border-base py-8 text-sm text-muted md:flex-row">
          <p>© ۲۰۲۶ آموزش‌مارکت؛ نمونه رابط کاربری Next.js برای اشتراک‌گذاری محتوای آموزشی.</p>
          <div className="flex gap-4">
            <a className="hover-text-primary" href="#market">قوانین فروش</a>
            <a className="hover-text-primary" href="#comments">پشتیبانی</a>
            <a className="hover-text-primary" href="#hero">بازگشت بالا</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
