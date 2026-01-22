import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ServicesOverview = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: 'ChartBarSquareIcon',
      title: 'Auditoría Tecnológica Integral',
      description: 'Evaluación exhaustiva de su infraestructura tecnológica actual, identificando oportunidades de optimización y riesgos potenciales.',
      features: [
        'Análisis de arquitectura de sistemas',
        'Evaluación de seguridad y cumplimiento',
        'Identificación de deuda técnica',
        'Benchmarking de rendimiento'
      ],
      color: 'from-primary to-accent'
    },
    {
      id: 2,
      icon: 'CogIcon',
      title: 'Optimización de Sistemas',
      description: 'Mejora del rendimiento, reducción de costos y aumento de la eficiencia operativa a través de implementaciones tecnológicas estratégicas.',
      features: [
        'Optimización de rendimiento',
        'Reducción de costos operativos',
        'Automatización de procesos',
        'Escalabilidad y resiliencia'
      ],
      color: 'from-accent to-primary'
    },
    {
      id: 3,
      icon: 'RocketLaunchIcon',
      title: 'Estrategia de Transformación Digital',
      description: 'Desarrollo de hojas de ruta estratégicas para la evolución digital, posicionamiento competitivo y creación de ventajas de mercado.',
      features: [
        'Roadmap de transformación',
        'Análisis de madurez digital',
        'Estrategia de innovación',
        'Gestión del cambio organizacional'
      ],
      color: 'from-secondary to-primary'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="BriefcaseIcon" size={20} variant="solid" className="text-primary" />
            <span className="text-sm font-heading font-semibold text-primary">
              Servicios de Consultoría
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Servicios Estratégicos de Transformación
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones integrales diseñadas para impulsar su evolución digital y maximizar el retorno de inversión tecnológica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-brand"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={service.icon as any} size={32} variant="outline" className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;