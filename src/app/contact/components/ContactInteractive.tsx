'use client';

import React, { useState } from 'react';
import ContactHero from './ContactHero';
import ContactMethods from './ContactMethods';
import ConsultationTypes from './ConsultationTypes';
import ContactFormSection from './ContactFormSection';
import OfficeLocation from './OfficeLocation';
import TrustSignals from './TrustSignals';
import FAQSection from './FAQSection';

const ContactInteractive = () => {
  const [selectedConsultationType, setSelectedConsultationType] = useState<string>('');

  const handleSelectConsultationType = (typeId: string) => {
    setSelectedConsultationType(typeId);
    // Scroll to form section
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <ContactHero />
      <ContactMethods />
      <ConsultationTypes onSelectType={handleSelectConsultationType} />
      <div id="contact-form">
        <ContactFormSection selectedConsultationType={selectedConsultationType} />
      </div>
      <OfficeLocation />
      <FAQSection />
    </>
  );
};

export default ContactInteractive;