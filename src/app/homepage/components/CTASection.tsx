import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-r from-primary via-accent to-primary ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="RocketLaunchIcon" size={20} variant="solid" className="text-white" />
            <span className="text-sm font-heading font-semibold text-white">Comience su Transformación Digital</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            ¿Listo para Transformar su Negocio con Tecnología de Vanguardia?
          </h2>

          <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Agende una consultoría gratuita con nuestros expertos y descubra cómo podemos ayudarle a alcanzar sus objetivos de transformación digital con soluciones personalizadas y resultados medibles
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-md font-heading font-bold text-lg transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Agendar Consultoría Gratuita
              <Icon name="CalendarIcon" size={20} variant="outline" className="ml-2" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-md font-heading font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50"
            >
              Explorar Servicios
              <Icon name="ArrowRightIcon" size={20} variant="outline" className="ml-2" />
            </Link>
          </div>

          {/* Trust Indicators */}
         
        </div>
      </div>
    </section>
  );
};

export default CTASection;