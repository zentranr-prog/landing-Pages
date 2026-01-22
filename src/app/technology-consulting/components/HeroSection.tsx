import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onScheduleConsultation: () => void;
}

const HeroSection = ({ onScheduleConsultation }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-primary to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent" />
            <span className="text-sm font-heading font-semibold text-white">
              Consultoría Estratégica de Transformación Digital
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Arquitectando el Futuro Digital de su Empresa
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transformamos desafíos empresariales complejos en ventajas tecnológicas estratégicas. Donde el pensamiento estratégico se encuentra con la excelencia técnica para impulsar el crecimiento medible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onScheduleConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-accent text-accent-foreground rounded-md font-heading font-semibold text-base transition-all duration-300 hover:bg-accent/90 hover:shadow-brand hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Agendar Consulta Ejecutiva</span>
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </button>
            <button
              onClick={onScheduleConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-md font-heading font-semibold text-base transition-all duration-300 hover:bg-white/20 hover:border-white/50 flex items-center justify-center space-x-2"
            >
              <span>Evaluación de Madurez Digital</span>
              <Icon name="ChartBarIcon" size={20} variant="outline" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-accent" />
              <span className="text-sm font-heading">15+ Años de Experiencia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="BuildingOfficeIcon" size={24} variant="solid" className="text-accent" />
              <span className="text-sm font-heading">200+ Empresas Transformadas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TrophyIcon" size={24} variant="solid" className="text-accent" />
              <span className="text-sm font-heading">98% Tasa de Éxito</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;