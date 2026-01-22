import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  methodology: string[];
  deliverables: string[];
  timeline: string;
  image: string;
  alt: string;
}

interface ServiceDetailsProps {
  className?: string;
}

const ServiceDetails = ({ className = '' }: ServiceDetailsProps) => {
  const serviceDetails: ServiceDetail[] = [
    {
      id: 'desarrollo-software',
      title: 'Desarrollo de Software Personalizado',
      subtitle: 'Soluciones a medida para su negocio',
      description: 'Creamos aplicaciones empresariales robustas y escalables utilizando las últimas tecnologías y mejores prácticas de la industria. Nuestro enfoque ágil garantiza entregas iterativas y adaptación continua a sus necesidades cambiantes.',
      methodology: [
        'Análisis de requisitos y diseño de arquitectura',
        'Desarrollo iterativo con sprints de 2 semanas',
        'Pruebas automatizadas y control de calidad continuo',
        'Despliegue progresivo con integración continua',
        'Monitoreo post-lanzamiento y optimización'
      ],
      deliverables: [
        'Código fuente documentado y versionado',
        'Documentación técnica completa',
        'Manuales de usuario y capacitación',
        'Plan de mantenimiento y soporte',
        'Transferencia de conocimiento al equipo'
      ],
      timeline: '3-6 meses',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      alt: 'Equipo de desarrolladores trabajando en computadoras con código en pantallas múltiples en oficina moderna'
    },
    {
      id: 'consultoria-ti',
      title: 'Consultoría y Estrategia TI',
      subtitle: 'Transformación digital estratégica',
      description: 'Ayudamos a las organizaciones a navegar su viaje de transformación digital con estrategias tecnológicas alineadas a objetivos de negocio. Nuestros consultores expertos evalúan su infraestructura actual y diseñan hojas de ruta para el futuro.',
      methodology: [
        'Evaluación integral de madurez digital',
        'Análisis de brechas tecnológicas y oportunidades',
        'Diseño de arquitectura empresarial objetivo',
        'Desarrollo de hoja de ruta de transformación',
        'Acompañamiento en implementación y cambio'
      ],
      deliverables: [
        'Informe de evaluación tecnológica',
        'Estrategia de transformación digital',
        'Arquitectura empresarial objetivo',
        'Hoja de ruta de implementación',
        'Plan de gestión del cambio'
      ],
      timeline: '2-4 meses',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      alt: 'Consultores empresariales en reunión estratégica con gráficos y diagramas en pizarra digital'
    },
    {
      id: 'implementacion-soporte',
      title: 'Implementación y Soporte',
      subtitle: 'Garantizamos el éxito operativo',
      description: 'Gestionamos la implementación completa de soluciones tecnológicas y proporcionamos soporte continuo para garantizar operaciones sin interrupciones. Nuestro equipo está disponible 24/7 para resolver cualquier incidencia.',
      methodology: [
        'Planificación detallada de implementación',
        'Migración de datos y configuración de sistemas',
        'Pruebas de aceptación de usuario (UAT)',
        'Capacitación de usuarios finales',
        'Soporte post-implementación y optimización'
      ],
      deliverables: [
        'Sistema implementado y operativo',
        'Documentación de configuración',
        'Materiales de capacitación',
        'Acuerdo de nivel de servicio (SLA)',
        'Portal de soporte y tickets'
      ],
      timeline: '1-3 meses',
      image: 'https://images.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg',
      alt: 'Técnico de soporte TI trabajando en servidor con laptop y herramientas en centro de datos'
    },
    {
      id: 'laboratorio-innovacion',
      title: 'Laboratorio de Innovación',
      subtitle: 'Explorando el futuro tecnológico',
      description: 'Experimentamos con tecnologías emergentes para identificar oportunidades de innovación para su negocio. Desarrollamos pruebas de concepto y prototipos que demuestran el valor potencial de nuevas tecnologías.',
      methodology: [
        'Identificación de casos de uso innovadores',
        'Investigación de tecnologías emergentes',
        'Desarrollo de pruebas de concepto (PoC)',
        'Evaluación de viabilidad técnica y comercial',
        'Roadmap de adopción tecnológica'
      ],
      deliverables: [
        'Informe de investigación tecnológica',
        'Prototipo funcional o PoC',
        'Análisis de viabilidad y ROI',
        'Recomendaciones de implementación',
        'Plan de escalamiento'
      ],
      timeline: '1-2 meses',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      alt: 'Científico de datos trabajando con visualizaciones de inteligencia artificial en pantallas holográficas'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {serviceDetails.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-brand">
                  <AppImage
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h2>
                <p className="text-lg text-primary font-heading font-semibold mb-4">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-3 flex items-center space-x-2">
                    <Icon name="ClipboardDocumentCheckIcon" size={20} className="text-primary" />
                    <span>Metodología</span>
                  </h3>
                  <ul className="space-y-2">
                    {service.methodology.map((step, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-sm text-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-3 flex items-center space-x-2">
                    <Icon name="DocumentTextIcon" size={20} className="text-primary" />
                    <span>Entregables</span>
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon name="ClockIcon" size={20} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Duración típica: <strong className="text-foreground">{service.timeline}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;