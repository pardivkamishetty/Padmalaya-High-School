import React, { useState } from 'react';
import { Calendar, Tag } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import FilterSection from '../components/ui/FilterSection';
import { events } from '../data';

const years = [...new Set(events.map(event => event.year))].sort((a, b) => b - a);
const categories = [...new Set(events.map(event => event.category))];

const EventsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredEvents = events.filter(event => 
    (selectedYear === 'all' || event.year.toString() === selectedYear) &&
    (selectedCategory === 'all' || event.category === selectedCategory)
  );

  const yearOptions = [
    { value: 'all', label: 'All Years' },
    ...years.map(year => ({ value: year.toString(), label: year.toString() }))
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    ...categories.map(category => ({ 
      value: category, 
      label: category.charAt(0).toUpperCase() + category.slice(1) 
    }))
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-blue-900 to-primary-blue-800 py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              School Events
            </h1>
            <p className="text-xl text-gray-100">
              Explore the vibrant activities and events that make Padmalaya High School a dynamic learning environment
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading 
              title="School Events" 
              subtitle="From cultural festivities to academic competitions, discover the diverse events that shape our school community"
            />
          </div>
          
          {/* Filters */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FilterSection 
              title="Filter by Year"
              options={yearOptions}
              selected={selectedYear}
              onChange={setSelectedYear}
            />
            
            <FilterSection 
              title="Filter by Category"
              options={categoryOptions}
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
          
          {/* Event Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card 
                key={event.id} 
                image={event.imageUrl} 
                title={event.title}
              >
                <div className="flex items-center text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center">
                  <Tag size={16} className="text-secondary-yellow-500 mr-2" />
                  <span className="inline-block px-3 py-1 bg-primary-blue-100 text-primary-blue-800 rounded-full text-xs font-medium">
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No events found for the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;