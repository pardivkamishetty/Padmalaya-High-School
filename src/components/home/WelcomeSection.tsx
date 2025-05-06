import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Welcome to Padmalaya High School" 
              subtitle="Where education meets excellence and character"
            />
            <div className="text-gray-600 space-y-4">
              <p className="text-lg">
                At Padmalaya High School, we believe in nurturing not just academic excellence, but also the overall development of our students. Our commitment to quality education and character building has made us one of the leading educational institutions in the region.
              </p>
              <p>
                Founded in 2001, we have consistently maintained high standards of education, combining traditional values with modern teaching methodologies. Our experienced faculty and state-of-the-art infrastructure create the perfect environment for learning and growth.
              </p>
              <p>
                We focus on developing critical thinking, creativity, and leadership skills in our students, preparing them for future challenges and opportunities.
              </p>
              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center text-primary-blue-600 hover:text-primary-blue-800 font-medium">
                  Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-yellow-200 rounded-tl-3xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-blue-100 rounded-br-3xl z-0"></div>
            <img 
              src="https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/2%20SCHOOL%20BUILDING%20PHOTOS/WhatsApp%20Image%202025-05-06%20at%2013.16.30_837e79d2.jpg?updatedAt=1746542221632" 
              alt="Students in classroom" 
              className="rounded-lg shadow-custom-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;