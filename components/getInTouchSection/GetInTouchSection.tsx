import Image from 'next/image';
import './getInTouchSection.css'
import FormTouch from '../formTouch/FormTouch';



const ContactSection: React.FC = () => {
    return (
        <section className="contact-section">
            <div className="contact-text">
                <h2 className="contact-title">Get in Touch</h2>

                <div className="contact-container">
                    {/* Left Side */}
                    <div className="contact-info">
                        <h3 className="contact-info-title">Send Us a Message</h3>
                        <p className="contact-info-text">
                            Have questions or want to learn how you can contribute? Please fill out the form below,
                            and we'll get back to you as soon as possible.
                        </p>

                        <ul className="contact-details">
                            <li>
                                <Image width={24} height={24} src={"/email.svg"} alt='email' />
                                <p>
                                    anissasade@gmail.com
                                </p>
                            </li>
                            <li>
                                <Image width={24} height={24} src={"/phone.svg"} alt='phone' />
                                <p>
                                    +963 43 234 567
                                </p>
                            </li>
                            <li>
                                <Image width={24} height={24} src={"/location.svg"} alt='location' />
                                <p>
                                    Kafroun Saadeh - Mashta al-Helou – Tartous, Syria
                                </p>
                            </li>
                        </ul>

                        <div className="contact-follow">
                            <p>Follow us:</p>
                            <div className="social-icons">
                                <a href="#" aria-label="Facebook">
                                    <Image src={"/Facebook.svg"} alt='Facebook' width={24} height={24} />
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <Image src={"/instagram.svg"} alt='Instagram' width={24} height={24} />
                                </a>
                            </div>
                        </div>

                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.746414710991!2d36.102338!3d34.833793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15227c8b5e3db9c9%3A0x2f7415e5bfe5df54!2sMashta%20al%20Helou%2C%20Syria!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                                allowFullScreen
                                loading="lazy"
                                title="Map location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side */}
                    <FormTouch />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

