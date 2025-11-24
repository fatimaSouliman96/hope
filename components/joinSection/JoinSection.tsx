import './joinSection.css'
import BlueContuinar from '../BlueContinar/BlueContuinar'
import Link from 'next/link'

export default function JoinSection() {
    return (
        <BlueContuinar title='Join Our Effort to Empower Children' >
            <div className='content-join'>
                <p className='text-join'>Together, we build a more inclusive tomorrow.</p>
                <Link className='join-btn' href={"/contact"}>
                    Volunteer with Us
                </Link>
            </div>
        </BlueContuinar>
    )
}
