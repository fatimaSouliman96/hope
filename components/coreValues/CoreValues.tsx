import React from 'react';
import { ValueCard } from './ValueCard';
import { CompassionIcon } from '../icons/CompassionIcon';
import { InclusivenessIcon } from '../icons/InclusivenessIcon';
import { ResponsibilityIcon } from '../icons/ResponsibilityIcon';
import { CommunitySolidarityIcon } from '../icons/CommunitySolidarityIcon';
import { SustainabilityIcon } from '../icons/SustainabilityIcon';
import './CoreValues.css'

export interface CoreValue {
  id: number;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}


const coreValuesData: CoreValue[] = [
  {
    id: 1,
    title: 'Compassion',
    description: 'Respecting human dignity without discrimination.',
    icon: CompassionIcon,
  },
  {
    id: 2,
    title: 'Inclusiveness',
    description: 'Providing services to all those in need, regardless of background or gender.',
    icon: InclusivenessIcon,
  },
  {
    id: 3,
    title: 'Responsibility',
    description: 'Ensuring transparency and accountability in all humanitarian actions.',
    icon: ResponsibilityIcon,
  },
  {
    id: 4,
    title: 'Community Solidarity',
    description: 'Working collectively to support the most vulnerable groups.',
    icon: CommunitySolidarityIcon,
  },
  {
    id: 5,
    title: 'Sustainability',
    description: 'Building long-term initiatives that promote local development.',
    icon: SustainabilityIcon,
  },
];

export const CoreValues: React.FC = () => {
  return (
    <div className="core-values">
      <h2 className="core-values__title">Our Core Values</h2>

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
