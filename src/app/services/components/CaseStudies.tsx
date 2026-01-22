import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  image: string;
  alt: string;
  testimonial: string;
  author: string;
  position: string;
}

interface CaseStudiesProps {
  className?: string;
}

const CaseStudies = ({ className = '' }: CaseStudiesProps) => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'fintech-platform',
      client: 'BancoDigital Perú',
      industry: 'Finanzas',
      challenge: 'Necesitaban modernizar su plataforma bancaria legacy para competir con fintechs emergentes y mejorar la experiencia del cliente.',
      solution: 'Desarrollamos una plataforma bancaria digital completa con arquitectura de microservicios, integrando APIs modernas y una interfaz de usuario intuitiva.',
      results: [
        'Reducción del 60% en tiempo de procesamiento de transacciones',
        'Aumento del 85% en adopción de banca móvil',
        'Mejora del 40% en satisfacción del cliente',
        'Reducción del 50% en costos operativos'
      ],
      metrics: [
        { label: 'Usuarios Activos', value: '500K+' },
        { label: 'Transacciones/Día', value: '2M+' },
        { label: 'Uptime', value: '99.9%' }
      ],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      alt: 'Profesional de finanzas usando aplicación bancaria móvil en tablet con gráficos financieros',
      testimonial: 'ZENTRANR transformó completamente nuestra infraestructura tecnológica. Su enfoque estratégico y experiencia técnica nos permitieron lanzar nuestra plataforma digital en tiempo récord.',
      author: 'Carlos Mendoza',
      position: 'CTO, BancoDigital Perú'
    },
    {
      id: 'healthcare-system',
      client: 'ClínicaSalud',
      industry: 'Salud',
      challenge: 'Sistema de gestión hospitalaria fragmentado que causaba ineficiencias operativas y riesgos en la atención al paciente.',
      solution: 'Implementamos un sistema integrado de gestión hospitalaria con historias clínicas electrónicas, gestión de citas y facturación automatizada.',
      results: [
        'Reducción del 70% en errores de registro médico',
        'Mejora del 55% en eficiencia de programación',
        'Aumento del 45% en satisfacción del paciente',
        'Ahorro del 35% en costos administrativos'
      ],
      metrics: [
        { label: 'Pacientes Gestionados', value: '100K+' },
        { label: 'Citas/Mes', value: '50K+' },
        { label: 'Reducción Papel', value: '90%' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      alt: 'Médico usando sistema de historia clínica electrónica en tablet en hospital moderno',
      testimonial: 'La solución de ZENTRANR revolucionó nuestras operaciones. Ahora podemos enfocarnos en lo que realmente importa: la atención de calidad a nuestros pacientes.',
      author: 'Dra. María Rodríguez',
      position: 'Directora Médica, ClínicaSalud'
    },
    {
      id: 'manufacturing-iot',
      client: 'IndustriaTech',
      industry: 'Manufactura',
      challenge: 'Falta de visibilidad en tiempo real de procesos de producción y mantenimiento reactivo que causaba paradas costosas.',
      solution: 'Desarrollamos una plataforma IoT con sensores inteligentes, análisis predictivo y dashboards en tiempo real para optimización de producción.',
      results: [
        'Reducción del 65% en tiempo de inactividad no planificado',
        'Aumento del 40% en eficiencia de producción',
        'Mejora del 50% en precisión de pronósticos',
        'Ahorro del 30% en costos de mantenimiento'
      ],
      metrics: [
        { label: 'Sensores Conectados', value: '5K+' },
        { label: 'Datos/Segundo', value: '100K+' },
        { label: 'Precisión Predictiva', value: '95%' }
      ],
      image: 'https://images.pixabay.com/photo/2017/08/10/08/47/laptop-2619564_1280.jpg',
      alt: 'Ingeniero monitoreando sistemas de producción industrial en pantallas con datos en tiempo real',
      testimonial: 'La implementación de IoT por ZENTRANR nos dio visibilidad completa de nuestras operaciones. El mantenimiento predictivo ha sido un cambio radical.',
      author: 'Ing. Roberto Silva',
      position: 'Gerente de Operaciones, IndustriaTech'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Casos de Éxito
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Resultados medibles que demuestran el impacto de nuestras soluciones tecnológicas en diferentes industrias.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-card rounded-lg overflow-hidden shadow-brand"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[400px] lg:h-auto">
                  <AppImage
                    src={study.image}
                    alt={study.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-heading font-semibold">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2">
                    {study.client}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider mb-2">
                      Desafío
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider mb-2">
                      Solución
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {study.solution}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider mb-3">
                      Resultados
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted rounded-lg">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-heading font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-muted-foreground italic mb-3">
                      "{study.testimonial}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="UserIcon" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-foreground">
                          {study.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {study.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;