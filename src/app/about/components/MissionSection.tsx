import React from 'react';

interface MissionSectionProps {
  className?: string;
}

const MissionSection = ({ className = '' }: MissionSectionProps) => {
  const missionPoints = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Claridad y Equilibrio",
      description: "Traemos orden y eficiencia a desafíos empresariales complejos mediante pensamiento sistémico y soluciones elegantes."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Transformación Digital",
      description: "No solo construimos software, arquitectamos futuros digitales que combinan experiencia técnica profunda con visión estratégica empresarial."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Asociación Estratégica",
      description: "Somos el socio confiable que simplifica la complejidad, construyendo relaciones a largo plazo basadas en resultados medibles."
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Nuestra Misión
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En ZENTRANR, transformamos desafíos empresariales en ventajas tecnológicas. Somos la voz calmada y confiada en un panorama digital caótico, el socio que aporta orden, eficiencia e innovación a problemas empresariales complejos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-brand transition-all duration-300 border border-border group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Nuestro Enfoque
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Combinamos la filosofía zen de claridad y equilibrio con la excelencia tecnológica de vanguardia. Nuestra base en conectividad, pensamiento sistémico y resolución elegante de problemas nos posiciona como el socio tecnológico premium entre la sofisticación de nivel empresarial y la agilidad innovadora.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Pensamiento Estratégico
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">
                Excelencia Técnica
              </span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium">
                Resultados Medibles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;