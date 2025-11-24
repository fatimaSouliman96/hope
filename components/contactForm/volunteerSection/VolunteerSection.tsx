import Image from 'next/image'
import '../style.css'

export default function VolunteerSection() {
    return (
        <section className="volunteer-section-container">
            <div className="container">
                <div className="row align-items-center g-5">

                    <div className="col-lg-7">
                        <div className="volunteer-form-wrapper">
                            <h2>Volunteer Application Form – Anis Saadeh Angelic Association</h2>
                            <p>The Anis Saadeh Angelic Association strives to promote the spirit of humanitarian and community work by engaging individuals of all age groups in volunteer activities that contribute to community development and support for children, adolescents, and youth. Completing this form helps match you with volunteer opportunities that suit your abilities and interests.</p>
                            <form>
                                 <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="Your Email" />
                                    <label htmlFor="floatingInput">Your Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder="Your Name" />
                                    <label htmlFor="floatingPassword">Full Name</label>
                                </div>
                               
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingAge" placeholder="Age" />
                                    <label htmlFor="floatingAge">Age</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingAddress" placeholder="Address" />
                                    <label htmlFor="floatingAddress">Permanent Address</label>
                                </div>
                               
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingExperience" placeholder="Experience" />
                                    <label htmlFor="floatingExperience">Qualifications and previous Experience</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingAvailability" placeholder="Availability" />
                                    <label htmlFor="floatingAvailability">Availability</label>
                                </div>
                               

                                <button type="button" className="send-btn" disabled>
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5 d-none d-lg-block">
                        <div className="volunteer-image-wrapper">
                            <Image src={"/volanteerImg.jpg"} alt='volanteerImg' fill objectFit='cover' />
                            <div className='shape1-conatct' >
                                <Image src={"/shape1-conatct.svg"} alt='shape1-conatct' fill objectFit='cover' />
                            </div>
                            <div className='shape2' >
                                <Image src={"/shape2.svg"} alt='shape2' fill objectFit='cover' />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
