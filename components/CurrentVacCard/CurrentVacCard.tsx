import Image from 'next/image'
import './currentVacCard.css'
import Link from 'next/link'

export default function CurrentVacCard() {
  return (
     <div className='currentVacCard'>
        <div className='image'>
            <Image src={"/pin.svg"} alt='pin' objectFit='cover' fill/>
        </div>
        <ul className='info-card'>
            <li className='info-item'>
                <p className='item-title'>Job Title:</p>
                <p className='item-desc'>Life Skills Trainer</p>
            </li>
            <li className='info-item'>
                <p className='item-title'>Project:</p>
                <p className='item-desc'>ADAP Program</p>
            </li>
            <li className='info-item'>
                <p className='item-title'>📍 Type:</p>
                <p className='item-desc'>Part time</p>
            </li>
            <li className='info-item'>
                <p className='item-title'>📍 Location:</p>
                <p className='item-desc'>Tartous & Rural Areas</p>
            </li>
            <li className='info-item'>
                <p className='item-title'>📍 Deadline:</p>
                <p className='item-desc'> Deadline</p>
            </li>
        </ul>
        <Link href={"/contact"} className='button'>
            Volunteer with Us
        </Link>
    </div>
  )
}
