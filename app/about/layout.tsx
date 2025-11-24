import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], // أو 'arabic' إذا تحتاج العربية
  weight: ['400', '500', '600', '700'], // اختياري: الأوزان التي تريدها
  style: ['normal'], // اختياري
});

export const metadata: Metadata = {
  title: "AAAS | About US",
  description: "Two decades of sustainable care and support from Anis Saade Angelic Association for the community.",
};

export default function AboutLayout({
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
