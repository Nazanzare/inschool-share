"use client";

import { useState } from "react";
import { contentTypes, grades, lessons } from "@/data/mock";

const steps = ["اطلاعات اصلی", "فایل‌ها", "قیمت و انتشار"];

export default function UploadContentForm() {
  const [step, setStep] = useState(0);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
      <aside className="rounded-[2rem] border border-base bg-card p-6 shadow-card">
        <h2 className="text-2xl font-black">مراحل افزودن محتوا</h2>
        <div className="mt-6 grid gap-3">
          {steps.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => setStep(index)}
              className={`rounded-3xl p-4 text-right font-black transition ${step === index ? "bg-primary text-white shadow-primary" : "bg-secondary text-secondary"}`}
            >
              {index + 1}. {item}
            </button>
          ))}
        </div>
        <p className="mt-6 rounded-3xl bg-primary-light-tint p-4 text-sm font-bold leading-7 text-primary">
          این فرم برای هر شخص/مدرس است و در نسخه واقعی به آپلودر فایل، ذخیره دیتابیس و پرداخت متصل می‌شود.
        </p>
      </aside>

      <form className="rounded-[2rem] border border-base bg-card p-6 shadow-card">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <span className="text-sm font-black text-primary">{steps[step]}</span>
            <h1 className="mt-2 text-3xl font-black">افزودن فایل یا محتوای آموزشی</h1>
          </div>
          <span className="rounded-full bg-secondary px-4 py-2 text-sm font-bold text-muted">پیش‌نویس ذخیره نشده</span>
        </div>

        {step === 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 font-bold md:col-span-2">
              عنوان محتوا
              <input className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2" placeholder="مثلاً جزوه فصل اول ریاضی دوازدهم" />
            </label>
            <label className="grid gap-2 font-bold">
              پایه
              <select className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2">
                {grades.filter((item) => item !== "همه پایه‌ها").map((grade) => <option key={grade}>{grade}</option>)}
              </select>
            </label>
            <label className="grid gap-2 font-bold">
              درس
              <select className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2">
                {lessons.filter((item) => item !== "همه درس‌ها").map((lesson) => <option key={lesson}>{lesson}</option>)}
              </select>
            </label>
            <label className="grid gap-2 font-bold">
              نوع محتوا
              <select className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2">
                {contentTypes.filter((item) => item !== "همه فایل‌ها").map((type) => <option key={type}>{type}</option>)}
              </select>
            </label>
            <label className="grid gap-2 font-bold">
              کد مدرسه معلم
              <input className="min-h-12 rounded-2xl border border-primary bg-primary-light-tint px-4 outline-none ring-primary transition focus:ring-2" placeholder="SCH-1405-TEH-22" />
            </label>
            <label className="grid gap-2 font-bold md:col-span-2">
              توضیحات
              <textarea className="min-h-32 rounded-2xl border border-base bg-secondary p-4 outline-none ring-primary transition focus:ring-2" placeholder="توضیح بده این فایل برای چه کسی مناسب است..." />
            </label>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-4">
            {['فایل اصلی محتوا', 'فایل پیش‌نمایش رایگان', 'تصویر کاور محصول'].map((label) => (
              <label key={label} className="grid min-h-28 place-items-center rounded-3xl border border-dashed border-primary bg-primary-light-tint p-5 text-center font-black text-primary">
                {label}
                <input type="file" className="mt-3 text-sm" />
              </label>
            ))}
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 font-bold">
              قیمت فروش
              <input className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2" placeholder="مثلاً 240000" />
            </label>
            <label className="grid gap-2 font-bold">
              تخفیف اختیاری
              <input className="min-h-12 rounded-2xl border border-base bg-secondary px-4 outline-none ring-primary transition focus:ring-2" placeholder="مثلاً 20٪" />
            </label>
            <label className="flex items-center gap-3 rounded-2xl bg-secondary p-4 font-bold md:col-span-2">
              <input type="checkbox" className="accent-primary" />
              فایل پس از خرید به‌صورت آنلاین و امن در اختیار خریدار قرار بگیرد.
            </label>
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => setStep((value) => Math.min(value + 1, steps.length - 1))} className="rounded-2xl bg-primary px-6 py-4 font-black text-white shadow-primary">
            مرحله بعد
          </button>
          <button type="button" className="rounded-2xl border border-base bg-card px-6 py-4 font-black shadow-card">
            ذخیره پیش‌نویس
          </button>
        </div>
      </form>
    </div>
  );
}
