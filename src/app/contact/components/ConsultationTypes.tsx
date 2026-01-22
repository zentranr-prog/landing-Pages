import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ConsultationType {
  id: string;
  icon: string;
  title: string;
  description: string;
  duration: string;
  audience: string;
  features: string[];
  recommended: boolean;
}

interface ConsultationTypesProps {
  onSelectType: (typeId: string) => void;
  className?: string;
}

const ConsultationTypes = ({ onSelectType, className = '' }: ConsultationTypesProps) => {
  const consultationTypes: ConsultationType[] = [
    {
      id: 'executive',
      icon: 'BriefcaseIcon',
      title: 'Consulta Ejecutiva',
      description: 'Sesión estratégica para líderes empresariales',
      duration: '60 minutos',
      audience: 'CTOs, Directores de TI, Ejecutivos',
      features: [
        'Análisis de transformación digital',
        'Roadmap tecnológico estratégico',
        'Evaluación de arquitectura empresarial',
        'Propuesta de valor personalizada'
      ],
      recommended: true
    },
    {
      id: 'technical',
      icon: 'CodeBracketIcon',
      title: 'Consulta Técnica',
      description: 'Evaluación profunda de capacidades técnicas',
      duration: '45 minutos',
      audience: 'Arquitectos de Software, Gerentes de TI',
      features: [
        'Revisión de stack tecnológico',
        'Discusión de metodologías',
        'Análisis de casos de estudio técnicos',
        'Evaluación de integración de sistemas'
      ],
      recommended: false
    },
    {
      id: 'project',
      icon: 'RocketLaunchIcon',
      title: 'Discusión de Proyecto',
      description: 'Planificación detallada de desarrollo',
      duration: '30 minutos',
      audience: 'Propietarios de PYME, Emprendedores',
      features: [
        'Definición de alcance del proyecto',
        'Estimación de costos y cronograma',
        'Proceso de desarrollo explicado',
        'Opciones de soporte continuo'
      ],
      recommended: false
    },
    {
      id: 'discovery',
      icon: 'LightBulbIcon',
      title: 'Sesión de Descubrimiento',
      description: 'Exploración inicial de necesidades',
      duration: '20 minutos',
      audience: 'Todos los interesados',
      features: [
        'Identificación de desafíos empresariales',
        'Alineación de servicios',
        'Preguntas y respuestas generales',
        'Próximos pasos recomendados'
      ],
      recommended: false
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Tipos de Consulta Disponibles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seleccione el tipo de consulta que mejor se adapte a sus necesidades y objetivos empresariales.
            </p>
          </div>

          {/* Consultation Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`relative bg-card rounded-lg p-8 border transition-all duration-300 hover:shadow-lg ${
                  type.recommended 
                    ? 'border-primary shadow-md' 
                    : 'border-border hover:border-primary'
                }`}
              >
                {/* Recommended Badge */}
                {type.recommended && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-heading font-semibold rounded-full">
                    Recomendado
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={type.icon as any} size={32} variant="outline" className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {type.description}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Icon name="ClockIcon" size={16} variant="outline" className="text-muted-foreground mr-2" />
                    <span className="text-muted-foreground">Duración: </span>
                    <span className="font-medium text-foreground ml-1">{type.duration}</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <Icon name="UserGroupIcon" size={16} variant="outline" className="text-muted-foreground mr-2 mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Ideal para: </span>
                      <span className="font-medium text-foreground">{type.audience}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-heading font-semibold text-foreground mb-3">
                    Incluye:
                  </h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Icon 
                          name="CheckCircleIcon" 
                          size={16} 
                          variant="solid" 
                          className="text-success mr-2 mt-0.5 flex-shrink-0" 
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectType(type.id)}
                  className={`w-full py-3 rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 ${
                    type.recommended
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-brand'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                  }`}
                >
                  Programar {type.title}
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              ¿No está seguro de qué tipo de consulta necesita?
            </p>
            <button
              onClick={() => onSelectType('discovery')}
              className="text-primary hover:text-primary/80 font-heading font-semibold text-sm transition-colors duration-300 inline-flex items-center"
            >
              Comience con una Sesión de Descubrimiento
              <Icon name="ArrowRightIcon" size={16} variant="outline" className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationTypes;