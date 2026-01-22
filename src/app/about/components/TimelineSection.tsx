import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineSectionProps {
  className?: string;
}

const TimelineSection = ({ className = '' }: TimelineSectionProps) => {
  const milestones = [
    {
      year: "2010",
      title: "Fundación de ZENTRANR",
      description: "Inicio de operaciones con un equipo de 5 profesionales enfocados en desarrollo de software personalizado para empresas peruanas.",
      icon: "RocketLaunchIcon",
      achievements: ["Primera oficina en Lima", "3 clientes fundadores"]
    },
    {
      year: "2013",
      title: "Expansión de Servicios",
      description: "Incorporación de consultoría estratégica y servicios de transformación digital, ampliando nuestro alcance en el mercado empresarial.",
      icon: "ChartBarIcon",
      achievements: ["Equipo de 20 profesionales", "Certificación ISO 9001"]
    },
    {
      year: "2016",
      title: "Reconocimiento Nacional",
      description: "Premio a la Innovación Tecnológica otorgado por la Cámara de Comercio de Lima. Implementación de proyectos para empresas Fortune 500.",
      icon: "TrophyIcon",
      achievements: ["50+ proyectos completados", "Expansión a sector financiero"]
    },
    {
      year: "2019",
      title: "Certificaciones Internacionales",
      description: "Obtención de certificaciones AWS Advanced Partner y Microsoft Gold Partner, consolidando nuestra experiencia en cloud computing.",
      icon: "ShieldCheckIcon",
      achievements: ["Certificación ISO 27001", "Equipo de 50+ profesionales"]
    },
    {
      year: "2022",
      title: "Laboratorio de Innovación",
      description: "Inauguración de nuestro Innovation Lab dedicado a investigación en IA, IoT y tecnologías emergentes.",
      icon: "BeakerIcon",
      achievements: ["Inversión en I+D", "Alianzas con universidades"]
    },
    {
      year: "2025",
      title: "Liderazgo Regional",
      description: "Consolidación como referente en transformación digital en Perú y expansión de servicios a nivel latinoamericano.",
      icon: "GlobeAmericasIcon",
      achievements: ["200+ proyectos exitosos", "Presencia en 5 países"]
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Nuestra Historia
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Más de 15 años transformando empresas a través de la tecnología, construyendo un legado de innovación y excelencia.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-brand transition-all duration-300 border border-border group">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          <Icon name={milestone.icon as any} size={24} variant="outline" />
                        </div>
                        <span className="text-3xl font-heading font-bold text-primary">
                          {milestone.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-heading font-bold text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {milestone.description}
                      </p>
                      
                      <div className="space-y-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-brand z-10"></div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Construyamos el Futuro Juntos
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Únase a las empresas líderes que han confiado en ZENTRANR para su transformación digital.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95"
            >
              <span>Iniciar Conversación</span>
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;