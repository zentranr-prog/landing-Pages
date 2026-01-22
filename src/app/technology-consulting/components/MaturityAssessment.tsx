'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface AssessmentQuestion {
  id: number;
  category: string;
  question: string;
  options: { value: number; label: string }[];
}

interface AssessmentResult {
  score: number;
  level: string;
  description: string;
  recommendations: string[];
  color: string;
}

const MaturityAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const questions: AssessmentQuestion[] = [
    {
      id: 1,
      category: 'Estrategia Digital',
      question: '¿Su organización tiene una estrategia digital claramente definida y documentada?',
      options: [
        { value: 1, label: 'No tenemos estrategia digital' },
        { value: 2, label: 'Estrategia básica en desarrollo' },
        { value: 3, label: 'Estrategia definida pero no implementada' },
        { value: 4, label: 'Estrategia implementada parcialmente' },
        { value: 5, label: 'Estrategia completamente implementada y optimizada' }
      ]
    },
    {
      id: 2,
      category: 'Infraestructura Tecnológica',
      question: '¿Qué tan moderna y escalable es su infraestructura tecnológica actual?',
      options: [
        { value: 1, label: 'Sistemas legacy sin planes de actualización' },
        { value: 2, label: 'Infraestructura desactualizada con algunos componentes modernos' },
        { value: 3, label: 'Infraestructura mixta en proceso de modernización' },
        { value: 4, label: 'Infraestructura mayormente moderna y escalable' },
        { value: 5, label: 'Infraestructura cloud-native completamente escalable' }
      ]
    },
    {
      id: 3,
      category: 'Datos y Analytics',
      question: '¿Cómo utiliza su organización los datos para la toma de decisiones?',
      options: [
        { value: 1, label: 'Decisiones basadas en intuición sin datos' },
        { value: 2, label: 'Reportes básicos manuales ocasionales' },
        { value: 3, label: 'Dashboards básicos con datos históricos' },
        { value: 4, label: 'Analytics avanzados con insights predictivos' },
        { value: 5, label: 'IA/ML integrado para decisiones en tiempo real' }
      ]
    },
    {
      id: 4,
      category: 'Cultura Digital',
      question: '¿Qué tan preparado está su equipo para adoptar nuevas tecnologías?',
      options: [
        { value: 1, label: 'Resistencia significativa al cambio' },
        { value: 2, label: 'Aceptación limitada con capacitación mínima' },
        { value: 3, label: 'Apertura moderada con programas de capacitación' },
        { value: 4, label: 'Cultura de innovación con adopción proactiva' },
        { value: 5, label: 'Organización completamente ágil y adaptativa' }
      ]
    },
    {
      id: 5,
      category: 'Seguridad y Cumplimiento',
      question: '¿Cómo maneja su organización la seguridad y el cumplimiento normativo?',
      options: [
        { value: 1, label: 'Sin políticas formales de seguridad' },
        { value: 2, label: 'Medidas básicas de seguridad reactivas' },
        { value: 3, label: 'Políticas de seguridad definidas en implementación' },
        { value: 4, label: 'Seguridad proactiva con auditorías regulares' },
        { value: 5, label: 'Seguridad de clase mundial con certificaciones' }
      ]
    }
  ];

  const calculateResults = (): AssessmentResult => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage >= 80) {
      return {
        score: percentage,
        level: 'Líder Digital',
        description: 'Su organización está en la vanguardia de la transformación digital con procesos maduros y optimizados.',
        recommendations: [
          'Mantener liderazgo mediante innovación continua',
          'Explorar tecnologías emergentes (IA, Blockchain)',
          'Compartir mejores prácticas con la industria',
          'Optimizar ROI de inversiones tecnológicas'
        ],
        color: 'from-emerald-500 to-green-600'
      };
    } else if (percentage >= 60) {
      return {
        score: percentage,
        level: 'Transformador Activo',
        description: 'Su organización está en proceso activo de transformación con bases sólidas establecidas.',
        recommendations: [
          'Acelerar implementación de estrategia digital',
          'Invertir en capacitación y cultura digital',
          'Modernizar infraestructura legacy restante',
          'Implementar analytics avanzados'
        ],
        color: 'from-primary to-accent'
      };
    } else if (percentage >= 40) {
      return {
        score: percentage,
        level: 'Iniciador Digital',
        description: 'Su organización ha comenzado el viaje digital pero requiere aceleración estratégica.',
        recommendations: [
          'Desarrollar estrategia digital integral',
          'Priorizar modernización de infraestructura',
          'Establecer cultura de innovación',
          'Implementar sistemas de gestión de datos'
        ],
        color: 'from-amber-500 to-orange-600'
      };
    } else {
      return {
        score: percentage,
        level: 'Oportunidad de Transformación',
        description: 'Su organización tiene un potencial significativo de mejora mediante transformación digital estratégica.',
        recommendations: [
          'Realizar auditoría tecnológica completa',
          'Definir visión y roadmap digital',
          'Comenzar con proyectos piloto de alto impacto',
          'Invertir en capacitación fundamental del equipo'
        ],
        color: 'from-red-500 to-rose-600'
      };
    }
  };

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;
  const canProceed = answers[currentQuestion?.id] !== undefined;

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 border border-border">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-3/4 mx-auto" />
              <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const results = calculateResults();

    return (
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Results Card */}
            <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-brand">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                  <Icon name="ChartBarIcon" size={20} variant="solid" className="text-accent" />
                  <span className="text-sm font-heading font-semibold text-accent">
                    Resultados de Evaluación
                  </span>
                </div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                  Su Nivel de Madurez Digital
                </h3>
              </div>

              {/* Score Circle */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#scoreGradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(results.score / 100) * 553} 553`}
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className="text-primary" stopColor="currentColor" />
                        <stop offset="100%" className="text-accent" stopColor="currentColor" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-foreground">
                      {Math.round(results.score)}%
                    </span>
                    <span className="text-sm text-muted-foreground">Puntuación</span>
                  </div>
                </div>
              </div>

              {/* Level Badge */}
              <div className="text-center mb-6">
                <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${results.color} text-white font-heading font-bold text-lg`}>
                  {results.level}
                </div>
              </div>

              {/* Description */}
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                {results.description}
              </p>

              {/* Recommendations */}
              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center">
                  <Icon name="LightBulbIcon" size={24} variant="solid" className="text-accent mr-2" />
                  Recomendaciones Estratégicas
                </h4>
                <ul className="space-y-3">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-8 py-3 bg-muted text-foreground rounded-md font-heading font-semibold transition-all duration-300 hover:bg-muted/80 flex items-center justify-center space-x-2"
                >
                  <Icon name="ArrowPathIcon" size={20} variant="outline" />
                  <span>Realizar Nueva Evaluación</span>
                </button>
                <button className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 flex items-center justify-center space-x-2">
                  <span>Agendar Consulta Personalizada</span>
                  <Icon name="ArrowRightIcon" size={20} variant="outline" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="ClipboardDocumentCheckIcon" size={20} variant="solid" className="text-primary" />
              <span className="text-sm font-heading font-semibold text-primary">
                Evaluación Gratuita
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Evaluación de Madurez Digital
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubra el nivel de transformación digital de su organización en 5 minutos
            </p>
          </div>

          {/* Assessment Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-brand">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-heading font-semibold text-foreground">
                  Pregunta {currentStep + 1} de {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Completado
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-4">
                <span className="text-xs font-heading font-semibold text-accent">
                  {currentQuestion.category}
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(currentQuestion.id, option.value)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                      answers[currentQuestion.id] === option.value
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        answers[currentQuestion.id] === option.value
                          ? 'border-primary bg-primary' :'border-border'
                      }`}>
                        {answers[currentQuestion.id] === option.value && (
                          <Icon name="CheckIcon" size={14} variant="outline" className="text-white" />
                        )}
                      </div>
                      <span className="text-foreground">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="px-6 py-3 bg-muted text-foreground rounded-md font-heading font-semibold transition-all duration-300 hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Icon name="ArrowLeftIcon" size={20} variant="outline" />
                <span>Anterior</span>
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <span>{currentStep === questions.length - 1 ? 'Ver Resultados' : 'Siguiente'}</span>
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaturityAssessment;