import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { formatPrice, getProductBySlug, products } from "@/data/mock";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return {
    title: product ? `${product.title} | آموزش‌مارکت` : "محصول پیدا نشد",
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);
  const sortedFiles = [...product.files].sort((a, b) => a.order - b.order);

  return (
    <PageShell>
      <section className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
        <div className="overflow-hidden rounded-[2.5rem] border border-base bg-card shadow-card">
          <div className={`h-72 bg-gradient-to-br ${product.cover} p-8 text-white`}>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/20 px-3 py-1 text-sm font-black backdrop-blur">{tag}</span>
              ))}
            </div>
            <h1 className="mt-8 max-w-3xl text-4xl font-black leading-tight">{product.title}</h1>
          </div>
          <div className="space-y-6 p-6 lg:p-8">
            <div className="grid gap-3 sm:grid-cols-4">
              <div className="rounded-2xl bg-secondary p-4"><span className="text-muted">درس</span><strong className="mt-1 block">{product.lesson}</strong></div>
              <div className="rounded-2xl bg-secondary p-4"><span className="text-muted">پایه</span><strong className="mt-1 block">{product.grade}</strong></div>
              <div className="rounded-2xl bg-secondary p-4"><span className="text-muted">نوع</span><strong className="mt-1 block">{product.type}</strong></div>
              <div className="rounded-2xl bg-secondary p-4"><span className="text-muted">امتیاز</span><strong className="mt-1 block">⭐ {product.rating}</strong></div>
            </div>

            <div>
              <h2 className="text-2xl font-black">توضیحات محتوا</h2>
              <p className="mt-3 leading-9 text-secondary">{product.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-black">فایل‌های مرتب داخل محصول</h2>
              <div className="mt-4 grid gap-3">
                {sortedFiles.map((file) => (
                  <div key={file.title} className="flex flex-col justify-between gap-3 rounded-3xl border border-base bg-secondary p-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-sm font-black text-white">{file.order}</span>
                      <div>
                        <strong>{file.title}</strong>
                        <p className="mt-1 text-sm text-muted">{file.type} • {file.size}</p>
                      </div>
                    </div>
                    <button className="rounded-2xl border border-primary bg-primary-light-tint px-4 py-2 text-sm font-black text-primary">پیش‌نمایش</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-[2rem] border border-base bg-card p-6 shadow-card lg:sticky lg:top-28">
          <p className="text-sm text-muted">مدرس</p>
          <h2 className="mt-2 text-2xl font-black">{product.teacher}</h2>
          <p className="mt-1 text-secondary">{product.teacherRole}</p>
          <div className="mt-6 space-y-3 rounded-3xl bg-secondary p-4">
            <div className="flex justify-between"><span className="text-muted">بازدید</span><strong>{product.views.toLocaleString("fa-IR")}</strong></div>
            <div className="flex justify-between"><span className="text-muted">خرید</span><strong>{product.sales.toLocaleString("fa-IR")}</strong></div>
            <div className="flex justify-between"><span className="text-muted">آخرین بروزرسانی</span><strong>{product.updatedAt}</strong></div>
            <div className="flex justify-between"><span className="text-muted">حجم/مدت</span><strong>{product.duration}</strong></div>
          </div>
          <div className="mt-6 flex items-end justify-between border-t border-base pt-5">
            <div>
              <p className="text-sm text-muted">قیمت</p>
              <strong className="text-3xl text-primary">{formatPrice(product.price)}</strong>
              {product.oldPrice ? <p className="mt-1 text-sm text-muted line-through">{formatPrice(product.oldPrice)}</p> : null}
            </div>
          </div>
          <button className="mt-6 w-full rounded-2xl bg-primary px-6 py-4 font-black text-white shadow-primary transition hover:-translate-y-1">خرید و دریافت آنلاین</button>
          <Link href="/dashboard/upload" className="mt-3 block rounded-2xl border border-base bg-card px-6 py-4 text-center font-black shadow-card">انتشار فایل مشابه</Link>
        </aside>
      </section>

      {related.length > 0 ? (
        <section className="space-y-6">
          <SectionHeader eyebrow="پیشنهادی" title="محصولات مرتبط همین دسته" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => <ProductCard key={item.id} product={item} />)}
          </div>
        </section>
      ) : null}
    </PageShell>
  );
}
