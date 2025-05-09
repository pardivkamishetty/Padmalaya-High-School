import React from 'react';
import { Element } from 'react-scroll';
import SectionHeading from '../components/ui/SectionHeading';
import RequirementsSection from '../components/admissions/RequirementsSection';
import RegistrationForm from '../components/admissions/RegistrationForm';

const AdmissionsPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-blue-900 to-primary-blue-800 py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Admissions
            </h1>
            <p className="text-xl text-gray-100">
              Begin your child's journey at Padmalaya High School and provide them with the foundation for a successful future.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Join Our Community" 
                subtitle="We welcome students who are eager to learn and grow in a supportive environment"
              />
             
              
              <div className="mt-8">
                <RequirementsSection />
              </div>
            </div>
            
            <Element name="register" className="scroll-mt-32">
              <div>
                <SectionHeading 
                  title="Register for Admission" 
                  subtitle="Fill out the form below to start the admission process"
                />
                <RegistrationForm />
              </div>
            </Element>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;