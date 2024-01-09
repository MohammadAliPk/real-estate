import Layout from "@/layout/Layout";
import "./globals.css";
import { yekanFont } from "@/utils/fonts";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/providers/NextAuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekanFont.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
          <Toaster position="top-left" reverseOrder={true} />
        </NextAuthProvider>
      </body>
    </html>
  );
}
