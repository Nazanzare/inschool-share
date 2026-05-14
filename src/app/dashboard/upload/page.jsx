import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import UploadContentForm from "@/components/UploadContentForm";

export const metadata = {
  title: "افزودن فایل آموزشی | آموزش‌مارکت",
};

export default function UploadPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="پنل مدرس"
        title="صفحه افزودن فایل و محتوا برای هر شخص"
        description="معلم یا تولیدکننده محتوا می‌تواند عنوان، پایه، درس، نوع فایل، کد مدرسه، فایل اصلی، پیش‌نمایش و قیمت را وارد کند."
      />
      <UploadContentForm />
    </PageShell>
  );
}
