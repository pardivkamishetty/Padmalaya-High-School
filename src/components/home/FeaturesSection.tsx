import React from 'react';
import { 
  Lightbulb, 
  BookOpen, 
  Users, 
  MapPin, 
  Award, 
  Activity 
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const features = [
  {
    icon: <Lightbulb size={36} className="text-secondary-yellow-500" />,
    title: 'Innovative Teaching',
    description: 'Interactive and modern teaching methods that make learning engaging and effective.'
  },
  {
    icon: <BookOpen size={36} className="text-secondary-yellow-500" />,
    title: 'Comprehensive Curriculum',
    description: 'Balanced curriculum focusing on academics, arts, sports, and character development.'
  },
  {
    icon: <Users size={36} className="text-secondary-yellow-500" />,
    title: 'Experienced Faculty',
    description: 'Highly qualified and dedicated teachers committed to student success.'
  },
  {
    icon: <MapPin size={36} className="text-secondary-yellow-500" />,
    title: 'Modern Infrastructure',
    description: 'State-of-the-art facilities including smart classrooms, labs, and sports complex.'
  },
  {
    icon: <Award size={36} className="text-secondary-yellow-500" />,
    title: 'Excellence Tradition',
    description: 'Consistent record of academic achievements and extracurricular excellence.'
  },
  {
    icon: <Activity size={36} className="text-secondary-yellow-500" />,
    title: 'Holistic Development',
    description: 'Focus on overall development through various activities and programs.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Why Choose Padmalaya"
          subtitle="What sets us apart from other educational institutions"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3 text-primary-blue-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;