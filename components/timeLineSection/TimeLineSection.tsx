import React from 'react'
import Timeline from '../Timeline/Timeline'
import './timeLineSection.css'
export default function TimeLineSection() {
  return (
    <div className='timelinesection' >
        <h2 className='section-title' >How We Work: Our Process</h2>
        <p className='des-text'>Our structured approach ensures that every initiative is thoughtfully planned and effectively executed, maximizing our positive impact.</p>
        <Timeline />
        
    </div>
  )
}

