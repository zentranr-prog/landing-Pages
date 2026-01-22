import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CaseStudy {
  id: number;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: string;
  }[];
  image: string;
  alt: string;
  logo: string;
}

const CaseStudies = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      company: 'Banco Nacional del Perú',
      industry: 'Servicios Financieros',
      challenge: 'Sistema bancario legacy limitaba la innovación digital y experiencia del cliente. Necesitaban modernización sin interrumpir operaciones críticas.',
      solution: 'Implementamos arquitectura de microservicios cloud-native con migración gradual, permitiendo innovación continua mientras manteníamos estabilidad operacional.',
      results: [
        { metric: 'Reducción de Tiempo de Procesamiento', value: '67%', icon: 'ClockIcon' },
        { metric: 'Aumento en Satisfacción del Cliente', value: '45%', icon: 'FaceSmileIcon' },
        { metric: 'Reducción de Costos Operativos', value: '38%', icon: 'CurrencyDollarIcon' }
      ],
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg',
      alt: 'Modern banking office interior with digital screens showing financial data and analytics',
      logo: 'BNP'
    },
    {
      id: 2,
      company: 'Retail Solutions SAC',
      industry: 'Comercio Minorista',
      challenge: 'Sistemas desconectados entre tiendas físicas y e-commerce generaban inconsistencias de inventario y experiencia fragmentada del cliente.',
      solution: 'Desarrollamos plataforma omnicanal integrada con analytics en tiempo real, unificando experiencia del cliente y optimizando gestión de inventario.',
      results: [
        { metric: 'Incremento en Ventas Online', value: '156%', icon: 'ShoppingCartIcon' },
        { metric: 'Precisión de Inventario', value: '99.2%', icon: 'CubeIcon' },
        { metric: 'ROI en 12 Meses', value: '285%', icon: 'ChartBarIcon' }
      ],
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
      alt: 'Modern retail store with digital displays and customers shopping with mobile devices',
      logo: 'RSA'
    },
    {
      id: 3,
      company: 'Manufactura Industrial Perú',
      industry: 'Manufactura',
      challenge: 'Procesos manuales de producción causaban ineficiencias, alta tasa de defectos y falta de visibilidad en tiempo real de operaciones.',
      solution: 'Implementamos solución IoT con analytics predictivo y automatización de procesos, transformando operaciones en fábrica inteligente.',
      results: [
        { metric: 'Reducción de Defectos', value: '72%', icon: 'ShieldCheckIcon' },
        { metric: 'Aumento de Productividad', value: '54%', icon: 'ArrowTrendingUpIcon' },
        { metric: 'Ahorro Anual', value: 'S/ 2.8M', icon: 'BanknotesIcon' }
      ],
      image: 'https://images.pexels.com/photos/8866792/pexels-photo-8866792.jpeg',
      alt: 'Industrial manufacturing facility with automated robotic systems and digital monitoring screens',
      logo: 'MIP'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="TrophyIcon" size={20} variant="solid" className="text-accent" />
            <span className="text-sm font-heading font-semibold text-accent">
              Casos de Éxito
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Transformaciones que Generan Resultados
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra cómo hemos ayudado a organizaciones líderes a alcanzar sus objetivos de transformación digital con resultados medibles.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-brand group">
                  <div className="aspect-[4/3] relative">
                    <AppImage
                      src={study.image}
                      alt={study.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-6 left-6 bg-white rounded-lg px-4 py-2 shadow-lg">
                    <span className="text-2xl font-heading font-bold text-primary">
                      {study.logo}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="BuildingOfficeIcon" size={20} variant="outline" className="text-primary" />
                      <span className="text-sm font-heading font-semibold text-primary">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2">
                      {study.company}
                    </h3>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Desafío
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Solución
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Resultados Medibles
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/20"
                        >
                          <Icon
                            name={result.icon as any}
                            size={24}
                            variant="solid"
                            className="text-primary mb-2"
                          />
                          <div className="text-2xl font-heading font-bold text-primary mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-foreground leading-tight">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            ¿Listo para escribir su propia historia de éxito?
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 flex items-center space-x-2 mx-auto">
            <span>Ver Más Casos de Éxito</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;