import React from 'react';
import { Achievement } from '../../types';
import Card from '../ui/Card';
import { Award, Calendar } from 'lucide-react';

interface AchievementListProps {
  achievements: Achievement[];
  category: 'school' | 'academic';
}

const AchievementList: React.FC<AchievementListProps> = ({ achievements, category }) => {
  if (achievements.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No achievements found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {achievements.map((achievement) => (
        <Card 
          key={achievement.id} 
          image={achievement.imageUrl} 
          title={achievement.title}
        >
          <div className="flex items-center text-gray-500 mb-3">
            <Calendar size={16} className="mr-2" />
            <span>{achievement.year}</span>
          </div>
          <p className="text-gray-600 mb-4">{achievement.description}</p>
          <div className="flex items-center">
            <Award size={16} className="text-secondary-yellow-500 mr-2" />
            <span className="text-primary-blue-800 font-medium">
              {category === 'school' ? 'School Achievement' : 'Academic Excellence'}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AchievementList;