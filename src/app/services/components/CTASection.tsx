import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="50" x2="50" y2="100" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            ¿Listo para Transformar su Negocio?
          </h2>
          <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Agende una consulta gratuita con nuestros expertos y descubra cómo podemos ayudarle a alcanzar sus objetivos tecnológicos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/contact"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-md font-heading font-semibold text-base transition-all duration-300 hover:bg-accent/90 hover:shadow-brand hover:scale-105 active:scale-95 w-full sm:w-auto inline-flex items-center justify-center space-x-2"
            >
              <span>Agendar Consulta Gratuita</span>
              <Icon name="CalendarIcon" size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="ClockIcon" size={32} className="text-accent" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">
                Respuesta en 24 Horas
              </h3>
              <p className="text-sm text-primary-foreground/80">
                Nuestro equipo responderá su consulta en menos de un día hábil
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheckIcon" size={32} className="text-accent" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">
                Sin Compromiso
              </h3>
              <p className="text-sm text-primary-foreground/80">
                Consulta inicial gratuita sin ninguna obligación de contratación
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="UserGroupIcon" size={32} className="text-accent" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">
                Expertos Certificados
              </h3>
              <p className="text-sm text-primary-foreground/80">
                Equipo con certificaciones internacionales y experiencia comprobada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;