import "./ValueCard.css"

export interface CoreValue {
  id: number;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
interface ValueCardProps {
  value: CoreValue;
}

export const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
  const IconComponent = value.icon;

  return (
  <div className="value-card-wrapper">
  <div className="value-card-icon">
    <IconComponent className="icon-component" />
  </div>
  <div className="value-card-content">
    <h3 className="value-card-title">{value.title}</h3>
    <p className="value-card-desc">{value.description}</p>
  </div>
</div>

  );
};
