import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

const MethodologySection = () => {
  const methodologySteps: MethodologyStep[] = [
    {
      id: 1,
      phase: 'Fase 1',
      title: 'Descubrimiento y Análisis',
      description: 'Evaluación profunda de su ecosistema tecnológico actual, objetivos empresariales y desafíos específicos. Identificamos oportunidades y establecemos líneas base.',
      icon: 'MagnifyingGlassIcon',
      duration: '2-4 semanas'
    },
    {
      id: 2,
      phase: 'Fase 2',
      title: 'Estrategia y Planificación',
      description: 'Desarrollo de roadmap estratégico personalizado con priorización de iniciativas, análisis de ROI y definición de KPIs medibles.',
      icon: 'MapIcon',
      duration: '3-6 semanas'
    },
    {
      id: 3,
      phase: 'Fase 3',
      title: 'Diseño de Solución',
      description: 'Arquitectura detallada de soluciones tecnológicas, selección de stack tecnológico y diseño de procesos de implementación.',
      icon: 'CubeIcon',
      duration: '4-8 semanas'
    },
    {
      id: 4,
      phase: 'Fase 4',
      title: 'Implementación Guiada',
      description: 'Ejecución supervisada con gestión de proyecto, control de calidad y ajustes iterativos basados en feedback continuo.',
      icon: 'WrenchScrewdriverIcon',
      duration: '8-16 semanas'
    },
    {
      id: 5,
      phase: 'Fase 5',
      title: 'Optimización Continua',
      description: 'Monitoreo de rendimiento, análisis de métricas, optimización iterativa y soporte estratégico continuo.',
      icon: 'ArrowPathIcon',
      duration: 'Continuo'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="LightBulbIcon" size={20} variant="solid" className="text-accent" />
            <span className="text-sm font-heading font-semibold text-accent">
              Metodología ZENTRANR
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Enfoque Sistemático de Transformación
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestra metodología probada combina claridad estratégica con excelencia en ejecución, garantizando resultados medibles en cada fase.
          </p>
        </div>

        {/* Methodology Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />

            {/* Steps */}
            <div className="space-y-12">
              {methodologySteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-brand">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-heading font-semibold text-primary">
                          {step.phase}
                        </span>
                        <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 flex-shrink-0 my-4 lg:my-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-brand">
                      <Icon name={step.icon as any} size={28} variant="outline" className="text-white" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            ¿Listo para comenzar su transformación digital?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 flex items-center space-x-2">
              <span>Descargar Guía de Metodología</span>
              <Icon name="ArrowDownTrayIcon" size={20} variant="outline" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;