'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
}

interface TechnologyMatrixProps {
  className?: string;
}

const TechnologyMatrix = ({ className = '' }: TechnologyMatrixProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isHydrated, setIsHydrated] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const technologies: Technology[] = [
    { name: 'React', category: 'Frontend', proficiency: 95, icon: 'CodeBracketIcon' },
    { name: 'Next.js', category: 'Frontend', proficiency: 90, icon: 'CodeBracketIcon' },
    { name: 'TypeScript', category: 'Frontend', proficiency: 92, icon: 'CodeBracketIcon' },
    { name: 'Node.js', category: 'Backend', proficiency: 93, icon: 'ServerIcon' },
    { name: 'Python', category: 'Backend', proficiency: 88, icon: 'ServerIcon' },
    { name: 'PostgreSQL', category: 'Database', proficiency: 90, icon: 'CircleStackIcon' },
    { name: 'MongoDB', category: 'Database', proficiency: 85, icon: 'CircleStackIcon' },
    { name: 'AWS', category: 'Cloud', proficiency: 91, icon: 'CloudIcon' },
    { name: 'Azure', category: 'Cloud', proficiency: 87, icon: 'CloudIcon' },
    { name: 'Docker', category: 'DevOps', proficiency: 89, icon: 'CubeIcon' },
    { name: 'Kubernetes', category: 'DevOps', proficiency: 84, icon: 'CubeIcon' },
    { name: 'TensorFlow', category: 'AI/ML', proficiency: 82, icon: 'CpuChipIcon' }
  ];

  const categories = ['all', 'Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'AI/ML'];

  const filteredTechnologies = selectedCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.category === selectedCategory);

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-muted ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Stack Tecnológico
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cargando matriz de tecnologías...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dominamos las tecnologías más avanzadas para construir soluciones robustas y escalables.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-md font-heading font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-foreground hover:bg-card-foreground/10'
              }`}
            >
              {category === 'all' ? 'Todas' : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-card rounded-lg p-6 border border-border hover:shadow-brand transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={tech.icon as any} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">
                      {tech.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">{tech.category}</span>
                  </div>
                </div>
                <span className="text-2xl font-heading font-bold text-primary">
                  {tech.proficiency}%
                </span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                  style={{ width: `${tech.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyMatrix;