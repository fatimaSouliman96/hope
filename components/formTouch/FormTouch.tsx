import Image from 'next/image'
import './formTouch.css'

export default function FormTouch() {
    return (
        <div className="contact-form">
            <div className='header-contact'>
                     <Image src={'/logo.svg'} alt="logo" width={50} height={50} />
                <h3 className="form-title">Send Us a Message</h3>
           
            </div>
            <div className="line"></div>
            <form>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Your Name"/>
                        <label htmlFor="floatingPassword">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Your Email"/>
                        <label htmlFor="floatingInput">Your Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Phone Number"/>
                        <label htmlFor="floatingInput">Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea  className="form-control " id="floatingInput" placeholder="Your Message"/>
                        <label htmlFor="floatingInput">Your Message</label>
                </div>

                <button type="button" className="send-btn" disabled>
                    Send message
                </button>
            </form>
        </div>
    )
}
