'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQProps {
  className?: string;
}

const FAQ = ({ className = '' }: FAQProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQItem[] = [
    {
      question: '¿Cuánto tiempo toma desarrollar una aplicación personalizada?',
      answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Una aplicación simple puede tomar 2-3 meses, mientras que sistemas empresariales complejos pueden requerir 6-12 meses. Utilizamos metodología ágil con entregas incrementales cada 2 semanas.',
      category: 'Desarrollo'
    },
    {
      question: '¿Qué metodología de desarrollo utilizan?',
      answer: 'Utilizamos metodología ágil (Scrum) con sprints de 2 semanas. Esto permite entregas incrementales, adaptación continua a cambios y comunicación constante con el cliente. Incluimos revisiones regulares y demostraciones de funcionalidad.',
      category: 'Desarrollo'
    },
    {
      question: '¿Ofrecen soporte después del lanzamiento?',
      answer: 'Sí, ofrecemos planes de soporte y mantenimiento continuo que incluyen monitoreo 24/7, actualizaciones de seguridad, corrección de errores, optimización de rendimiento y soporte técnico. Los planes se adaptan a las necesidades específicas de cada cliente.',
      category: 'Soporte'
    },
    {
      question: '¿Cómo garantizan la seguridad de los datos?',
      answer: 'Implementamos múltiples capas de seguridad: encriptación de datos en tránsito y reposo, autenticación multifactor, auditorías de seguridad regulares, cumplimiento de estándares internacionales (ISO 27001, GDPR), y pruebas de penetración periódicas.',
      category: 'Seguridad'
    },
    {
      question: '¿Pueden integrar sistemas existentes?',
      answer: 'Absolutamente. Tenemos amplia experiencia en integración de sistemas legacy con tecnologías modernas. Utilizamos APIs, middleware y estrategias de migración gradual para garantizar continuidad operativa durante la transición.',
      category: 'Integración'
    },
    {
      question: '¿Qué incluye el servicio de consultoría TI?',
      answer: 'Nuestro servicio de consultoría incluye evaluación de madurez digital, análisis de brechas tecnológicas, diseño de arquitectura empresarial, desarrollo de hoja de ruta de transformación, y acompañamiento en implementación y gestión del cambio.',
      category: 'Consultoría'
    },
    {
      question: '¿Trabajan con startups o solo con empresas grandes?',
      answer: 'Trabajamos con organizaciones de todos los tamaños, desde startups hasta empresas Fortune 500. Adaptamos nuestros servicios y modelos de precios según el tamaño y necesidades específicas de cada cliente.',
      category: 'General'
    },
    {
      question: '¿Qué tecnologías utilizan?',
      answer: 'Utilizamos un stack tecnológico moderno y probado: React/Next.js para frontend, Node.js/Python para backend, PostgreSQL/MongoDB para bases de datos, AWS/Azure para cloud, y Docker/Kubernetes para DevOps. Seleccionamos tecnologías según requisitos específicos del proyecto.',
      category: 'Tecnología'
    },
    {
      question: '¿Cómo manejan los cambios en los requisitos durante el desarrollo?',
      answer: 'Nuestra metodología ágil está diseñada para adaptarse a cambios. Evaluamos el impacto de cada cambio en alcance, tiempo y costo, y trabajamos con el cliente para priorizar y ajustar el plan de proyecto según sea necesario.',
      category: 'Desarrollo'
    },
    {
      question: '¿Ofrecen capacitación para usuarios finales?',
      answer: 'Sí, incluimos capacitación integral como parte de nuestros servicios. Esto incluye documentación detallada, sesiones de capacitación presenciales o virtuales, videos tutoriales, y soporte continuo durante la fase de adopción.',
      category: 'Soporte'
    }
  ];

  const categories = ['all', 'Desarrollo', 'Consultoría', 'Soporte', 'Seguridad', 'Integración', 'Tecnología', 'General'];

  const filteredFAQs = selectedCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">Cargando preguntas...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Respuestas a las preguntas más comunes sobre nuestros servicios y procesos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md font-heading font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-foreground hover:bg-card-foreground/10'
              }`}
            >
              {category === 'all' ? 'Todas' : category}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-brand"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted transition-colors duration-300"
              >
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <span className="text-xs text-primary font-medium mt-1 inline-block">
                    {faq.category}
                  </span>
                </div>
                <Icon
                  name={openIndex === index ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={24}
                  className="text-primary flex-shrink-0"
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿No encuentra la respuesta que busca?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-brand hover:scale-105 active:scale-95"
          >
            <span>Contáctenos</span>
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;