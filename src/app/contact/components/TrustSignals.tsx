import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
}

interface Certification {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface TrustSignalsProps {
  className?: string;
}

const TrustSignals = ({ className = '' }: TrustSignalsProps) => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Carlos Mendoza',
      position: 'Director de Tecnología',
      company: 'Banco Continental',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      alt: 'Professional Hispanic man in navy suit with short black hair smiling confidently',
      quote: 'ZENTRANR transformó completamente nuestra infraestructura tecnológica. Su enfoque estratégico y experiencia técnica nos permitieron modernizar nuestros sistemas bancarios con cero tiempo de inactividad.',
      rating: 5
    },
    {
      id: '2',
      name: 'María Fernández',
      position: 'Gerente General',
      company: 'Clínica San Pablo',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      alt: 'Professional Hispanic woman in white medical coat with long dark hair smiling warmly',
      quote: 'El equipo de ZENTRANR desarrolló un sistema de gestión hospitalaria que mejoró nuestra eficiencia operativa en un 40%. Su soporte continuo ha sido excepcional.',
      rating: 5
    },
    {
      id: '3',
      name: 'Roberto Silva',
      position: 'CEO',
      company: 'Textiles Perú S.A.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      alt: 'Mature Hispanic businessman in gray suit with glasses looking professional',
      quote: 'La consultoría de transformación digital de ZENTRANR nos ayudó a integrar nuestras operaciones de manufactura con sistemas modernos de ERP. Los resultados superaron nuestras expectativas.',
      rating: 5
    }
  ];

  const certifications: Certification[] = [
    {
      id: '1',
      name: 'ISO 9001:2015',
      icon: 'ShieldCheckIcon',
      description: 'Certificación de Gestión de Calidad'
    },
    {
      id: '2',
      name: 'ISO 27001',
      icon: 'LockClosedIcon',
      description: 'Seguridad de la Información'
    },
    {
      id: '3',
      name: 'Microsoft Partner',
      icon: 'CheckBadgeIcon',
      description: 'Socio Certificado de Microsoft'
    },
    {
      id: '4',
      name: 'AWS Partner',
      icon: 'CloudIcon',
      description: 'Socio de Amazon Web Services'
    }
  ];

  const stats = [
    { value: '500+', label: 'Proyectos Completados' },
    { value: '98%', label: 'Satisfacción del Cliente' },
    { value: '15+', label: 'Años de Experiencia' },
    { value: '50+', label: 'Expertos Certificados' }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Confianza Respaldada por Resultados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empresas líderes en Perú confían en ZENTRANR para sus transformaciones digitales.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
              Lo Que Dicen Nuestros Clientes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Icon
                        key={index}
                        name="StarIcon"
                        size={20}
                        variant="solid"
                        className="text-warning"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <AppImage
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground truncate">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-muted-foreground truncate">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-muted rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
              Certificaciones y Asociaciones
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-card rounded-lg p-6 border border-border text-center hover:border-primary transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={cert.icon as any} size={32} variant="solid" className="text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Registration */}
          <div className="mt-12 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-8 border border-secondary/20">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="BuildingOfficeIcon" size={24} variant="solid" className="text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                    Empresa Registrada en Perú
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    RUC: 20123456789 | Registro Mercantil de Lima
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                <span>Verificado y Certificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;