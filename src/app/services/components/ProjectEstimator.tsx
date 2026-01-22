'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface EstimatorFormData {
  projectType: string;
  complexity: string;
  timeline: string;
  budget: string;
}

interface ProjectEstimatorProps {
  className?: string;
}

const ProjectEstimator = ({ className = '' }: ProjectEstimatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<EstimatorFormData>({
    projectType: '',
    complexity: '',
    timeline: '',
    budget: ''
  });
  const [showEstimate, setShowEstimate] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleInputChange = (field: keyof EstimatorFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setShowEstimate(false);
  };

  const calculateEstimate = () => {
    if (formData.projectType && formData.complexity && formData.timeline && formData.budget) {
      setShowEstimate(true);
    }
  };

  const getEstimateRange = () => {
    const complexityMultiplier = formData.complexity === 'simple' ? 1 : formData.complexity === 'medium' ? 1.5 : 2;
    const baseWeeks = formData.timeline === 'urgent' ? 8 : formData.timeline === 'normal' ? 12 : 16;
    const estimatedWeeks = Math.round(baseWeeks * complexityMultiplier);
    
    return {
      duration: `${estimatedWeeks} semanas`,
      team: formData.complexity === 'simple' ? '2-3 personas' : formData.complexity === 'medium' ? '4-6 personas' : '7-10 personas',
      investment: formData.budget
    };
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Estimador de Proyectos
            </h2>
            <p className="text-lg text-muted-foreground">Cargando estimador...</p>
          </div>
        </div>
      </section>
    );
  }

  const estimate = showEstimate ? getEstimateRange() : null;

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Estimador de Proyectos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Obtenga una estimación preliminar de duración y recursos para su proyecto tecnológico.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 lg:p-12 shadow-brand">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Tipo de Proyecto
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Seleccione una opción</option>
                  <option value="web">Aplicación Web</option>
                  <option value="mobile">Aplicación Móvil</option>
                  <option value="enterprise">Sistema Empresarial</option>
                  <option value="consulting">Consultoría TI</option>
                  <option value="integration">Integración de Sistemas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Complejidad
                </label>
                <select
                  value={formData.complexity}
                  onChange={(e) => handleInputChange('complexity', e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Seleccione una opción</option>
                  <option value="simple">Simple (Funcionalidad básica)</option>
                  <option value="medium">Media (Funcionalidad estándar)</option>
                  <option value="complex">Compleja (Funcionalidad avanzada)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Plazo Deseado
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Seleccione una opción</option>
                  <option value="urgent">Urgente (2-3 meses)</option>
                  <option value="normal">Normal (3-6 meses)</option>
                  <option value="flexible">Flexible (6+ meses)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Presupuesto Estimado
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Seleccione una opción</option>
                  <option value="PEN 50,000 - 100,000">PEN 50,000 - 100,000</option>
                  <option value="PEN 100,000 - 250,000">PEN 100,000 - 250,000</option>
                  <option value="PEN 250,000 - 500,000">PEN 250,000 - 500,000</option>
                  <option value="PEN 500,000+">PEN 500,000+</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculateEstimate}
              disabled={!formData.projectType || !formData.complexity || !formData.timeline || !formData.budget}
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-md font-heading font-semibold text-base transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Calcular Estimación
            </button>

            {showEstimate && estimate && (
              <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border-2 border-primary/20">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="CalculatorIcon" size={24} className="text-primary" />
                  <span>Estimación Preliminar</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Icon name="ClockIcon" size={20} className="text-primary" />
                      <span className="text-sm font-heading font-semibold text-muted-foreground">Duración</span>
                    </div>
                    <div className="text-2xl font-heading font-bold text-primary">
                      {estimate.duration}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Icon name="UsersIcon" size={20} className="text-primary" />
                      <span className="text-sm font-heading font-semibold text-muted-foreground">Equipo</span>
                    </div>
                    <div className="text-2xl font-heading font-bold text-primary">
                      {estimate.team}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Icon name="CurrencyDollarIcon" size={20} className="text-primary" />
                      <span className="text-sm font-heading font-semibold text-muted-foreground">Inversión</span>
                    </div>
                    <div className="text-lg font-heading font-bold text-primary">
                      {estimate.investment}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-card rounded-md">
                  <p className="text-sm text-muted-foreground text-center">
                    <Icon name="InformationCircleIcon" size={16} className="inline mr-1" />
                    Esta es una estimación preliminar. Para una cotización detallada, por favor contáctenos.
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-brand hover:scale-105 active:scale-95"
                  >
                    <span>Solicitar Cotización Detallada</span>
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;