import "./childProtectionProjecSection.css"
import TabsProjects from '../tabsProjects/TapsProjects'

export default function ChildProtectionProjecSection() {
  return (
    <div className="childProtectionProjecSection">
        <h1 className='section-title'>Child Protection Project (UNICEF Partnership)</h1>
        <p className='des-text'>The Child Protection Project offers safe environments where children can grow emotionally, socially, and mentally supported by trained facilitators, case managers, and caregiver programs.</p>
        <div className="projects-tap">
            <h2 className='section-title'>
                Child Protection services include
            </h2>
            <TabsProjects  />
        </div>
    </div>
  )
}
