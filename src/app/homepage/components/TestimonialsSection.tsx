'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  companyLogo: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
  projectType: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Mendoza",
      position: "Director de Tecnología",
      company: "Grupo Financiero Perú",
      companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Hombre profesional hispano de mediana edad con traje oscuro y corbata azul sonriendo en oficina moderna",
      quote: "ZENTRANR transformó completamente nuestra infraestructura tecnológica. Su enfoque estratégico y experiencia técnica nos permitieron reducir costos operativos en 40% mientras mejorábamos significativamente la experiencia de nuestros clientes. Son verdaderos socios de negocio.",
      rating: 5,
      projectType: "Transformación Digital Empresarial"
    },
    {
      id: 2,
      name: "María Fernández",
      position: "CEO",
      company: "RetailTech Solutions",
      companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Mujer ejecutiva latina con blazer gris y camisa blanca en oficina corporativa con vista panorámica",
      quote: "La plataforma de e-commerce que desarrolló ZENTRANR superó todas nuestras expectativas. No solo entregaron a tiempo y dentro del presupuesto, sino que su arquitectura escalable nos ha permitido crecer 300% en el último año sin problemas técnicos.",
      rating: 5,
      projectType: "Plataforma E-commerce Personalizada"
    },
    {
      id: 3,
      name: "Roberto Silva",
      position: "Gerente de Operaciones",
      company: "Logística Andina",
      companyLogo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=80&fit=crop",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Hombre profesional peruano con camisa azul y gafas trabajando en laptop en oficina moderna",
      quote: "El sistema de gestión logística que implementó ZENTRANR revolucionó nuestras operaciones. La integración con nuestros sistemas legacy fue impecable y el soporte post-implementación ha sido excepcional. Recomendamos sus servicios sin reservas.",
      rating: 5,
      projectType: "Sistema de Gestión Logística"
    }
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-secondary via-primary to-secondary ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" className="text-accent" />
            <span className="text-sm font-heading font-semibold text-white">Testimonios de Clientes</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor activo. Estas son algunas de las historias de éxito que hemos construido juntos
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Client Info Side */}
              <div className="bg-gradient-to-br from-muted to-background p-8 lg:p-12 flex flex-col justify-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse" />
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {currentTestimonial.position}
                  </p>
                  <div className="inline-flex items-center justify-center h-12 px-4 bg-white rounded-lg shadow-sm">
                    <AppImage
                      src={currentTestimonial.companyLogo}
                      alt={`Logo de ${currentTestimonial.company}`}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Icon
                      key={index}
                      name="StarIcon"
                      size={20}
                      variant="solid"
                      className={index < currentTestimonial.rating ? 'text-accent' : 'text-muted'}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-heading font-semibold">
                    {currentTestimonial.projectType}
                  </span>
                </div>
              </div>

              {/* Quote Side */}
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                <Icon name="ChatBubbleLeftIcon" size={48} variant="solid" className="text-primary/20 mb-6" />
                
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Navigation Dots */}
                {isHydrated && (
                  <div className="flex items-center space-x-3">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeTestimonial 
                            ? 'w-12 bg-primary' :'w-2 bg-muted hover:bg-primary/50'
                        }`}
                        aria-label={`Ver testimonio ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "98%", label: "Retención de Clientes" },
            { value: "250+", label: "Proyectos Exitosos" },
            { value: "4.9/5", label: "Calificación Promedio" },
            { value: "100%", label: "Entregas a Tiempo" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;