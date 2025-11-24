import AboutSection from '@/components/aboutSection/AboutSection'
import ChildProtectionProjecSection from '@/components/ChildProtectionProjecsection/ChildProtectionProjecSection'
import MainSection from '@/components/MainSection/MainSection'
import TeamStructure from '@/components/TeamStructure/TeamStructure'
import SwiperCurrentVac from '@/components/swiperCurrentVac/swiperCurrentVac'
import Regions from '@/components/Regions/Regions'

export default function projectPage() {
  return (
    <div>
      <MainSection page='projects-page' firsttext='Our Programs & Community Impact'
        secondtext='Discover our core programs that provide safe spaces, essential life skills, and long-term support for children and young people across Tartous and surrounding areas.'
        finaltext='Empowering children, adolescents, and youth through protection, education, and community engagement.' />
      <div className="main">
        <AboutSection oneImage="/projectabout.jpg" descrabtion='Empowering Through Service
Our dedicated programs create equal opportunities for children with disabilities, fostering growth and independence through comprehensive education, specialized therapies, and critical medical care. We believe every child deserves the chance to thrive and reach their full potential.'
          title='Creating Safe, Supportive, and Inclusive Opportunities' />
         
      </div>
       <ChildProtectionProjecSection />
       <div className="main">
        <TeamStructure />
        <SwiperCurrentVac />
        <Regions />
        
       </div>
    </div>
  )
}
