'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const heroSlides = [
    {
      title: "Transformando Desafíos Empresariales en Ventajas Tecnológicas",
      subtitle: "Donde el Pensamiento Estratégico se Encuentra con la Excelencia Técnica",
      description: "Somos su socio en la evolución digital, combinando experiencia técnica profunda con perspicacia estratégica empresarial para arquitectar futuros digitales que impulsan el crecimiento medible.",
      cta: "Agendar Consultoría",
      ctaSecondary: "Explorar Servicios"
    },
    {
      title: "Consultoría en Transformación Digital para Líderes Visionarios",
      subtitle: "Estrategia Tecnológica que Genera Ventaja Competitiva",
      description: "Auditorías tecnológicas, optimización de sistemas y metodologías de innovación que llevan a su organización del estado actual al futuro digital deseado.",
      cta: "Iniciar Evaluación",
      ctaSecondary: "Leer Insights"
    }
  ];

  const currentContent = heroSlides[currentSlide];

  return (
    <section className={`relative bg-gradient-to-br from-secondary via-primary to-accent overflow-hidden ${className}`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="currentColor" />
                <circle cx="75" cy="75" r="2" fill="currentColor" />
                <line x1="25" y1="25" x2="75" y2="25" stroke="currentColor" strokeWidth="1" />
                <line x1="75" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent" />
              <span className="text-sm font-medium">Innovación Tecnológica Empresarial</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight">
              {currentContent.title}
            </h1>

            <p className="text-xl lg:text-2xl font-heading font-semibold text-accent">
              {currentContent.subtitle}
            </p>

            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
              {currentContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-md font-heading font-bold text-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-brand hover:scale-105 active:scale-95"
              >
                {currentContent.cta}
                <Icon name="ArrowRightIcon" size={20} variant="outline" className="ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-md font-heading font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50"
              >
                {currentContent.ctaSecondary}
              </Link>
            </div>

            {/* Slide Indicators */}
            {isHydrated && (
              <div className="flex items-center space-x-3 pt-8">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-12 bg-accent' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Ir a diapositiva ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full border-2 border-white/20 rounded-full animate-pulse" />
                <div className="absolute w-4/5 h-4/5 border-2 border-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute w-3/5 h-3/5 border-2 border-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              </div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-2xl">
                  <Icon name="CpuChipIcon" size={64} variant="solid" className="text-white" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Icon name="CodeBracketIcon" size={32} variant="outline" className="text-accent" />
              </div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Icon name="ChartBarIcon" size={32} variant="outline" className="text-accent" />
              </div>
              <div className="absolute top-1/2 right-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Icon name="CloudIcon" size={32} variant="outline" className="text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;