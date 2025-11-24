import ContactForm from '@/components/contactForm/ContactForm'
import MainSection from '@/components/MainSection/MainSection'
import VolunteerSection from '@/components/contactForm/volunteerSection/VolunteerSection'
import React from 'react'

export default function contactPage() {

    return (
        <div>
            <MainSection page='contact-page' firsttext='Contact us' />
            <ContactForm />
            <VolunteerSection />
        </div>
    )
}
