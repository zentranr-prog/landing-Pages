import React from 'react';

interface ServiceHeroProps {
  className?: string;
}

const ServiceHero = ({ className = '' }: ServiceHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="50" x2="50" y2="100" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full mb-6">
            <span className="text-accent text-sm font-heading font-semibold">Soluciones Tecnológicas Integrales</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            Transformamos Desafíos Empresariales en Ventajas Tecnológicas
          </h1>
          
          <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Desde desarrollo de software personalizado hasta consultoría estratégica, ofrecemos soluciones tecnológicas que impulsan el crecimiento empresarial y la transformación digital.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#servicios-principales"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-md font-heading font-semibold text-base transition-all duration-300 hover:bg-accent/90 hover:shadow-brand hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Explorar Servicios
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default ServiceHero;