"use client";

import { useState } from "react";
import { navLinks } from "@/constant/navLinks";
import Image from "next/image";
import Link from "next/link";
import "./navBr.css";
import { usePathname } from "next/navigation";

export default function NavBr() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-top">
          <Image src={"/logo.svg"} alt="logo" width={62} height={87} />

          <button
            className="menu-btn"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className={open ? "line line1 active" : "line line1"}></span>
            <span className={open ? "line line2 active" : "line line2"}></span>
            <span className={open ? "line line3 active" : "line line3"}></span>
          </button>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map((e, index) => (
            <li
              key={index}
              onClick={() => setOpen(false)}
              className={`link ${pathname === e.link ? "active" : ""}`}
            >
              <Link href={e.link}>{e.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
