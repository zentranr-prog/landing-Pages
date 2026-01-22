'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
}

const StatItem = ({ icon, value, label }: StatItemProps) => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Icon name={icon as any} size={32} variant="solid" className="text-primary" />
      </div>
      <p className="text-4xl font-heading font-bold text-foreground mb-2">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: 'DocumentTextIcon',
      value: '150+',
      label: 'Artículos Publicados',
    },
    {
      icon: 'DocumentArrowDownIcon',
      value: '45+',
      label: 'Whitepapers Disponibles',
    },
    {
      icon: 'VideoCameraIcon',
      value: '30+',
      label: 'Webinars Realizados',
    },
    {
      icon: 'UserGroupIcon',
      value: '5,000+',
      label: 'Suscriptores Activos',
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Nuestro Impacto en Conocimiento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compartiendo expertise y construyendo comunidad a través de contenido de calidad
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;