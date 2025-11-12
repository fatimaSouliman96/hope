import Tabs from '../tabs/Tabs'
import './servicesSection.css'

export default function ServicesSection() {
  return (
    <div className="services" >
        <h2 className='section-title'>Our Main Services</h2>
        <Tabs currentTab='Free Education' options={[ "Free Education" , "Physical Therapy" , "Medical Supervision" , "Ambulance Service"]} />
    </div>
  )
}
