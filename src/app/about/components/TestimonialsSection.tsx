'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  industry: string;
  image: string;
  alt: string;
  quote: string;
  projectType: string;
  results: string[];
  videoUrl?: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Todos');
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const industries = ['Todos', 'Finanzas', 'Retail', 'Manufactura', 'Salud'];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ing. Patricia Rojas",
      position: "CIO",
      company: "Banco Continental Perú",
      industry: "Finanzas",
      image: "https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Mujer ejecutiva hispana de mediana edad con cabello corto castaño, traje azul marino, sonriendo con confianza en oficina bancaria moderna",
      quote: "ZENTRANR transformó completamente nuestra infraestructura digital. Su enfoque estratégico y experiencia técnica nos permitieron modernizar sistemas legacy mientras manteníamos operaciones críticas sin interrupciones. El equipo demostró un entendimiento profundo de nuestras necesidades regulatorias y empresariales.",
      projectType: "Transformación Digital Bancaria",
      results: [
        "Reducción del 60% en tiempo de procesamiento de transacciones",
        "Mejora del 45% en satisfacción del cliente digital",
        "Implementación exitosa de arquitectura cloud híbrida"
      ],
      videoUrl: "#"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      position: "Director de Operaciones",
      company: "Supermercados Plaza",
      industry: "Retail",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Hombre ejecutivo hispano joven con barba corta, camisa blanca y corbata azul, en almacén de retail moderno con estanterías al fondo",
      quote: "La plataforma de gestión de inventario desarrollada por ZENTRANR revolucionó nuestras operaciones. Su metodología ágil nos permitió ver resultados tangibles desde el primer sprint. La solución se integró perfectamente con nuestros sistemas existentes y el soporte post-implementación ha sido excepcional.",
      projectType: "Sistema de Gestión Omnicanal",
      results: [
        "Optimización del 35% en gestión de inventario",
        "Reducción del 50% en quiebres de stock",
        "Integración exitosa de 120 tiendas en 6 meses"
      ]
    },
    {
      id: 3,
      name: "Dra. Ana Gutiérrez",
      position: "Gerente General",
      company: "Industrias Textiles del Sur",
      industry: "Manufactura",
      image: "https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Mujer ejecutiva hispana de mediana edad con cabello largo negro, blazer gris, revisando tableta en planta de manufactura textil",
      quote: "ZENTRANR no solo entregó una solución tecnológica, sino que se convirtió en nuestro socio estratégico de transformación. Su comprensión de procesos manufactureros y capacidad para traducir necesidades operativas en soluciones digitales fue impresionante. Los resultados superaron nuestras expectativas.",
      projectType: "Sistema MES & IoT Industrial",
      results: [
        "Aumento del 40% en eficiencia de producción",
        "Reducción del 30% en desperdicios",
        "Visibilidad en tiempo real de toda la cadena productiva"
      ]
    },
    {
      id: 4,
      name: "Dr. Roberto Silva",
      position: "Director Médico",
      company: "Clínica San Gabriel",
      industry: "Salud",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Hombre médico hispano de mediana edad con bata blanca y estetoscopio, sonriendo en consultorio médico moderno con equipo tecnológico",
      quote: "La plataforma de historia clínica electrónica desarrollada por ZENTRANR ha mejorado significativamente la calidad de atención a nuestros pacientes. El sistema es intuitivo, seguro y cumple con todas las normativas de salud. El equipo demostró un compromiso excepcional con la excelencia y la seguridad de datos.",
      projectType: "Sistema de Gestión Hospitalaria",
      results: [
        "Reducción del 70% en tiempo de acceso a historias clínicas",
        "Mejora del 55% en coordinación entre departamentos",
        "Cumplimiento 100% con normativas de protección de datos de salud"
      ]
    }
  ];

  const filteredTestimonials = selectedIndustry === 'Todos'
    ? testimonials
    : testimonials.filter(t => t.industry === selectedIndustry);

  const currentTestimonial = filteredTestimonials[activeTestimonial] || filteredTestimonials[0];

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Testimonios reales de líderes empresariales que han transformado sus organizaciones con ZENTRANR.
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => {
                setSelectedIndustry(industry);
                setActiveTestimonial(0);
              }}
              className={`px-6 py-2.5 rounded-full font-heading font-medium text-sm transition-all duration-300 ${
                selectedIndustry === industry
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Main Testimonial Display */}
        {currentTestimonial && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-brand overflow-hidden border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Image Section */}
                <div className="lg:col-span-2 relative h-96 lg:h-auto">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-3 p-8 lg:p-12">
                  <div className="flex items-center space-x-2 mb-6">
                    <Icon name="StarIcon" size={24} variant="solid" className="text-accent" />
                    <Icon name="StarIcon" size={24} variant="solid" className="text-accent" />
                    <Icon name="StarIcon" size={24} variant="solid" className="text-accent" />
                    <Icon name="StarIcon" size={24} variant="solid" className="text-accent" />
                    <Icon name="StarIcon" size={24} variant="solid" className="text-accent" />
                  </div>

                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  <div className="mb-6">
                    <h4 className="text-xl font-heading font-bold text-foreground">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-muted-foreground">
                      {currentTestimonial.position} - {currentTestimonial.company}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {currentTestimonial.industry}
                    </span>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h5 className="text-sm font-heading font-bold text-foreground uppercase tracking-wider mb-3">
                      Tipo de Proyecto
                    </h5>
                    <p className="text-muted-foreground mb-4">{currentTestimonial.projectType}</p>

                    <h5 className="text-sm font-heading font-bold text-foreground uppercase tracking-wider mb-3">
                      Resultados Clave
                    </h5>
                    <ul className="space-y-2">
                      {currentTestimonial.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {currentTestimonial.videoUrl && (
                    <button className="mt-6 inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium">
                      <Icon name="PlayIcon" size={20} variant="solid" />
                      <span>Ver testimonio en video</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handlePrev}
                disabled={filteredTestimonials.length <= 1}
                className="flex items-center space-x-2 px-6 py-3 bg-card text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-border"
              >
                <Icon name="ChevronLeftIcon" size={20} variant="outline" />
                <span className="font-medium">Anterior</span>
              </button>

              <div className="flex items-center space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? 'bg-primary w-8' :'bg-border hover:bg-primary/50'
                    }`}
                    aria-label={`Ver testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={filteredTestimonials.length <= 1}
                className="flex items-center space-x-2 px-6 py-3 bg-card text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-border"
              >
                <span className="font-medium">Siguiente</span>
                <Icon name="ChevronRightIcon" size={20} variant="outline" />
              </button>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "98%", label: "Satisfacción Cliente" },
            { value: "200+", label: "Proyectos Completados" },
            { value: "15+", label: "Años Experiencia" },
            { value: "95%", label: "Tasa Retención" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-brand transition-all duration-300 border border-border"
            >
              <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;