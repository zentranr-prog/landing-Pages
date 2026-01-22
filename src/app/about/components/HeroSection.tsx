import React from 'react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-secondary to-accent py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">Transformando el Futuro Digital</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Donde el Pensamiento Estratégico Encuentra la Excelencia Tecnológica
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            ZENTRANR combina claridad zen con transformación tecnológica, arquitectando futuros digitales que impulsan el crecimiento empresarial medible.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">15+ Años de Experiencia</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">200+ Proyectos Exitosos</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">98% Satisfacción Cliente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;