'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  className?: string;
}

const FAQSection = ({ className = '' }: FAQSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQ[] = [
    {
      id: '1',
      question: '¿Cuánto tiempo toma programar una consulta?',
      answer: 'Típicamente, podemos programar una consulta dentro de 24-48 horas después de recibir su solicitud. Para consultas urgentes, ofrecemos disponibilidad el mismo día para clientes empresariales.',
      category: 'consultation'
    },
    {
      id: '2',
      question: '¿Qué información debo preparar para la consulta inicial?',
      answer: 'Recomendamos tener una descripción general de sus desafíos empresariales actuales, objetivos tecnológicos, presupuesto aproximado y cronograma deseado. Sin embargo, nuestro equipo puede ayudarle a definir estos elementos durante la consulta.',
      category: 'consultation'
    },
    {
      id: '3',
      question: '¿Las consultas tienen algún costo?',
      answer: 'La consulta inicial de descubrimiento (20 minutos) es completamente gratuita. Las consultas especializadas (ejecutivas, técnicas, de proyecto) son sin costo para proyectos potenciales que cumplan con nuestros criterios de alcance mínimo.',
      category: 'pricing'
    },
    {
      id: '4',
      question: '¿Trabajan con empresas fuera de Lima?',
      answer: 'Sí, trabajamos con clientes en todo Perú y América Latina. Ofrecemos consultas virtuales y podemos coordinar visitas presenciales según las necesidades del proyecto.',
      category: 'services'
    },
    {
      id: '5',
      question: '¿Qué tamaño de proyectos manejan?',
      answer: 'Trabajamos con proyectos de todos los tamaños, desde startups que necesitan un MVP hasta empresas que requieren transformaciones digitales completas. Nuestro equipo se adapta al alcance y presupuesto de cada cliente.',
      category: 'services'
    },
    {
      id: '6',
      question: '¿Ofrecen soporte después de completar un proyecto?',
      answer: 'Sí, ofrecemos varios niveles de soporte continuo, desde mantenimiento básico hasta soporte 24/7 para sistemas críticos. Los detalles se discuten durante la fase de planificación del proyecto.',
      category: 'services'
    },
    {
      id: '7',
      question: '¿Cuánto tiempo toma recibir una propuesta después de la consulta?',
      answer: 'Generalmente entregamos propuestas detalladas dentro de 3-5 días hábiles después de la consulta inicial. Para proyectos complejos que requieren análisis adicional, puede tomar hasta 7-10 días.',
      category: 'process'
    },
    {
      id: '8',
      question: '¿Puedo cambiar la fecha u hora de mi consulta programada?',
      answer: 'Sí, puede reprogramar su consulta hasta 24 horas antes de la hora programada sin ningún problema. Simplemente contáctenos por teléfono o correo electrónico.',
      category: 'consultation'
    }
  ];

  const categories = [
    { value: 'all', label: 'Todas las Preguntas' },
    { value: 'consultation', label: 'Consultas' },
    { value: 'pricing', label: 'Precios' },
    { value: 'services', label: 'Servicios' },
    { value: 'process', label: 'Proceso' }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFaq = (id: string) => {
    if (!isHydrated) return;
    setActiveId(activeId === id ? null : id);
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-muted ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-card rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-card rounded w-1/2 mx-auto"></div>
              <div className="space-y-3 mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-16 bg-card rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Encuentre respuestas a las preguntas más comunes sobre nuestro proceso de consulta.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-md font-heading font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'bg-card text-foreground border border-border hover:border-primary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-primary"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-300 hover:bg-muted"
                >
                  <span className="font-heading font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    variant="outline"
                    className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                      activeId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeId === faq.id && (
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20 text-center">
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
              ¿No Encuentra Su Respuesta?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está listo para responder cualquier pregunta adicional que pueda tener.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+51930120687"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 inline-flex items-center"
              >
                <Icon name="PhoneIcon" size={20} variant="outline" className="mr-2" />
                Llamar Ahora
              </a>
              <a
                href="mailto:zentranr@gmail.com"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-secondary/90 inline-flex items-center"
              >
                <Icon name="EnvelopeIcon" size={20} variant="outline" className="mr-2" />
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;