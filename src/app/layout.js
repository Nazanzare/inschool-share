import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "آموزش‌مارکت | اشتراک و فروش محتوای آموزشی",
  description:
    "بازار آنلاین برای معلم‌ها، دانش‌آموزان و دانشجویان جهت انتشار، جستجو، خرید و فروش محتوای آموزشی.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
