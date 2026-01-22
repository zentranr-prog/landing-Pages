'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorInputs {
  currentRevenue: number;
  employeeCount: number;
  itBudget: number;
  manualProcessHours: number;
}

interface ROIResults {
  projectedSavings: number;
  productivityGain: number;
  revenueIncrease: number;
  roi: number;
  paybackMonths: number;
}

const ROICalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentRevenue: 0,
    employeeCount: 0,
    itBudget: 0,
    manualProcessHours: 0
  });
  const [showResults, setShowResults] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const calculateROI = (): ROIResults => {
    const avgHourlyRate = 50; // PEN per hour
    const automationEfficiency = 0.65; // 65% efficiency gain
    const revenueGrowthRate = 0.15; // 15% revenue increase
    const investmentCost = inputs.itBudget * 0.3; // 30% of IT budget

    const annualManualCost = inputs.manualProcessHours * 52 * avgHourlyRate;
    const projectedSavings = annualManualCost * automationEfficiency;
    const productivityGain = inputs.employeeCount * 0.25 * avgHourlyRate * 2080; // 25% productivity gain
    const revenueIncrease = inputs.currentRevenue * revenueGrowthRate;
    const totalBenefit = projectedSavings + productivityGain + revenueIncrease;
    const roi = ((totalBenefit - investmentCost) / investmentCost) * 100;
    const paybackMonths = (investmentCost / (totalBenefit / 12));

    return {
      projectedSavings,
      productivityGain,
      revenueIncrease,
      roi,
      paybackMonths
    };
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs({ ...inputs, [field]: numValue });
    setShowResults(false);
  };

  const handleCalculate = () => {
    if (inputs.currentRevenue > 0 && inputs.employeeCount > 0) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setInputs({
      currentRevenue: 0,
      employeeCount: 0,
      itBudget: 0,
      manualProcessHours: 0
    });
    setShowResults(false);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-card rounded-2xl p-8 border border-border">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-3/4 mx-auto" />
              <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const results = showResults ? calculateROI() : null;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="CalculatorIcon" size={20} variant="solid" className="text-primary" />
              <span className="text-sm font-heading font-semibold text-primary">
                Calculadora Interactiva
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Calculadora de ROI de Transformación Digital
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estime el retorno de inversión potencial de su iniciativa de transformación digital en minutos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center">
                <Icon name="DocumentTextIcon" size={24} variant="outline" className="text-primary mr-2" />
                Información de su Empresa
              </h3>

              <div className="space-y-6">
                {/* Current Revenue */}
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                    Ingresos Anuales Actuales (PEN)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                      S/
                    </span>
                    <input
                      type="number"
                      value={inputs.currentRevenue || ''}
                      onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                      placeholder="5000000"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Employee Count */}
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                    Número de Empleados
                  </label>
                  <div className="relative">
                    <Icon name="UsersIcon" size={20} variant="outline" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="number"
                      value={inputs.employeeCount || ''}
                      onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                      placeholder="50"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                </div>

                {/* IT Budget */}
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                    Presupuesto Anual de TI (PEN)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                      S/
                    </span>
                    <input
                      type="number"
                      value={inputs.itBudget || ''}
                      onChange={(e) => handleInputChange('itBudget', e.target.value)}
                      placeholder="500000"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Manual Process Hours */}
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                    Horas Semanales en Procesos Manuales
                  </label>
                  <div className="relative">
                    <Icon name="ClockIcon" size={20} variant="outline" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="number"
                      value={inputs.manualProcessHours || ''}
                      onChange={(e) => handleInputChange('manualProcessHours', e.target.value)}
                      placeholder="40"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleCalculate}
                    disabled={inputs.currentRevenue === 0 || inputs.employeeCount === 0}
                    className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Icon name="CalculatorIcon" size={20} variant="outline" />
                    <span>Calcular ROI</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-muted text-foreground rounded-lg font-heading font-semibold transition-all duration-300 hover:bg-muted/80 flex items-center justify-center"
                  >
                    <Icon name="ArrowPathIcon" size={20} variant="outline" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
              {!showResults ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name="ChartBarIcon" size={48} variant="outline" className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Resultados Aparecerán Aquí
                  </h3>
                  <p className="text-muted-foreground">
                    Complete los campos y haga clic en "Calcular ROI" para ver su análisis personalizado
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-heading font-bold text-foreground flex items-center">
                      <Icon name="PresentationChartLineIcon" size={24} variant="solid" className="text-primary mr-2" />
                      Proyección de Resultados
                    </h3>
                  </div>

                  {/* ROI Percentage */}
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="text-sm text-muted-foreground mb-2">ROI Proyectado</div>
                    <div className="text-5xl font-heading font-bold text-primary mb-2">
                      {results!.roi.toFixed(0)}%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Retorno en 12 meses
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <Icon name="BanknotesIcon" size={24} variant="solid" className="text-accent mb-2" />
                      <div className="text-xs text-muted-foreground mb-1">Ahorro Proyectado</div>
                      <div className="text-lg font-heading font-bold text-foreground">
                        {formatCurrency(results!.projectedSavings)}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <Icon name="ArrowTrendingUpIcon" size={24} variant="solid" className="text-accent mb-2" />
                      <div className="text-xs text-muted-foreground mb-1">Ganancia Productividad</div>
                      <div className="text-lg font-heading font-bold text-foreground">
                        {formatCurrency(results!.productivityGain)}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <Icon name="ChartBarSquareIcon" size={24} variant="solid" className="text-accent mb-2" />
                      <div className="text-xs text-muted-foreground mb-1">Incremento Ingresos</div>
                      <div className="text-lg font-heading font-bold text-foreground">
                        {formatCurrency(results!.revenueIncrease)}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <Icon name="CalendarIcon" size={24} variant="solid" className="text-accent mb-2" />
                      <div className="text-xs text-muted-foreground mb-1">Período de Recuperación</div>
                      <div className="text-lg font-heading font-bold text-foreground">
                        {results!.paybackMonths.toFixed(1)} meses
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-white rounded-lg p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      ¿Quiere un análisis más detallado personalizado para su empresa?
                    </p>
                    <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 flex items-center justify-center space-x-2">
                      <span>Solicitar Análisis Completo</span>
                      <Icon name="ArrowRightIcon" size={20} variant="outline" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              * Los resultados son estimaciones basadas en promedios de la industria. Los resultados reales pueden variar según factores específicos de su organización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;