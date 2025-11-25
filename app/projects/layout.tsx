import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], // أو 'arabic' إذا تحتاج العربية
  weight: ['400', '500', '600', '700'], // اختياري: الأوزان التي تريدها
  style: ['normal'], // اختياري
});

export const metadata: Metadata = {
  title: "AAAS | Projects",
  description: "Our Programs & Community Impact Discover our core programs that provide safe spaces, essential life skills, and long-term support for children and young people across Tartous and surrounding areas. Empowering children, adolescents, and youth through protection, education, and community engagement.",
};

export default function ProjectsLayout({
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
