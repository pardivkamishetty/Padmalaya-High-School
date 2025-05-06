import React, { useState } from 'react';
import { Calendar, Award, Trophy } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import FilterSection from '../components/ui/FilterSection';
import { achievements } from '../data';

const years = [...new Set(achievements.map(a => a.year))].sort((a, b) => b - a);

const SchoolAchievementsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  
  const filteredAchievements = achievements.filter(achievement => 
    achievement.category === 'school' && 
    (selectedYear === 'all' || achievement.year.toString() === selectedYear)
  );

  const yearOptions = [
    { value: 'all', label: 'All Years' },
    ...years.map(year => ({ value: year.toString(), label: year.toString() }))
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-blue-900 to-primary-blue-800 py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              School Achievements
            </h1>
            <p className="text-xl text-gray-100">
              Celebrating excellence and recognition in various fields over the years
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading 
              title="Our Recognitions" 
              subtitle="Padmalaya High School has garnered numerous accolades through the dedication of our students, faculty, and staff"
            />
          </div>
          
          {/* Filters */}
          <div className="mb-12">
            <FilterSection 
              title="Filter by Year"
              options={yearOptions}
              selected={selectedYear}
              onChange={setSelectedYear}
            />
          </div>
          
          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAchievements.map((achievement) => (
              <Card 
                key={achievement.id} 
                image={achievement.imageUrl} 
                title={achievement.title}
              >
                <div className="flex items-center text-gray-500 mb-3">
                  <Award size={16} className="mr-2" />
                  <span>{achievement.year}</span>
                </div>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <div className="flex items-center">
                  <Trophy size={16} className="text-secondary-yellow-500 mr-2" />
                  <span className="text-primary-blue-800 font-medium">Institution Achievement</span>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredAchievements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No achievements found for the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolAchievementsPage;