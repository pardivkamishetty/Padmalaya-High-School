import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-blue-900 to-primary-blue-800 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Start Your Child's Educational Journey Today
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Join Padmalaya High School and give your child the opportunity to excel academically and personally in a nurturing environment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/admissions#register"
              className="btn bg-secondary-yellow-400 text-primary-blue-900 hover:bg-secondary-yellow-300 px-8 py-3 text-lg"
            >
              Apply for Admission
            </Link>
            <Link
              to="/about"
              className="btn bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;