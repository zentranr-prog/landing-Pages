'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  id: number;
  name: string;
  category: string;
  icon: string;
  description: string;
}

interface TechnologyStackProps {
  className?: string;
}

const TechnologyStack = ({ className = '' }: TechnologyStackProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const technologies: Technology[] = [
    { id: 1, name: "React & Next.js", category: "frontend", icon: "CodeBracketIcon", description: "Frameworks modernos para interfaces dinámicas" },
    { id: 2, name: "Node.js & Python", category: "backend", icon: "ServerIcon", description: "Backend escalable y robusto" },
    { id: 3, name: "AWS & Azure", category: "cloud", icon: "CloudIcon", description: "Infraestructura cloud empresarial" },
    { id: 4, name: "PostgreSQL & MongoDB", category: "database", icon: "CircleStackIcon", description: "Bases de datos relacionales y NoSQL" },
    { id: 5, name: "Docker & Kubernetes", category: "devops", icon: "CubeIcon", description: "Containerización y orquestación" },
    { id: 6, name: "TensorFlow & PyTorch", category: "ai", icon: "CpuChipIcon", description: "Machine Learning e IA" },
    { id: 7, name: "GraphQL & REST", category: "backend", icon: "CommandLineIcon", description: "APIs modernas y eficientes" },
    { id: 8, name: "TypeScript", category: "frontend", icon: "CodeBracketSquareIcon", description: "Desarrollo type-safe" },
    { id: 9, name: "Redis & Elasticsearch", category: "database", icon: "BoltIcon", description: "Caching y búsqueda avanzada" },
    { id: 10, name: "Jenkins & GitLab CI", category: "devops", icon: "ArrowPathIcon", description: "CI/CD automatizado" },
    { id: 11, name: "Blockchain", category: "ai", icon: "LinkIcon", description: "Soluciones descentralizadas" },
    { id: 12, name: "React Native", category: "frontend", icon: "DevicePhoneMobileIcon", description: "Desarrollo móvil multiplataforma" }
  ];

  const categories = [
    { id: 'all', label: 'Todas', icon: 'Squares2X2Icon' },
    { id: 'frontend', label: 'Frontend', icon: 'ComputerDesktopIcon' },
    { id: 'backend', label: 'Backend', icon: 'ServerIcon' },
    { id: 'cloud', label: 'Cloud', icon: 'CloudIcon' },
    { id: 'database', label: 'Databases', icon: 'CircleStackIcon' },
    { id: 'devops', label: 'DevOps', icon: 'CogIcon' },
    { id: 'ai', label: 'IA & Emerging', icon: 'SparklesIcon' }
  ];

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-muted to-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="CpuChipIcon" size={20} variant="solid" className="text-primary" />
            <span className="text-sm font-heading font-semibold text-primary">Stack Tecnológico</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Tecnologías de Vanguardia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trabajamos con las herramientas más avanzadas del mercado para garantizar soluciones robustas, escalables y preparadas para el futuro
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => isHydrated && setActiveCategory(category.id)}
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-md font-heading font-semibold text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-brand scale-105'
                  : 'bg-card text-foreground hover:bg-muted hover:scale-105'
              }`}
            >
              <Icon name={category.icon as any} size={20} variant="outline" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.id}
              onMouseEnter={() => isHydrated && setHoveredTech(tech.id)}
              onMouseLeave={() => isHydrated && setHoveredTech(null)}
              className="group relative bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-brand transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Icon name={tech.icon as any} size={32} variant="outline" className="text-white" />
              </div>
              <h3 className="text-sm font-heading font-bold text-foreground mb-2">
                {tech.name}
              </h3>
              
              {/* Tooltip */}
              {isHydrated && hoveredTech === tech.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-secondary text-secondary-foreground text-xs rounded-md shadow-lg whitespace-nowrap z-10">
                  {tech.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-secondary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Y muchas más tecnologías adaptadas a las necesidades específicas de cada proyecto
          </p>
          <a
            href="/resources"
            className="inline-flex items-center space-x-2 text-primary font-heading font-semibold hover:text-accent transition-colors duration-300"
          >
            <span>Explorar Stack Completo</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;