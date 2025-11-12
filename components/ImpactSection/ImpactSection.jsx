import React from 'react';
import './ImpactSection.css';
import BlueContuinar from '../BlueContinar/BlueContuinar';

const achievementsData = [
  {
    number: '2000+',
    description: 'Children Served',
  },
  {
    number: '7',
    description: 'Regions Reached',
  },
  {
    number: '5000+',
    description: 'Therapy Sessions Annually',
  },
  {
    number: '22',
    description: 'Years of Service',
  },
];

const AchievementCard = ({ number, description }) => {
  return (
    <div className="achievement-card">
      <div className="card-number">{number}</div>
      <p className="card-description">{description}</p>
    </div>
  );
};

const ImpactSection = () => {
  return (
    <BlueContuinar title='Impact & Achievements'>
      <div className="achievements-grid">
        {achievementsData.map((achievement, index) => (
          <AchievementCard
            key={index}
            number={achievement.number}
            description={achievement.description}
          />
        ))}
      </div>
    </BlueContuinar>


  );
};

export default ImpactSection;