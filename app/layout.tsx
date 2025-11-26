import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import NavBr from "../components/navLink/NavBr";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'], // أو 'arabic' إذا تحتاج العربية
  weight: ['400', '500', '600', '700'], // اختياري: الأوزان التي تريدها
  style: ['normal'], // اختياري
  preload: false // هذا يمنع محاولة التحميل أثناء build
});

export const metadata: Metadata = {
  title: "AAAS",
  description: "Angelic Association Of Anis Saade Empowering Children with Disabilities Since 2002",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={poppins.className}>
        <NavBr />
              {children}
              <Footer />

        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
      </body>

    </html>
  );
}
