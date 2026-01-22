'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: string;
  description: string;
}

interface StatsSectionProps {
  className?: string;
}

const StatsSection = ({ className = '' }: StatsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<Record<number, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      id: 1,
      value: 12,
      suffix: "+",
      label: "Años de Experiencia",
      icon: "CalendarIcon",
      description: "Transformando negocios desde 2014"
    },
    {
      id: 2,
      value: 250,
      suffix: "+",
      label: "Proyectos Completados",
      icon: "CheckBadgeIcon",
      description: "Soluciones entregadas con éxito"
    },
    {
      id: 3,
      value: 98,
      suffix: "%",
      label: "Satisfacción del Cliente",
      icon: "FaceSmileIcon",
      description: "Índice de retención y recomendación"
    },
    {
      id: 4,
      value: 45,
      suffix: "+",
      label: "Expertos Certificados",
      icon: "AcademicCapIcon",
      description: "Equipo multidisciplinario especializado"
    }
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isHydrated]);

  useEffect(() => {
    if (!isVisible || !isHydrated) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), stat.value);
        setCounts((prev) => ({ ...prev, [stat.id]: newValue }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible, isHydrated]);

  return (
    <section ref={sectionRef} className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Resultados que Hablan por Sí Mismos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de una década construyendo soluciones tecnológicas que generan impacto real en organizaciones de todos los tamaños
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-brand transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={stat.icon as any} size={32} variant="outline" className="text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                {isHydrated ? counts[stat.id] || 0 : stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;