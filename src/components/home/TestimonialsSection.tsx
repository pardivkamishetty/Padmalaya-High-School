import React from 'react';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    id: 1,
    quote: "Padmalaya High School provided my child with a perfect balance of academics and extracurricular activities. The teachers are incredibly supportive and dedicated to student success.",
    name: "Priya Sharma",
    role: "Parent",
    imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    quote: "As an alumnus, I can confidently say that the values and education I received at Padmalaya shaped my future positively. The school's emphasis on character building alongside academics is commendable.",
    name: "Rajesh Kumar",
    role: "Alumni (2015)",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    quote: "The infrastructure and teaching methodology at Padmalaya are exceptional. My daughter loves going to school every day, which is a testament to the positive environment they've created.",
    name: "Lakshmi Rao",
    role: "Parent",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="What Parents & Alumni Say"
          subtitle="Hear from our community about their experience with Padmalaya High School"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gradient-to-br from-primary-blue-50 to-primary-blue-100 p-8 rounded-xl shadow-sm relative"
            >
              <div className="absolute top-8 left-8 text-primary-blue-300 opacity-30">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C6.68 8 4 10.68 4 14v10h10V14H7c0-1.66 1.34-3 3-3V8zm18 0c-3.32 0-6 2.68-6 6v10h10V14h-7c0-1.66 1.34-3 3-3V8z" />
                </svg>
              </div>
              <div className="pt-8 pb-4 px-2">
                <p className="text-gray-700 italic mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center mt-4">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;