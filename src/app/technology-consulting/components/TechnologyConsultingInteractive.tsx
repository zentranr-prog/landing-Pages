'use client';

import React, { useState } from 'react';
import HeroSection from './HeroSection';
import ServicesOverview from './ServicesOverview';
import MethodologySection from './MethodologySection';
import MaturityAssessment from './MaturityAssessment';
import CaseStudies from './CaseStudies';
import ROICalculator from './ROICalculator';
import ConsultationCTA from './ConsultationCTA';

const TechnologyConsultingInteractive = () => {
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  const handleScheduleConsultation = () => {
    // Scroll to consultation form
    const consultationSection = document.getElementById('consultation-section');
    if (consultationSection) {
      consultationSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroSection onScheduleConsultation={handleScheduleConsultation} />
      <ServicesOverview />
      <MethodologySection />
      <MaturityAssessment />
      <CaseStudies />
      <ROICalculator />
      <div id="consultation-section">
        <ConsultationCTA />
      </div>
    </>
  );
};

export default TechnologyConsultingInteractive;