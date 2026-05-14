"use client";

import { useState } from "react";
import Link from "next/link";
import { roles } from "@/data/mock";

export default function LoginRoleForm() {
  const [role, setRole] = useState("student");

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] border border-base bg-card p-6 shadow-card">
        <h2 className="text-2xl font-black">اول نقش خودت را انتخاب کن</h2>
        <p className="mt-3 leading-8 text-secondary">
          دانش‌آموز/دانشجو برای خرید و ذخیره محتوا وارد می‌شود. معلم برای انتشار محتوا باید کد مدرسه یا کد سازمانی خود را وارد کند.
        </p>
        <div className="mt-6 grid gap-3">
          {roles.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setRole(item.id)}
              className={`rounded-3xl border p-5 text-right transition hover:-translate-y-1 ${role === item.id ? "border-primary bg-primary-light-soft shadow-primary-light" : "border-base bg-secondary"}`}
            >
              <span className="text-3xl">{item.icon}</span>
              <strong className="mt-3 block text-xl">{item.title}</strong>
              <span className="mt-2 block text-sm leading-7 text-muted">{item.description}</span>
            </button>
          ))}
        </div>
      </div>

      <form className="rounded-[2rem] border border-base bg-card p-6 shadow-card">
        <div className="mb-6">
          <span className="text-sm font-black text-primary">ورود آزمایشی</span>
          <h1 className="mt-2 text-3xl font-black">ورود به آموزش‌مارکت</h1>
          <p className="mt-3 text-secondary">این فرم فعلاً UI است و داده‌ها برای نمایش مسیر کاربر mock هستند.</p>
        </div>

        <div className="grid gap-4">
          <label className="grid gap-2 font-bold">
            شماره موبایل یا ایمیل
            <input className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2" placeholder="مثلاً 09120000000" />
          </label>
          <label className="grid gap-2 font-bold">
            رمز عبور
            <input type="password" className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2" placeholder="رمز عبور" />
          </label>
          {role === "teacher" ? (
            <label className="grid gap-2 font-bold">
              کد مدرسه / کد سازمانی معلم
              <input className="min-h-12 rounded-2xl border border-primary bg-primary-light-tint px-4 outline-none ring-primary transition focus:ring-2" placeholder="مثلاً SCH-1405-TEH-22" />
              <span className="text-xs leading-6 text-muted">بدون کد مدرسه، حساب معلم فقط به‌صورت محدود فعال می‌شود.</span>
            </label>
          ) : null}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href={role === "teacher" ? "/dashboard/upload" : "/store"} className="rounded-2xl bg-primary px-6 py-4 text-center font-black text-white shadow-primary transition hover:-translate-y-1">
            ورود به عنوان {role === "teacher" ? "معلم" : "دانش‌آموز/دانشجو"}
          </Link>
          <Link href="/store" className="rounded-2xl border border-base bg-card px-6 py-4 text-center font-black shadow-card transition hover:-translate-y-1">
            ورود مهمان
          </Link>
        </div>
      </form>
    </div>
  );
}
