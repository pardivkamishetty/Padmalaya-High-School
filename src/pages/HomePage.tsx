import React from 'react';
import Carousel from '../components/ui/Carousel';
import WelcomeSection from '../components/home/WelcomeSection';
import FeaturesSection from '../components/home/FeaturesSection';
import StatsSection from '../components/home/StatsSection';
import EventsGallery from '../components/home/EventsGallery';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import { carouselItems } from '../data';

const HomePage: React.FC = () => {
  return (
    <div>
      <Carousel items={carouselItems} />
      <WelcomeSection />
      <FeaturesSection />
      <StatsSection />
      <EventsGallery />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;