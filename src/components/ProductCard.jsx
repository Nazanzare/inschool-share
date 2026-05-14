import Link from "next/link";
import { formatPrice } from "@/data/mock";

export default function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-base bg-card shadow-card transition hover:-translate-y-2 hover:shadow-primary-light">
      <Link href={`/store/${product.slug}`} className={`block h-40 bg-gradient-to-br ${product.cover} p-4`}>
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-violet-700">{product.type}</span>
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="rounded-full bg-primary-light-soft px-3 py-1 text-primary">{product.lesson}</span>
          <span className="rounded-full bg-secondary px-3 py-1 text-muted">{product.grade}</span>
        </div>
        <Link href={`/store/${product.slug}`} className="block min-h-14 text-lg font-black leading-7 hover-text-primary">
          {product.title}
        </Link>
        <p className="text-sm text-muted">{product.teacher} • {product.teacherRole}</p>
        <div className="grid grid-cols-3 gap-2 text-center text-xs text-muted">
          <span className="rounded-2xl bg-secondary p-2">👁 {product.views.toLocaleString("fa-IR")}</span>
          <span className="rounded-2xl bg-secondary p-2">🛒 {product.sales.toLocaleString("fa-IR")}</span>
          <span className="rounded-2xl bg-secondary p-2">⭐ {product.rating}</span>
        </div>
        <div className="flex items-center justify-between border-t border-base pt-4">
          <strong className="text-primary">{formatPrice(product.price)}</strong>
          <Link href={`/store/${product.slug}`} className="rounded-2xl bg-primary px-4 py-2 text-sm font-black text-white transition group-hover:bg-primary-dark">
            مشاهده فایل‌ها
          </Link>
        </div>
      </div>
    </article>
  );
}
