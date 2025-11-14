

import Image from "next/image";
import './timeline.css'
type Step = {
    id: number;
    title: string;
    description: string;
};

const steps: Step[] = [
    { id: 1, title: "Identify Needs", description: "We assess individual and community needs through careful research and direct engagement." },
    { id: 2, title: "Design Programs", description: "Develop tailored programs with expert input to address specific challenges effectively." },
    { id: 3, title: "Deliver Impact", description: "Implement our services with dedication, ensuring every child receives the care they deserve." },
];

export default function Timeline() {
    return (
        <section className="timeline">
            <div className="inner">
                {/* SVG wavy dashed path */}
                <div className="wave" >
                    <Image src={"/line.svg"} alt="line" fill />
                </div>


                {/* Steps placed along the wave */}
                <div className="steps">
                    {steps.map((s, i) => (
                        <article key={s.id} className={`step step-${i + 1}`}>
                            <span className="marker" aria-hidden>{s.id}</span>
                            <div className={`step-text-${i + 1}`} >
                                <h3 className="title">{s.title}</h3>
                                <p className="desc">{s.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
