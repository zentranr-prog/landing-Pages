'use client';

import React from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ServicesPreview from './ServicesPreview';
import TechnologyStack from './TechnologyStack';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

const HomepageInteractive = () => {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <TechnologyStack />
      <CTASection />
    </>
  );
};

export default HomepageInteractive;