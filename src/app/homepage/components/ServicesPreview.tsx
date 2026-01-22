'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
  color: string;
}

interface ServicesPreviewProps {
  className?: string;
}

const ServicesPreview = ({ className = '' }: ServicesPreviewProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      title: "Desarrollo de Software Personalizado",
      description: "Aplicaciones empresariales, plataformas web y soluciones móviles diseñadas específicamente para sus necesidades de negocio.",
      icon: "CodeBracketSquareIcon",
      features: [
        "Aplicaciones empresariales escalables",
        "Plataformas web responsivas",
        "Soluciones móviles nativas e híbridas",
        "Integración de sistemas legacy"
      ],
      link: "/services",
      color: "from-primary to-accent"
    },
    {
      id: 2,
      title: "Consultoría en Transformación Digital",
      description: "Estrategia tecnológica integral que alinea sus objetivos de negocio con soluciones digitales innovadoras.",
      icon: "LightBulbIcon",
      features: [
        "Auditorías tecnológicas completas",
        "Roadmaps de transformación digital",
        "Optimización de procesos",
        "Arquitectura de soluciones"
      ],
      link: "/technology-consulting",
      color: "from-secondary to-primary"
    },
    {
      id: 3,
      title: "Implementación y Soporte",
      description: "Gestión de proyectos end-to-end con metodologías ágiles y soporte continuo para garantizar el éxito operacional.",
      icon: "WrenchScrewdriverIcon",
      features: [
        "Gestión de proyectos ágil",
        "Integración de sistemas",
        "Migración de datos segura",
        "Soporte técnico 24/7"
      ],
      link: "/services",
      color: "from-accent to-primary"
    },
    {
      id: 4,
      title: "Laboratorio de Innovación",
      description: "Exploración de tecnologías emergentes y desarrollo de pruebas de concepto para mantener su ventaja competitiva.",
      icon: "BeakerIcon",
      features: [
        "IA y Machine Learning",
        "Blockchain y Web3",
        "IoT y Edge Computing",
        "Realidad Aumentada/Virtual"
      ],
      link: "/services",
      color: "from-primary to-secondary"
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="RocketLaunchIcon" size={20} variant="solid" className="text-primary" />
            <span className="text-sm font-heading font-semibold text-primary">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Soluciones Tecnológicas Integrales
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde el concepto hasta la implementación, ofrecemos servicios completos que transforman sus desafíos empresariales en ventajas tecnológicas sostenibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => isHydrated && setActiveService(service.id)}
              onMouseLeave={() => isHydrated && setActiveService(null)}
              className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-brand transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg mb-6 shadow-md`}>
                  <Icon name={service.icon as any} size={32} variant="outline" className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={service.link}
                  className="inline-flex items-center space-x-2 text-primary font-heading font-semibold hover:text-accent transition-colors duration-300"
                >
                  <span>Explorar Servicio</span>
                  <Icon 
                    name="ArrowRightIcon" 
                    size={20} 
                    variant="outline" 
                    className={`transition-transform duration-300 ${
                      isHydrated && activeService === service.id ? 'translate-x-2' : ''
                    }`}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-md font-heading font-bold text-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95"
          >
            Ver Todos los Servicios
            <Icon name="ArrowRightIcon" size={20} variant="outline" className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;