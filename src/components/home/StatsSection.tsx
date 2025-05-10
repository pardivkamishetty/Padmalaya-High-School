import React from 'react';
import { Users, Award, Building, BookOpen } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-blue-900 to-primary-blue-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <Users size={48} className="text-secondary-yellow-300" />
            </div>
            <div className="text-4xl font-bold font-display mb-2">1000+</div>
            <div className="text-gray-300">Students</div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <Award size={48} className="text-secondary-yellow-300" />
            </div>
            <div className="text-4xl font-bold font-display mb-2">3</div>
            <div className="text-gray-300">Awards & Recognitions</div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <Building size={48} className="text-secondary-yellow-300" />
            </div>
            <div className="text-4xl font-bold font-display mb-2">25</div>
            <div className="text-gray-300">Years of Excellence</div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <BookOpen size={48} className="text-secondary-yellow-300" />
            </div>
            <div className="text-4xl font-bold font-display mb-2">100%</div>
            <div className="text-gray-300">Board Exam Results</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;