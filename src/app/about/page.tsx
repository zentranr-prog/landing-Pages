import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import LeadershipSection from './components/LeadershipSection';
import CultureSection from './components/CultureSection';
import TestimonialsSection from './components/TestimonialsSection';
import TimelineSection from './components/TimelineSection';

export const metadata: Metadata = {
  title: 'Sobre ZENTRANR - Liderazgo en Transformación Digital | ZENTRANR Corporate',
  description: 'Conozca a ZENTRANR: 15+ años arquitectando futuros digitales. Nuestro equipo experto combina pensamiento estratégico con excelencia tecnológica para transformar empresas en Perú y Latinoamérica.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <MissionSection />
        <CultureSection />
      </main>

      <Footer />
    </div>
  );
}