import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface ProcessFlowProps {
  className?: string;
}

const ProcessFlow = ({ className = '' }: ProcessFlowProps) => {
  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Reunión estratégica para entender sus objetivos de negocio, desafíos actuales y visión tecnológica. Evaluamos la viabilidad y definimos el alcance del proyecto.',
      icon: 'ChatBubbleLeftRightIcon',
      duration: '1-2 semanas'
    },
    {
      number: '02',
      title: 'Análisis y Diseño',
      description: 'Análisis profundo de requisitos, diseño de arquitectura de solución y creación de prototipos. Definimos tecnologías, metodologías y plan de proyecto detallado.',
      icon: 'PencilSquareIcon',
      duration: '2-4 semanas'
    },
    {
      number: '03',
      title: 'Desarrollo Iterativo',
      description: 'Implementación ágil con sprints de 2 semanas, entregas incrementales y revisiones continuas. Mantenemos comunicación constante y adaptamos según feedback.',
      icon: 'CodeBracketIcon',
      duration: '8-16 semanas'
    },
    {
      number: '04',
      title: 'Pruebas y QA',
      description: 'Pruebas exhaustivas de funcionalidad, rendimiento, seguridad y usabilidad. Incluye pruebas automatizadas, UAT con usuarios finales y optimización continua.',
      icon: 'BeakerIcon',
      duration: '2-3 semanas'
    },
    {
      number: '05',
      title: 'Implementación',
      description: 'Despliegue controlado en producción con migración de datos, configuración de infraestructura y capacitación de usuarios. Monitoreo intensivo post-lanzamiento.',
      icon: 'RocketLaunchIcon',
      duration: '1-2 semanas'
    },
    {
      number: '06',
      title: 'Soporte Continuo',
      description: 'Mantenimiento proactivo, actualizaciones regulares, monitoreo 24/7 y soporte técnico. Optimización continua basada en métricas de uso y feedback de usuarios.',
      icon: 'WrenchScrewdriverIcon',
      duration: 'Continuo'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Metodología probada que garantiza entregas exitosas, desde la consulta inicial hasta el soporte continuo.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-card rounded-lg p-6 lg:p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4 lg:justify-end">
                      <span className="text-5xl font-heading font-bold text-primary/20">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="ClockIcon" size={16} />
                      <span>Duración: <strong className="text-foreground">{step.duration}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-brand">
                    <Icon name={step.icon as any} size={32} className="text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-md font-heading font-semibold text-base transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95"
          >
            <span>Iniciar su Proyecto</span>
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;