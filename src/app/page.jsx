import Link from "next/link";
import PageShell from "@/components/PageShell";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import { categories, comments, dashboardStats, products, roles } from "@/data/mock";

const workflow = [
  "انتخاب نقش و ورود با حساب دانش‌آموز/دانشجو یا معلم",
  "جستجو بین درس، پایه، نام درس، نوع فایل و دسته‌بندی",
  "خرید آنلاین یا انتشار فایل و دیدن گزارش کامل محتوا",
];

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <PageShell>
      <section className="grid items-center gap-10 pt-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-light bg-primary-light-tint px-4 py-2 text-sm font-bold text-primary">
            <span>●</span> فروشگاه آنلاین فایل و محتوای آموزشی برای مدرسه و دانشگاه
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-black leading-[1.35] tracking-tight sm:text-6xl">
              معلم‌ها محتوا می‌فروشند، دانش‌آموزها دقیق و مرتب یاد می‌گیرند.
            </h1>
            <p className="max-w-2xl text-lg leading-9 text-secondary">
              آموزش‌مارکت یک اسکلت کامل برای فروشگاه محتوای آنلاین است؛ ورود با انتخاب نقش، کد مدرسه برای معلم، فروشگاه دسته‌بندی‌شده، سرچ درس و پایه، صفحه جزئیات فایل، افزودن محتوا و گزارش فروش دارد.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/store" className="rounded-2xl bg-primary px-7 py-4 text-center font-black text-white shadow-primary transition hover:-translate-y-1">
              مشاهده فروشگاه
            </Link>
            <Link href="/login" className="rounded-2xl border border-base bg-card px-7 py-4 text-center font-black text-base shadow-card transition hover:-translate-y-1">
              ورود و انتخاب نقش
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {workflow.map((item, index) => (
              <div key={item} className="rounded-3xl border border-base bg-card-80 p-4 shadow-card backdrop-blur">
                <span className="grid h-9 w-9 place-items-center rounded-2xl bg-primary text-sm font-black text-white">{index + 1}</span>
                <p className="mt-3 text-sm font-bold leading-7 text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-base bg-card p-4 shadow-card">
          <div className="rounded-[2rem] bg-secondary p-5">
            <div className="mb-5 flex items-center justify-between rounded-3xl bg-card p-4 shadow-card">
              <div>
                <p className="text-sm text-muted">گزارش فروش مدرس</p>
                <strong className="text-2xl">۹۶,۵۰۰,۰۰۰ تومان</strong>
              </div>
              <span className="rounded-full bg-primary-light-medium px-3 py-1 text-sm font-bold text-primary">+۳۲٪</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {roles.map((role) => (
                <Link key={role.id} href="/login" className="rounded-3xl bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-primary-light">
                  <span className="text-4xl">{role.icon}</span>
                  <h3 className="mt-4 text-xl font-black">{role.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{role.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="دسته‌بندی‌ها"
          title="با کلیک روی هر دسته، فایل‌های همان درس مرتب نمایش داده می‌شوند"
          description="داده‌ها فعلاً mock هستند تا ساختار صفحات، فیلترها و مسیر خرید/فروش آماده توسعه بک‌اند باشد."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`/store?category=${category.slug}`} className="overflow-hidden rounded-[2rem] border border-base bg-card shadow-card transition hover:-translate-y-2 hover:shadow-primary-light">
              <div className={`h-24 bg-gradient-to-br ${category.color} p-5 text-3xl font-black text-white`}>{category.icon}</div>
              <div className="p-5">
                <h3 className="text-xl font-black">{category.title}</h3>
                <p className="mt-2 text-sm text-muted">مشاهده فایل‌ها، جزوه‌ها، ویدئوها و تمرین‌ها</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="محصولات منتخب"
          title="نمونه فایل‌ها و محصولات فروشگاه"
          action={<Link href="/store" className="rounded-2xl bg-primary px-5 py-3 font-black text-white shadow-primary">همه محصولات</Link>}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-base bg-card p-6 shadow-card">
          <SectionHeader
            eyebrow="پنل هر شخص"
            title="افزودن فایل، ویرایش، حذف و گزارش‌گیری"
            description="هر معلم یا تولیدکننده محتوا صفحه اختصاصی دارد و می‌تواند فایل جدید اضافه کند، قیمت بگذارد، فایل‌های خود را مدیریت کند و گزارش بازدید، خرید و کامنت را ببیند."
          />
          <div className="mt-6 grid gap-3">
            {[
              "فرم افزودن محتوا با پایه، درس، دسته‌بندی، قیمت و فایل آنلاین",
              "گزارش فروش، بازدید، دانلود و امتیاز برای هر محصول",
              "کامنت، امتیازدهی، گزارش تخلف و خرید امن آنلاین",
            ].map((feature) => (
              <div key={feature} className="rounded-2xl bg-secondary p-4 font-bold">✓ {feature}</div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-base bg-card p-6 shadow-card lg:p-8">
        <SectionHeader eyebrow="نظرات و امتیاز" title="اعتمادسازی برای خرید و فروش محتوای آنلاین" />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {comments.map((comment) => (
            <article key={comment.name} className="rounded-3xl bg-secondary p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <strong>{comment.name}</strong>
                  <p className="text-xs text-muted">{comment.role}</p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-black text-white">{comment.score}</span>
              </div>
              <p className="leading-8 text-secondary">{comment.text}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
