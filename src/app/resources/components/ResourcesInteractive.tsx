'use client';

import React, { useState, useEffect } from 'react';
import ResourceCard from './ResourceCard';
import FilterBar from './FilterBar';
import FeaturedResource from './FeaturedResource';
import NewsletterSection from './NewsletterSection';
import StatsSection from './StatsSection';
import Icon from '@/components/ui/AppIcon';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  tags: string[];
  type: 'blog' | 'whitepaper' | 'webinar';
  industry: string;
}

const ResourcesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const resources: Resource[] = [
    {
      id: 1,
      title: 'El Futuro de la Transformación Digital en América Latina',
      description: 'Análisis profundo de las tendencias tecnológicas que están redefiniendo el panorama empresarial en la región, con enfoque en adopción de cloud, IA y automatización.',
      category: 'Transformación Digital',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      imageAlt: 'Vista futurista de red digital global con conexiones de datos brillantes sobre fondo azul oscuro',
      author: 'Carlos Mendoza',
      date: '15/01/2026',
      tags: ['Cloud', 'IA', 'Estrategia'],
      type: 'blog',
      industry: 'all',
    },
    {
      id: 2,
      title: 'Guía Completa: Migración a Arquitecturas Cloud-Native',
      description: 'Whitepaper técnico que detalla estrategias, mejores prácticas y casos de estudio para migrar aplicaciones legacy a arquitecturas modernas basadas en microservicios.',
      category: 'Desarrollo de Software',
      readTime: '25 min',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
      imageAlt: 'Diagrama de arquitectura de nube con servidores conectados y flujos de datos en ambiente tecnológico moderno',
      author: 'Ana Rodríguez',
      date: '10/01/2026',
      tags: ['Cloud', 'Microservicios', 'DevOps'],
      type: 'whitepaper',
      industry: 'all',
    },
    {
      id: 3,
      title: 'Webinar: Seguridad en Aplicaciones Empresariales',
      description: 'Sesión interactiva sobre implementación de frameworks de seguridad, gestión de vulnerabilidades y cumplimiento normativo en aplicaciones críticas de negocio.',
      category: 'Seguridad',
      readTime: '45 min',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      imageAlt: 'Candado digital brillante sobre fondo de código binario representando ciberseguridad empresarial',
      author: 'Roberto Silva',
      date: '08/01/2026',
      tags: ['Seguridad', 'Compliance', 'DevSecOps'],
      type: 'webinar',
      industry: 'Finanzas',
    },
    {
      id: 4,
      title: 'Inteligencia Artificial Aplicada al Sector Financiero',
      description: 'Exploración de casos de uso reales de IA en banca y finanzas: detección de fraude, análisis predictivo, automatización de procesos y personalización de servicios.',
      category: 'Tecnologías Emergentes',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      imageAlt: 'Gráficos financieros holográficos flotando sobre tablet con análisis de datos en tiempo real',
      author: 'María González',
      date: '05/01/2026',
      tags: ['IA', 'Machine Learning', 'Fintech'],
      type: 'blog',
      industry: 'Finanzas',
    },
    {
      id: 5,
      title: 'Optimización de Procesos con RPA y Automatización',
      description: 'Whitepaper estratégico sobre implementación de Robotic Process Automation para reducir costos operativos y mejorar eficiencia en procesos repetitivos.',
      category: 'Consultoría IT',
      readTime: '20 min',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      imageAlt: 'Brazo robótico industrial trabajando con precisión en línea de producción automatizada moderna',
      author: 'Diego Martínez',
      date: '02/01/2026',
      tags: ['RPA', 'Automatización', 'Eficiencia'],
      type: 'whitepaper',
      industry: 'Manufactura',
    },
    {
      id: 6,
      title: 'Transformación Digital en el Sector Salud',
      description: 'Análisis de tecnologías emergentes en healthcare: telemedicina, historias clínicas electrónicas, IoT médico y análisis de datos para mejora de diagnósticos.',
      category: 'Transformación Digital',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      imageAlt: 'Médico usando tablet con interfaz digital de salud mostrando datos vitales del paciente',
      author: 'Laura Fernández',
      date: '28/12/2025',
      tags: ['Healthcare', 'IoT', 'Telemedicina'],
      type: 'blog',
      industry: 'Salud',
    },
    {
      id: 7,
      title: 'Webinar: Metodologías Ágiles en Proyectos Enterprise',
      description: 'Sesión práctica sobre implementación de Scrum y Kanban en organizaciones grandes, gestión de equipos distribuidos y escalamiento de prácticas ágiles.',
      category: 'Desarrollo de Software',
      readTime: '50 min',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      imageAlt: 'Equipo de desarrollo colaborando en tablero Kanban con post-its coloridos en oficina moderna',
      author: 'Javier Torres',
      date: '22/12/2025',
      tags: ['Agile', 'Scrum', 'Gestión'],
      type: 'webinar',
      industry: 'all',
    },
    {
      id: 8,
      title: 'E-commerce: Estrategias de Personalización con IA',
      description: 'Guía completa sobre implementación de motores de recomendación, análisis de comportamiento de usuario y optimización de conversión en plataformas retail.',
      category: 'Tecnologías Emergentes',
      readTime: '15 min',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      imageAlt: 'Carrito de compras digital con iconos de productos flotantes en interfaz de e-commerce moderna',
      author: 'Patricia Ruiz',
      date: '18/12/2025',
      tags: ['E-commerce', 'IA', 'Personalización'],
      type: 'blog',
      industry: 'Retail',
    },
    {
      id: 9,
      title: 'Arquitectura de Datos para Business Intelligence',
      description: 'Whitepaper técnico sobre diseño de data warehouses, pipelines ETL, modelado dimensional y estrategias de gobernanza de datos empresariales.',
      category: 'Consultoría IT',
      readTime: '30 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      imageAlt: 'Dashboard de business intelligence con múltiples gráficos y métricas en pantallas grandes',
      author: 'Fernando López',
      date: '15/12/2025',
      tags: ['Data', 'BI', 'Analytics'],
      type: 'whitepaper',
      industry: 'all',
    },
    {
      id: 10,
      title: 'Blockchain en Cadenas de Suministro',
      description: 'Exploración de aplicaciones prácticas de blockchain para trazabilidad, transparencia y eficiencia en logística y gestión de inventarios.',
      category: 'Tecnologías Emergentes',
      readTime: '11 min',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0',
      imageAlt: 'Red de bloques blockchain conectados con cadenas digitales brillantes sobre fondo tecnológico',
      author: 'Andrés Vargas',
      date: '12/12/2025',
      tags: ['Blockchain', 'Supply Chain', 'Logística'],
      type: 'blog',
      industry: 'Manufactura',
    },
    {
      id: 11,
      title: 'Webinar: Ciberseguridad en la Era del Trabajo Remoto',
      description: 'Sesión sobre protección de infraestructura distribuida, gestión de accesos remotos, VPN empresarial y políticas de seguridad para equipos híbridos.',
      category: 'Seguridad',
      readTime: '40 min',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
      imageAlt: 'Profesional trabajando remotamente con laptop mostrando dashboard de seguridad en pantalla',
      author: 'Claudia Morales',
      date: '08/12/2025',
      tags: ['Seguridad', 'Remote Work', 'VPN'],
      type: 'webinar',
      industry: 'all',
    },
    {
      id: 12,
      title: 'Plataformas Educativas: Tecnología para el Aprendizaje',
      description: 'Análisis de LMS modernos, gamificación educativa, análisis de aprendizaje y herramientas de colaboración para instituciones educativas.',
      category: 'Transformación Digital',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
      imageAlt: 'Estudiante usando tablet con aplicación educativa interactiva en biblioteca moderna',
      author: 'Ricardo Sánchez',
      date: '05/12/2025',
      tags: ['EdTech', 'LMS', 'E-learning'],
      type: 'blog',
      industry: 'Educación',
    },
  ];

  const featuredResource = {
    title: 'Estrategias de Transformación Digital para 2026',
    description: 'Descubre las tendencias tecnológicas clave que definirán el éxito empresarial en el próximo año. Este análisis exhaustivo cubre desde inteligencia artificial hasta arquitecturas cloud-native, proporcionando insights accionables para líderes tecnológicos.',
    category: 'Transformación Digital',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    imageAlt: 'Equipo ejecutivo analizando estrategia digital en sala de juntas con pantallas mostrando datos',
    author: 'Dr. Miguel Ángel Ramírez',
    date: '20/01/2026',
    readTime: '15 min',
  };

  const filteredResources = resources.filter((resource) => {
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesCategory =
      selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesIndustry =
      selectedIndustry === 'all' || resource.industry === selectedIndustry;
    const matchesSearch =
      searchQuery === '' ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesType && matchesCategory && matchesIndustry && matchesSearch;
  });

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResources = filteredResources.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleClearFilters = () => {
    setSelectedType('all');
    setSelectedCategory('all');
    setSelectedIndustry('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleDownload = (title: string) => {
    if (!isHydrated) return;
    alert(`Descargando: ${title}`);
  };

  const handleRead = (title: string) => {
    if (!isHydrated) return;
    alert(`Abriendo: ${title}`);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16 lg:h-20" />
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-64 bg-muted rounded-lg" />
            <div className="h-16 bg-muted rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-muted rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
            <Icon name="BookOpenIcon" size={20} variant="solid" />
            <span className="text-sm font-semibold">Centro de Conocimiento</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Recursos & Conocimiento Tecnológico
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Explora nuestra biblioteca de artículos, whitepapers y webinars diseñados para impulsar tu transformación digital
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Featured Resource */}
          <FeaturedResource
            {...featuredResource}
            onRead={() => handleRead(featuredResource.title)}
          />

          {/* Filter Bar */}
          <FilterBar
            selectedType={selectedType}
            selectedCategory={selectedCategory}
            selectedIndustry={selectedIndustry}
            searchQuery={searchQuery}
            onTypeChange={setSelectedType}
            onCategoryChange={setSelectedCategory}
            onIndustryChange={setSelectedIndustry}
            onSearchChange={setSearchQuery}
            onClearFilters={handleClearFilters}
          />

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Mostrando {paginatedResources.length} de {filteredResources.length}{' '}
              recursos
            </p>
          </div>

          {/* Resources Grid */}
          {paginatedResources.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    {...resource}
                    onDownload={
                      resource.type === 'whitepaper'
                        ? () => handleDownload(resource.title)
                        : undefined
                    }
                    onRead={
                      resource.type !== 'whitepaper'
                        ? () => handleRead(resource.title)
                        : undefined
                    }
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-md border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    <Icon name="ChevronLeftIcon" size={20} variant="outline" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-primary text-primary-foreground'
                          : 'border border-border hover:bg-muted'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-md border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    <Icon name="ChevronRightIcon" size={20} variant="outline" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <Icon
                name="MagnifyingGlassIcon"
                size={64}
                variant="outline"
                className="mx-auto text-muted-foreground mb-4"
              />
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                No se encontraron recursos
              </h3>
              <p className="text-muted-foreground mb-6">
                Intenta ajustar tus filtros o búsqueda
              </p>
              <button
                onClick={handleClearFilters}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            ¿Necesitas Asesoría Personalizada?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a implementar las estrategias y tecnologías adecuadas para tu negocio
          </p>
          <button
            onClick={() => alert('Redirigiendo a página de contacto...')}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-heading font-bold text-lg hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Agenda una Consultoría
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResourcesInteractive;