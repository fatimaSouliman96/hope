"use client"; // مهم جدًا

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import NavBr from "../navLink/NavBr";
import Footer from "@/components/footer/Footer";

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <NavBr />
      {children}
      <Footer />
    </SessionProvider>
  );
}
