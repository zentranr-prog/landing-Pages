import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ServiceHero from './components/ServiceHero';
import ServiceOverview from './components/ServiceOverview';
import TechnologyMatrix from './components/TechnologyMatrix';
import ServiceDetails from './components/ServiceDetails';
import CaseStudies from './components/CaseStudies';
import ProcessFlow from './components/ProcessFlow';
import ProjectEstimator from './components/ProjectEstimator';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Servicios - ZENTRANR Corporate',
  description: 'Portafolio completo de servicios tecnológicos: desarrollo de software personalizado, consultoría TI, implementación de sistemas y laboratorio de innovación para transformación digital empresarial.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        <ServiceHero />
        <ServiceOverview />
        <TechnologyMatrix />
        <ServiceDetails />
        <CaseStudies />
        <ProcessFlow />
        <ProjectEstimator />
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}