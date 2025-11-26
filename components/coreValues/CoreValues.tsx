import { ValueCard } from './ValueCard';
import './CoreValues.css'

export interface CoreValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}


const coreValuesData: CoreValue[] = [
  {
    id: 1,
    title: 'Compassion',
    description: 'Respecting human dignity without discrimination.',
    icon: '/icon1.svg',
  },
  {
    id: 2,
    title: 'Inclusiveness',
    description: 'Providing services to all those in need, regardless of background or gender.',
    icon:  '/icon2.svg',
  },
  {
    id: 3,
    title: 'Responsibility',
    description: 'Ensuring transparency and accountability in all humanitarian actions.',
    icon:  '/icon2.svg',
  },
  {
    id: 4,
    title: 'Community Solidarity',
    description: 'Working collectively to support the most vulnerable groups.',
    icon: '/icon3.svg',
  },
  {
    id: 5,
    title: 'Sustainability',
    description: 'Building long-term initiatives that promote local development.',
    icon:  '/icon4.svg',
  },
];

export const CoreValues: React.FC = () => {
  return (
    <div className="core-values">
      <h2 className="section-title">Our Core Values</h2>

      <div className="core-values__wrapper">


        <div className="core-values__grid">
          {coreValuesData.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
};
