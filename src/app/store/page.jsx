import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import StoreFilters from "@/components/StoreFilters";

export const metadata = {
  title: "فروشگاه فایل آموزشی | آموزش‌مارکت",
};

export default function StorePage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="فروشگاه"
        title="فایل‌ها، محصولات و دوره‌ها بر اساس درس و پایه"
        description="با سرچ و فیلتر درس، پایه، دسته‌بندی و نوع فایل، محتوای مورد نیازت را پیدا کن. روی هر محصول بزن تا فایل‌های مرتب و جزئیات خرید را ببینی."
      />
      <StoreFilters />
    </PageShell>
  );
}
