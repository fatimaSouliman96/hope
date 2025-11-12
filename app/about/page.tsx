import AboutSection from "@/components/aboutSection/AboutSection";
import { CoreValues } from "@/components/coreValues/CoreValues";
import ImpactSection from "@/components/ImpactSection/ImpactSection";
import JoinSection from "@/components/joinSection/JoinSection";
import MainSection from "@/components/MainSection/MainSection";
import ValuedPartners from "@/components/ValuedPartners/ValuedPartners";
import { images1, images2 } from "@/constant/imagesx";


export default function AboutPage() {
    return (
        <div>
            <MainSection page="aboutpage" firsttext="About us" finaltext="Two decades of sustainable care and support from Anis Saade Angelic Association for the community." />
            <div className="main">
                <AboutSection shapes={true} title="Association at a Glance"
                    descrabtion="Founded in 2002 in Kafroun Saadeh – Mashta al-Helou, Tartous Governorate, the Anis Saadeh Angelic Association was established to support children with disabilities and their families.
            Since its inception, the association has become a cornerstone of compassion and community service, offering free education, therapy, and psychosocial support to those in need.

            Adopting a holistic approach, the association integrates education, physiotherapy, psychological care, and medical supervision to foster a safe and nurturing environment for every child.
            In partnership with UNICEF and local organizations, it has implemented key humanitarian projects such as:

            > “Amal” psychosocial support program.

            > Cash Transfers for Children with Disabilities.

            > Adolescent and Youth Engagement .


            Guided by the belief that every child deserves the chance to learn, grow, and thrive, the association continues to bring hope and transformation to over 2000 children across seven regions each year."
                />
                <h1 className="section-title" style={{marginTop:"6rem"}}>Our Vision & Mission</h1>
                <AboutSection
                    shapes={false}
                    aboutPge="aboutPge"
                    title="Our Vision"
                    descrabtion="To create a world where every child with a disability is empowered to reach their full potential, living a life filled with dignity, inclusion, and hope.
                    We believe that every child can learn, grow, and contribute when surrounded by understanding, compassion, and comprehensive care.
                    We envision an inclusive society that embraces diversity and ensures equal opportunities for every child.
                    "
                    links={images1}
                      reverse={"reverse"}
                />
                <AboutSection
                    shapes={false}
                    aboutPge="aboutPge"
                    title="Our Mission"
                    descrabtion="To provide exceptional, free, and holistic services in education, therapy, psychosocial, and medical care for children with disabilities — empowering them to achieve independence, inclusion, and self-confidence.
                    Through teamwork and partnerships with local and international organizations, we strive to create lasting positive impact in the lives of children and their families.
                    We believe that helping one child can transform an entire family — humanity is the heart of our mission.
                    "
                    links={images2}
                  
                />
                <ImpactSection />
                <CoreValues />
                <ValuedPartners />
                <JoinSection />
            </div>
        </div>
    )
}
