import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CultureSectionProps {
  className?: string;
}

const CultureSection = ({ className = '' }: CultureSectionProps) => {
  const cultureValues = [
    {
      icon: 'LightBulbIcon',
      title: "Innovación Continua",
      description: "Fomentamos la experimentación y el aprendizaje constante, manteniéndonos a la vanguardia de las tecnologías emergentes.",
      principles: [
        "Laboratorio de innovación interno",
        "20% del tiempo dedicado a proyectos de investigación",
        "Colaboración con universidades y centros tecnológicos"
      ]
    },
    {
      icon: 'UserGroupIcon',
      title: "Asociación Cliente",
      description: "Construimos relaciones a largo plazo basadas en confianza mutua, transparencia y resultados medibles.",
      principles: [
        "Comunicación abierta y frecuente",
        "Metodología ágil con participación activa del cliente",
        "Compromiso con el éxito empresarial del cliente"
      ]
    },
    {
      icon: 'AcademicCapIcon',
      title: "Excelencia Técnica",
      description: "Mantenemos los más altos estándares de calidad en cada línea de código y cada decisión arquitectónica.",
      principles: [
        "Revisiones de código rigurosas",
        "Certificaciones técnicas continuas",
        "Mejores prácticas de la industria"
      ]
    },
    {
      icon: 'HeartIcon',
      title: "Valores Familiares",
      description: "Operamos con integridad, respeto y compromiso, reflejando los valores empresariales peruanos de relaciones duraderas.",
      principles: [
        "Cultura de respeto y colaboración",
        "Balance vida-trabajo saludable",
        "Desarrollo profesional y personal"
      ]
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Descubrimiento",
      description: "Inmersión profunda en su negocio, desafíos y objetivos estratégicos."
    },
    {
      step: "02",
      title: "Estrategia",
      description: "Diseño de solución tecnológica alineada con objetivos empresariales."
    },
    {
      step: "03",
      title: "Desarrollo",
      description: "Implementación ágil con entregas incrementales y feedback continuo."
    },
    {
      step: "04",
      title: "Optimización",
      description: "Monitoreo, mejora continua y soporte a largo plazo."
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {/* Culture Values */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Cultura & Valores
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nuestra cultura refleja el equilibrio entre innovación tecnológica y valores empresariales tradicionales, creando un ambiente donde la excelencia prospera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {cultureValues.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-brand transition-all duration-300 border border-border group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={value.icon as any} size={28} variant="outline" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <ul className="space-y-2">
                    {value.principles.map((principle, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Icon name="CheckIcon" size={16} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Nuestra Metodología de Asociación
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un enfoque estructurado que garantiza transparencia, colaboración y resultados excepcionales en cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-6 h-full shadow-sm hover:shadow-brand transition-all duration-300 border border-border">
                  <div className="text-5xl font-heading font-bold text-primary/20 mb-4">
                    {phase.step}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-foreground mb-3">
                    {phase.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <Icon name="ChevronRightIcon" size={24} variant="outline" className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Certificaciones & Reconocimientos
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro compromiso con la excelencia está respaldado por certificaciones internacionales y reconocimiento de la industria.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "ISO 9001:2015", desc: "Gestión de Calidad" },
              { name: "ISO 27001", desc: "Seguridad Información" },
              { name: "AWS Partner", desc: "Advanced Tier" },
              { name: "Microsoft Partner", desc: "Gold Certified" }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-brand transition-all duration-300 border border-border group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="ShieldCheckIcon" size={32} variant="solid" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-1">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;