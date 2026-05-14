"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { href: "/store", label: "فروشگاه" },
  { href: "/dashboard/upload", label: "افزودن محتوا" },
  { href: "/dashboard/reports", label: "گزارش‌ها" },
  { href: "/login", label: "ورود" },
];

export default function Header() {
  const { isDark, setIsDark } = useTheme();

  return (
    <header className="sticky top-4 z-30 mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-[2rem] border border-base bg-card-85 px-4 py-3 shadow-card backdrop-blur-xl">
      <Link href="/" className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-lg font-black text-white shadow-primary">آ</span>
        <span>
          <strong className="block text-lg">آموزش‌مارکت</strong>
          <small className="text-muted">فروشگاه فایل و محتوای آموزشی</small>
        </span>
      </Link>

      <nav className="hidden items-center gap-6 text-sm font-bold text-secondary lg:flex">
        {navItems.map((item) => (
          <Link key={item.href} className="hover-text-primary" href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsDark((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full border border-base bg-card px-4 py-2 text-sm font-bold text-base shadow-card transition hover:-translate-y-0.5 hover:shadow-primary-light"
          aria-label="تغییر حالت روشن و تاریک"
        >
          <span>{isDark ? "☀️" : "🌙"}</span>
          <span className="hidden sm:inline">{isDark ? "روشن" : "تاریک"}</span>
        </button>
        <Link href="/login" className="rounded-full bg-primary px-5 py-2.5 text-sm font-black text-white shadow-primary transition hover:-translate-y-0.5">
          شروع
        </Link>
      </div>
    </header>
  );
}
