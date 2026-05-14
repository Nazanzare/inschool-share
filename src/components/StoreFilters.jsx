"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { categories, contentTypes, grades, lessons, products } from "@/data/mock";

const initialFilters = {
  query: "",
  category: "all",
  grade: "همه پایه‌ها",
  lesson: "همه درس‌ها",
  type: "همه فایل‌ها",
};

export default function StoreFilters() {
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category && categories.some((item) => item.slug === category)) {
      setFilters((current) => ({ ...current, category }));
    }
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const queryText = `${product.title} ${product.lesson} ${product.grade} ${product.teacher} ${product.type}`.toLowerCase();
      const matchesQuery = queryText.includes(filters.query.trim().toLowerCase());
      const matchesCategory = filters.category === "all" || product.category === filters.category;
      const matchesGrade = filters.grade === "همه پایه‌ها" || product.grade === filters.grade;
      const matchesLesson = filters.lesson === "همه درس‌ها" || product.lesson === filters.lesson;
      const matchesType = filters.type === "همه فایل‌ها" || product.type === filters.type;
      return matchesQuery && matchesCategory && matchesGrade && matchesLesson && matchesType;
    });
  }, [filters]);

  function updateFilter(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-base bg-card p-4 shadow-card">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <input
            value={filters.query}
            onChange={(event) => updateFilter("query", event.target.value)}
            placeholder="جستجو: نام درس، پایه، عنوان فایل یا نام مدرس..."
            className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2"
          />
          <select value={filters.grade} onChange={(event) => updateFilter("grade", event.target.value)} className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2">
            {grades.map((grade) => <option key={grade}>{grade}</option>)}
          </select>
          <select value={filters.lesson} onChange={(event) => updateFilter("lesson", event.target.value)} className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2">
            {lessons.map((lesson) => <option key={lesson}>{lesson}</option>)}
          </select>
          <select value={filters.type} onChange={(event) => updateFilter("type", event.target.value)} className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2">
            {contentTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            type="button"
            onClick={() => updateFilter("category", "all")}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-black transition ${filters.category === "all" ? "bg-primary text-white" : "bg-secondary text-secondary"}`}
          >
            همه دسته‌ها
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => updateFilter("category", category.slug)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-black transition ${filters.category === category.slug ? "bg-primary text-white" : "bg-secondary text-secondary"}`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-3xl bg-secondary p-4">
        <strong>{filteredProducts.length.toLocaleString("fa-IR")} فایل پیدا شد</strong>
        <button type="button" onClick={() => setFilters(initialFilters)} className="text-sm font-black text-primary">
          پاک کردن فیلترها
        </button>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-base bg-card p-10 text-center shadow-card">
          <h3 className="text-2xl font-black">موردی پیدا نشد</h3>
          <p className="mt-3 text-muted">فیلترها را تغییر دهید یا عبارت جستجو را کوتاه‌تر کنید.</p>
        </div>
      )}
    </div>
  );
}
