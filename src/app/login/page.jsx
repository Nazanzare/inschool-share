import LoginRoleForm from "@/components/LoginRoleForm";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "ورود و انتخاب نقش | آموزش‌مارکت",
};

export default function LoginPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="ورود"
        title="ورود با انتخاب نقش معلم یا دانش‌آموز/دانشجو"
        description="طبق نیاز پروژه، معلم هنگام ورود باید کد مدرسه را وارد کند تا امکان افزودن فایل، قیمت‌گذاری و گزارش‌گیری برای او فعال شود."
      />
      <LoginRoleForm />
    </PageShell>
  );
}
