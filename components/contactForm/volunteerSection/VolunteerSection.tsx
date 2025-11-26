import Image from 'next/image'
import '../style.css'
import Link from 'next/link'

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
                                <Link href={""} className="send-btn" >
                                    volunteer with us
                                </Link>
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
