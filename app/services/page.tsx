import AboutSection from '@/components/aboutSection/AboutSection'
import JoinSection from '@/components/joinSection/JoinSection'
import MainSection from '@/components/MainSection/MainSection'
import Tabs from '@/components/tabs/Tabs'
import TimeLineSection from '@/components/timeLineSection/TimeLineSection'
import React from 'react'

export default function page() {
    return (
        <div>
            <MainSection page='services' firsttext='Comprehensive Care and Education for Every Child.'
                finaltext='At Anis Saadeh Angelic Association, we provide free educational, therapeutic, and medical services for children with disabilities and their families.' />
            <div className="main">
                <AboutSection oneImage="/servicesAbout.jpg" descrabtion='Our dedicated programs create equal opportunities for children with disabilities, fostering growth and independence through comprehensive education, specialized therapies, and critical medical care. We believe every child deserves the chance to thrive and reach their full potential.'
                    title='Empowering Through Service' />
                <h2 className='section-title'>
                    Our Main Services
                </h2>
                <p className='des-text'>
                    At HealthPlus, we are dedicated to providing accessible and comprehensive care to our community. Explore our range of core services designed to support your well-being.
                </p>
                <Tabs />
                <TimeLineSection />
                <JoinSection/>

            </div>
        </div>
    )
}
