import AboutSection from "../components/aboutSection/AboutSection";
import { CoreValues } from "../components/coreValues/CoreValues";
import ContactSection from "../components/getInTouchSection/GetInTouchSection";
import MainSection from "../components/MainSection/MainSection";
import Projects from "../components/projects/Projects";
import ServicesSection from "../components/servicesSection/ServicesSection";
import VisionMissionSection from "../components/VisionMissionSection/VisionMissionSection"
import ImpactSection from '../components/ImpactSection/ImpactSection'
import ValuedPartners from '../components/ValuedPartners/ValuedPartners'
import Regions from '../components/Regions/Regions'
import JoinSection from "../components/joinSection/JoinSection";

export default function page() {
  return (
    <div >
      <MainSection 
      page={"home"}
      firsttext="Angelic Association Of Anis Saade"
      secondtext="Empowering Children with Disabilities Since 2002"
      finaltext="Providing free education and therapy services to children with special needs in Tartous, Syria"
      button="Explore more"
      />

      <div className="main" >
        <AboutSection 
        shapes={true}
        title="About Our Mission"
        descrabtion={`
                    Founded in 2002, the Anis Saadeh Angelic Association has been a beacon of hope for children with disabilities in Tartous, Syria. Our journey began with a simple yet profound belief: every child deserves the chance to thrive, regardless of their circumstances. We are dedicated to nurturing potential and fostering independence.
               
                    Our mission is to provide comprehensive support, including free education, physical therapy, and medical supervision, ensuring a holistic approach to their development. We believe in creating an inclusive environment where children can learn, grow, and achieve their dreams, surrounded by care and understanding.
                `} />
        <VisionMissionSection />
        <CoreValues />
        <ServicesSection />
        <Projects />
        <ImpactSection />
        <ValuedPartners />
        <Regions />
        <JoinSection />
        <ContactSection />
      </div>

    </div>
  );
}
