import Layout from "@/layout/Layout";
import "./globals.css";
import { yekanFont } from "@/utils/fonts";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekanFont.className}>
        <Layout>{children}</Layout>
        <Toaster position="top-left" reverseOrder={true} />
      </body>
    </html>
  );
}
