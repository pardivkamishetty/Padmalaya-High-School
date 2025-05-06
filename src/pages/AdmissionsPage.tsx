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
              <div className="text-gray-600 space-y-4">
                <p>
                  Padmalaya High School offers a comprehensive educational experience that focuses on academic excellence while nurturing the overall development of every student.
                </p>
                <p>
                  Our admission process is designed to identify students who will thrive in our challenging and supportive environment. We look for curious minds, creative thinkers, and young individuals with the potential to become future leaders.
                </p>
                <p>
                  Explore our admission requirements and process below, and don't hesitate to contact our admissions office if you have any questions.
                </p>
              </div>
              
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