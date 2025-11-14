import Image from "next/image";
import styles from "./Footer.module.css";

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
                <div className={styles.linksWrapper}>
                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <a href="#">Home</a>
                        <a href="#">About us</a>
                        <a href="#">Services</a>
                        <a href="#">Blog</a>
                    </div>

                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <a href="#">Home</a>
                        <a href="#">About us</a>
                        <a href="#">Services</a>
                        <a href="#">Blog</a>
                    </div>

                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <a href="#">Home</a>
                        <a href="#">About us</a>
                        <a href="#">Services</a>
                        <a href="#">Blog</a>
                    </div>
                    {/* Contact */}
                    <div className={styles.links}>
                        <h4>Contact</h4>

                        <div className={styles.contactRow}>
                            <span>
                                <Image src={'/emailfooter.svg'} alt="email" fill objectFit="cover" />
                            </span>
                            <p>anisssaade@gmail.com</p>
                        </div>

                        <div className={styles.contactRow}>
                            <span>
                                <Image src={'/Phonefooter.svg'} alt="email" fill objectFit="cover" />
                            </span>
                            <p>+963 43 234 567</p>
                        </div>

                        <div className={styles.contactRow}>
                            <span>
                                <Image src={'/MapPinfooter.svg'} alt="email" fill objectFit="cover" />
                            </span>
                            <p>Tartous, Syria, P.O. Box 12345</p>
                        </div>

                        <div className={styles.social}>
                            <span>
                                <Image src={'/Instagramfooter.svg'} alt="email" fill objectFit="cover" />
                            </span>
                            <span><Image src={'/Facebookfooter.svg'} alt="email" fill objectFit="cover" /></span>
                        </div>
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
