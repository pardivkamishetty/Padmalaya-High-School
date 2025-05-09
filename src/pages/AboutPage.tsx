import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { faculty, buildings } from '../data';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-blue-900 to-primary-blue-800 py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-100">
              Learn about our history, mission, and the team behind Padmalaya High School
            </p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Our History" 
                subtitle="The journey of Padmalaya High School since its inception"
              />
              <div className="text-gray-600 space-y-4">
                <p className="text-lg">
                  Founded in 2001, Padmalaya High School has grown from humble beginnings to become one of the most respected educational institutions in the region.
                </p>
                <p>
                  The school was established with a vision to provide quality education that balances academic excellence with character development. Over the years, we have consistently upheld this vision, adapting to changing educational needs while maintaining our core values.
                </p>
                <p>
                  Our commitment to holistic education has resulted in generations of successful students who have gone on to excel in various fields and contribute positively to society.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-yellow-200 rounded-tl-3xl z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-blue-100 rounded-br-3xl z-0"></div>
              <img 
                src="https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/2%20SCHOOL%20BUILDING%20PHOTOS/Main%20branch%20.JPG?updatedAt=1746513018516" 
                alt="School building" 
                className="rounded-lg shadow-custom-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Mission & Vision" 
            subtitle="Guiding principles that drive our educational approach"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary-blue-600">
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary-blue-900">Our Mission</h3>
              <p className="text-gray-600">
                To provide a supportive and challenging educational environment that encourages students to achieve their full potential academically, personally, and socially. We strive to develop responsible global citizens who are lifelong learners and critical thinkers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary-yellow-400">
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary-blue-900">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a center of excellence in education that nurtures well-rounded individuals equipped with the knowledge, skills, and values necessary to thrive in a rapidly changing world and make meaningful contributions to society.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Faculty Section */}
<section className="py-16 bg-white">
  <div className="container-custom">
    <SectionHeading 
      title="Our Leadership Team" 
      subtitle="Meet the dedicated educators guiding Padmalaya High School"
      centered
    />
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {faculty.map((member) => (
        <div key={member.id} className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 overflow-hidden">
            <img 
              src={member.imageUrl} 
              alt={member.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-display text-xl font-semibold text-primary-blue-900">{member.name}</h3>
            <p className="text-primary-blue-700 font-medium mb-2">{member.position}</p>
            {member.position === 'Principal' && (
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-medium">Principal's Message:</span> “At Padmalaya High School, we focus on academic excellence along with the overall development of every child. We believe in nurturing creativity, discipline, and leadership qualities in our students. Our dedicated teachers, supportive environment, and modern teaching methods ensure that every student reaches their highest potential.”
                <br />— Principal, Padmalaya High School
              </p>
            )}
            {member.position === 'Correspondent' && (
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-medium">Correspondent's Message:</span> “Education is the most powerful tool to shape a better future. Padmalaya High School was started with a vision to provide quality education along with strong moral values. Our aim is to create responsible, confident, and compassionate individuals who can contribute positively to society.”
                <br />— Correspondent, Padmalaya High School
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Infrastructure Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Campus" 
            subtitle="Explore the facilities and infrastructure at Padmalaya High School"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {buildings.map((building) => (
              <Card 
                key={building.id} 
                image={building.imageUrl} 
                title={building.name}
              >
                <p className="text-gray-600 mb-4">{building.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary-blue-800">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {building.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="h-2 w-2 bg-secondary-yellow-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Contact Us" 
            subtitle="Get in touch with Padmalaya High School"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <div className="bg-white shadow-md rounded-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-display font-semibold mb-6 text-primary-blue-900">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-primary-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">
                        Srinivasa Colony Park, near maisamma temple, Srinivasa Colony, Mahbubnagar, Telangana 509001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">91 9441725960</p>
                    </div>
                  </div>
                  <Phone className="text-primary-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Main Branch</h5>
                    <p className="text-gray-600">+91 9676967638</p>
                  </div>

                  <Phone className="text-primary-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Second Branch</h5>
                    <p className="text-gray-600"> +91 9676967681</p>
                  </div>

                  
                  
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 mb-4">School Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>8:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5076004516204!2d78.02576197461367!3d16.75140302081604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca2f5641dfeb73%3A0x5ee319999a1a947a!2sPadmalaya%20High%20school%20(New%20Branch)!5e0!3m2!1sen!2sin!4v1746797616514!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '400px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;