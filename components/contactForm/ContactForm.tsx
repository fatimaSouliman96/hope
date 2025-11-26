import Image from 'next/image'
import './style.css'
import FormTouch from '../formTouch/FormTouch'

export default function ContactForm() {
    return (

            <div className="container contactForm ">
                <div className="card contact-card">
                    <div className="row g-0">
                
                        <div className="col-lg-5 left-side">
                            <div className="contact-info-wrapper">
                                <h3>Contact information</h3>
                                <p>We warmly welcome you to reach out to us by phone, email, or social media. You can also become part of our volunteer family and help support children with disabilities in Tartous — together, we make a real difference in people's lives.</p>
                                <div className="info-item">
                                    <Image width={24} height={24} src={"/email.svg"} alt='email' />
                                    <span>anissaade@gmail.com</span>
                                </div>
                                <div className="info-item">
                                     <Image width={24} height={24} src={"/phone.svg"} alt='phone' />
                                    <span>018 658 1830</span>
                                </div>
                                <div className="info-item">
                                   <Image width={24} height={24} src={"/location.svg"} alt='location' />
                                    <span>Kafroun Saadeh - Mashta al-Helou - Tartous, syria</span>
                                </div>
                                <div className="mt-4">
                                    <h5>Follow us:</h5>
                                    <div className="social-icons">
                                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                 
                      <FormTouch />
                    </div>
                </div>
            </div>

    )
}
