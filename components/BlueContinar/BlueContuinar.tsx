import { ReactNode } from "react";
import './style.css'

export default function BlueContuinar({children, title} : {children: ReactNode, title: string}) {
  return (
 <section className="impact-section-container">
      <h2 className="impact-title">{title}</h2>
      {children}
    </section>
  )
}
