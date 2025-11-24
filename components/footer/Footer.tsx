import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { navLinks } from "@/constant/navLinks";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topBorder}></div>

            <div className={styles.container}>
                {/* Left Section */}
                <div className={styles.left}>
                    <div className={styles.logoWrap}>
                        <Image src="/logo.svg" alt="AAAS Logo" width={50} height={50} />
                        <div>
                            <h2>AAAS</h2>
                            <p>Angelic Association Of Anis Saade</p>
                        </div>
                    </div>

                    <p className={styles.text}>
                        Our Secure Online Donation Platform Allows You To Make
                        Contributions Quickly And Safely. Choose From Various
                    </p>
                </div>

                {/* Links */}
                <div className={styles.links}>
                        <h4>Quick Links</h4>

                        {
                            navLinks.map((ele, index) => {
                                return <Link href={ele.link} key={index} >{ele.title}</Link>
                            })
                        }
                    </div>

                    <div className={styles.links}>
                        <h4>Our Projects</h4>
                        <Link href="/projects">CP</Link>
                        <Link href="/projects">ADAP</Link>
                    </div>

                    <div className={styles.links}>
                        <h4>Locations</h4>
                        <a >Tartous</a>
                        <a >Safita</a>
                        <a >Dreikish</a>
                        <a >Baniyas</a>
                        <a >Ash Shaykh Badr</a>
                        <a >Mashta Al Helou</a>
                    </div>
                    <div className={styles.links}>
                        <h4>Our Values</h4>
                        <a >Humanity</a>
                        <a >Inclusiveness</a>
                        <a >Responsibility</a>
                        <a >Community Solidarity</a>
                        <a >Sustainability</a>
                    </div>
                    {/* Contact */}
                    <div className={styles.links}>
                        <h4>Contact</h4>

                        <div >
                            <Link className={styles.contactRow} href={"mailto:anisssaade@gmail.com"} >
                                <span>
                                    <Image src={'/emailfooter.svg'} alt="email" fill objectFit="cover" />
                                </span>
                                <p>anisssaade@gmail.com</p>
                            </Link>
                        </div>

                        <div className={styles.contactRow}>
                            <span>
                                <Image src={'/Phonefooter.svg'} alt="email" fill objectFit="cover" />
                            </span>
                            <p>018 658 1830</p>
                        </div>

                        <div className={styles.contactRow}>
                            <span>
                                <Image src={'/MapPinfooter.svg'} alt="email" fill objectFit="cover" />
                            </span>
                            <p>Tartous, Syria, P.O. Box 12345</p>
                        </div>

                        <div className={styles.social}>
                            <span>
                                <Link href={"https://www.facebook.com/share/1Dim7bRP1R/"} target="_blank">
                                    <Image src={'/Instagramfooter.svg'} alt="email" fill objectFit="cover" />
                                </Link>
                            </span>
                            <span>
                                <Link target="_blank" href={"https://www.instagram.com/anissaadeassociation?igsh=MXM1bzd3Zm85cWU="} ><Image src={'/Facebookfooter.svg'} alt="email" fill objectFit="cover" /></Link>
                            </span>
                        </div>
                    </div>



            </div>

            <div className={styles.bottomBorder}></div>

            <p className={styles.copy}>
                © 2024 Anis Saadeh Angelic Association. All rights reserved.
            </p>
        </footer>
    );
}
