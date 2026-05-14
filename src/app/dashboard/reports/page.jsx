import Link from "next/link";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import { activityReports, dashboardStats } from "@/data/mock";

export const metadata = {
  title: "گزارشات محتوا | آموزش‌مارکت",
};

export default function ReportsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="گزارشات"
        title="گزارش بازدید، خرید، درآمد و عملکرد هر محتوا"
        description="این صفحه نمونه‌ای از داشبورد هر شخص است تا مدرس بتواند نتیجه فروش و تعامل کاربران را برای هر فایل ببیند."
        action={<Link href="/dashboard/upload" className="rounded-2xl bg-primary px-5 py-3 font-black text-white shadow-primary">افزودن محتوای جدید</Link>}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-base bg-card p-6 shadow-card">
          <h2 className="text-2xl font-black">عملکرد محصولات</h2>
          <div className="mt-6 overflow-hidden rounded-3xl border border-base">
            <table className="w-full min-w-[620px] text-sm">
              <thead className="bg-secondary text-muted">
                <tr>
                  <th className="p-4 text-right">محتوا</th>
                  <th className="p-4 text-right">بازدید</th>
                  <th className="p-4 text-right">خرید</th>
                  <th className="p-4 text-right">درآمد</th>
                </tr>
              </thead>
              <tbody>
                {activityReports.map((row) => (
                  <tr key={row.title} className="border-t border-base">
                    <td className="p-4 font-black">{row.title}</td>
                    <td className="p-4">{row.views.toLocaleString("fa-IR")}</td>
                    <td className="p-4">{row.sales.toLocaleString("fa-IR")}</td>
                    <td className="p-4 text-primary">{row.revenue} تومان</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-[2rem] border border-base bg-card p-6 shadow-card">
          <h2 className="text-2xl font-black">نمودار فروش ۷ روز اخیر</h2>
          <div className="mt-6 flex h-72 items-end gap-3 rounded-3xl bg-secondary p-5">
            {[45, 68, 52, 81, 60, 95, 74].map((height, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-t-2xl bg-primary" style={{ height: `${height}%` }} />
                <span className="text-xs text-muted">روز {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
