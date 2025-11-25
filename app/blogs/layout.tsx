import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], // أو 'arabic' إذا تحتاج العربية
  weight: ['400', '500', '600', '700'], // اختياري: الأوزان التي تريدها
  style: ['normal'], // اختياري
});

export const metadata: Metadata = {
  title: "AAAS | Blogs",
  description: "The Anis Saadeh Angelic Association Blog A space to share our stories, achievements, and community impact.",
};

export default function BlogsLayout({
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
