import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-primary-foreground/80 text-sm mb-6">
            <span>Inicio</span>
            <Icon name="ChevronRightIcon" size={16} variant="outline" />
            <span className="text-primary-foreground font-medium">Contacto</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            Transformemos Juntos Su Visión Digital
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarle a navegar su transformación digital. Programe una consulta personalizada y descubra cómo ZENTRANR puede impulsar su crecimiento empresarial.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="flex items-center justify-center mb-3">
                <Icon name="ClockIcon" size={32} variant="outline" className="text-accent" />
              </div>
              <div className="text-3xl font-heading font-bold text-primary-foreground mb-1">24h</div>
              <div className="text-sm text-primary-foreground/80">Tiempo de Respuesta</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="flex items-center justify-center mb-3">
                <Icon name="UserGroupIcon" size={32} variant="outline" className="text-accent" />
              </div>
              <div className="text-3xl font-heading font-bold text-primary-foreground mb-1">500+</div>
              <div className="text-sm text-primary-foreground/80">Clientes Satisfechos</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="flex items-center justify-center mb-3">
                <Icon name="StarIcon" size={32} variant="solid" className="text-accent" />
              </div>
              <div className="text-3xl font-heading font-bold text-primary-foreground mb-1">98%</div>
              <div className="text-sm text-primary-foreground/80">Tasa de Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;