import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { events } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const EventsGallery: React.FC = () => {
  // Display only the latest 3 events
  const latestEvents = [...events].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-wrap justify-between items-end mb-12">
          <SectionHeading
            title="Recent Events"
            subtitle="A glimpse of the vibrant activities and events at our school"
          />
          <Link
            to="/events"
            className="inline-flex items-center text-primary-blue-600 hover:text-primary-blue-800 font-medium mt-4 md:mt-0"
          >
            View all events <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {latestEvents.map((event) => (
            <Card key={event.id} image={event.imageUrl} title={event.title}>
              <div className="flex items-center text-gray-500 mb-3">
                <Calendar size={16} className="mr-2" />
                <span>{new Date(event.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <span className="inline-block px-3 py-1 bg-primary-blue-100 text-primary-blue-800 rounded-full text-xs font-medium">
                {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;