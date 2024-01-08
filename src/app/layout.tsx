import "./globals.css";
import { yekanFont } from "@/utils/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekanFont.className}>{children}</body>
    </html>
  );
}
