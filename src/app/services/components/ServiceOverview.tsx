import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  industries: string[];
}

interface ServiceOverviewProps {
  className?: string;
}

const ServiceOverview = ({ className = '' }: ServiceOverviewProps) => {
  const services: Service[] = [
    {
      id: 'desarrollo-software',
      icon: 'CodeBracketIcon',
      title: 'Desarrollo de Software Personalizado',
      description: 'Creamos aplicaciones empresariales, plataformas web y soluciones móviles diseñadas específicamente para sus necesidades de negocio.',
      features: [
        'Aplicaciones empresariales escalables',
        'Plataformas web de alto rendimiento',
        'Soluciones móviles nativas y multiplataforma',
        'Arquitectura de microservicios',
        'Integración de sistemas legacy'
      ],
      industries: ['Finanzas', 'Salud', 'Manufactura', 'Retail']
    },
    {
      id: 'consultoria-ti',
      icon: 'LightBulbIcon',
      title: 'Consultoría y Estrategia TI',
      description: 'Servicios de consultoría estratégica para transformación digital, auditorías tecnológicas y optimización de sistemas empresariales.',
      features: [
        'Estrategia de transformación digital',
        'Auditorías tecnológicas integrales',
        'Optimización de infraestructura',
        'Arquitectura de soluciones empresariales',
        'Gestión de cambio tecnológico'
      ],
      industries: ['Empresas', 'Gobierno', 'Educación', 'Logística']
    },
    {
      id: 'implementacion-soporte',
      icon: 'WrenchScrewdriverIcon',
      title: 'Implementación y Soporte',
      description: 'Gestión de proyectos, integración de sistemas y mantenimiento continuo para garantizar el éxito operativo de sus soluciones tecnológicas.',
      features: [
        'Gestión de proyectos ágil',
        'Integración de sistemas complejos',
        'Soporte técnico 24/7',
        'Mantenimiento preventivo y correctivo',
        'Capacitación de usuarios'
      ],
      industries: ['Todos los sectores', 'Empresas globales', 'PyMEs', 'Startups']
    },
    {
      id: 'laboratorio-innovacion',
      icon: 'BeakerIcon',
      title: 'Laboratorio de Innovación',
      description: 'Exploración de tecnologías emergentes, desarrollo de pruebas de concepto y asociaciones de I+D para mantener su ventaja competitiva.',
      features: [
        'Inteligencia artificial y machine learning',
        'Blockchain y tecnologías distribuidas',
        'Internet de las cosas (IoT)',
        'Realidad aumentada y virtual',
        'Computación en la nube avanzada'
      ],
      industries: ['Tecnología', 'Innovación', 'Investigación', 'Startups']
    }
  ];

  return (
    <section id="servicios-principales" className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Nuestro Portafolio de Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluciones tecnológicas integrales diseñadas para impulsar su transformación digital y crecimiento empresarial sostenible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-brand transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={service.icon as any} size={28} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider mb-3">
                  Capacidades Clave
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider mb-3">
                  Industrias Atendidas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((industry, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={`#${service.id}`}
                  className="inline-flex items-center space-x-2 text-primary font-heading font-semibold text-sm hover:text-primary/80 transition-colors duration-300"
                >
                  <span>Ver Detalles</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;