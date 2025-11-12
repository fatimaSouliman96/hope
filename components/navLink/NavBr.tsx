"use client"
import { navLinks } from "@/constant/navLinks";
import Image from "next/image";
import Link from "next/link";
import './navBr.css'
import { usePathname } from "next/navigation";

export default function NavBr() {
    const pathname = usePathname()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image src={'/logo.svg'} alt="logo" width={62} height={87} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            navLinks.map((e, index) => {
                                return <li key={index}
                                    className={`nav-item ${pathname === e.link ? "active" : ""} `}
                                >
                                    <Link className="nav-link" aria-current="page" href={e.link}>
                                        {e.title}
                                    </Link>
                                </li>

                            })
                        }
                    </ul>

                </div>
            </div>
        </nav>
    )
}
