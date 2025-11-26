import Image from "next/image";
import "./ValueCard.css"

export interface CoreValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}
interface ValueCardProps {
  value: CoreValue;
}

export const ValueCard: React.FC<ValueCardProps> = ({ value }) => {


  return (
  <div className="value-card-wrapper">
  <div className="value-card-icon">
    <Image src={value.icon} alt={value.title} fill objectFit="cover" className="icon-component" />
  </div>
  <div className="value-card-content">
    <h3 className="value-card-title">{value.title}</h3>
    <p className="value-card-desc">{value.description}</p>
  </div>
</div>

  );
};
