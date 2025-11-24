import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], // أو 'arabic' إذا تحتاج العربية
  weight: ['400', '500', '600', '700'], // اختياري: الأوزان التي تريدها
  style: ['normal'], // اختياري
});

export const metadata: Metadata = {
  title: "AAAS | Services",
  description: "Comprehensive Care and Education for Every Child. At Anis Saadeh Angelic Association, we provide free educational, therapeutic, and medical services for children with disabilities and their families.",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

       <>
        {children}
       </>
    
  );
}
