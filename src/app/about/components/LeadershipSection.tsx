'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  alt: string;
  bio: string;
  expertise: string[];
  certifications: string[];
  achievements: string[];
  linkedin: string;
}

interface LeadershipSectionProps {
  className?: string;
}

const LeadershipSection = ({ className = '' }: LeadershipSectionProps) => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Carlos Mendoza",
      position: "CEO & Fundador",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Hombre profesional hispano de mediana edad con cabello corto gris, traje azul marino y corbata, sonriendo con confianza en oficina moderna",
      bio: "Con más de 20 años de experiencia en transformación digital, el Dr. Mendoza ha liderado proyectos tecnológicos para empresas Fortune 500 y startups innovadoras. Su visión estratégica combina profundidad técnica con perspicacia empresarial.",
      expertise: ["Transformación Digital", "Arquitectura Empresarial", "Estrategia Tecnológica", "Gestión de Innovación"],
      certifications: ["PhD en Ciencias de la Computación - MIT", "Arquitecto Empresarial Certificado (TOGAF)", "PMP - Project Management Professional"],
      achievements: [
        "Orador principal en TechSummit Lima 2025",
        "Autor de 'Arquitectando el Futuro Digital' (2024)",
        "Reconocimiento Líder Tecnológico del Año - Perú 2023"
      ],
      linkedin: "#"
    },
    {
      id: 2,
      name: "Ing. María Fernández",
      position: "CTO & Directora de Innovación",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Mujer profesional hispana joven con cabello largo castaño, blazer gris y gafas, trabajando en laptop en oficina tecnológica moderna",
      bio: "Ingeniera de software con especialización en arquitecturas cloud y sistemas distribuidos. María lidera nuestro laboratorio de innovación, explorando tecnologías emergentes y metodologías ágiles de vanguardia.",
      expertise: ["Cloud Architecture", "DevOps & CI/CD", "Microservicios", "Machine Learning"],
      certifications: ["AWS Solutions Architect Professional", "Google Cloud Professional Architect", "Certified Kubernetes Administrator"],
      achievements: [
        "Ponente en AWS re:Invent 2024",
        "Contribuidora open-source en proyectos Kubernetes",
        "Mentora en Women in Tech Perú"
      ],
      linkedin: "#"
    },
    {
      id: 3,
      name: "Lic. Roberto Silva",
      position: "Director de Consultoría Estratégica",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Hombre profesional hispano de mediana edad con barba corta, camisa blanca y chaleco azul, presentando en sala de conferencias con pantalla digital",
      bio: "Consultor estratégico con experiencia en transformación empresarial y optimización de procesos. Roberto ha asesorado a más de 100 empresas en su viaje de digitalización, logrando mejoras promedio del 40% en eficiencia operativa.",
      expertise: ["Consultoría Estratégica", "Transformación Empresarial", "Optimización de Procesos", "Change Management"],
      certifications: ["MBA - ESAN Business School", "Lean Six Sigma Black Belt", "Certified Management Consultant (CMC)"],
      achievements: [
        "Consultor del Año - Asociación Peruana de Consultores 2024",
        "Publicaciones en Harvard Business Review Latinoamérica",
        "Asesor de transformación digital para sector público peruano"
      ],
      linkedin: "#"
    },
    {
      id: 4,
      name: "Ing. Ana Gutiérrez",
      position: "Directora de Desarrollo de Software",
      image: "https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Mujer profesional hispana joven con cabello corto negro, suéter azul, sonriendo mientras revisa código en múltiples monitores en estación de trabajo moderna",
      bio: "Líder técnica con pasión por la excelencia en ingeniería de software. Ana dirige nuestros equipos de desarrollo, implementando mejores prácticas y asegurando la entrega de soluciones de clase mundial.",
      expertise: ["Full-Stack Development", "Arquitectura de Software", "Metodologías Ágiles", "Quality Assurance"],
      certifications: ["Certified Scrum Master (CSM)", "Microsoft Certified: Azure Developer", "ISTQB Advanced Test Manager"],
      achievements: [
        "Lideró desarrollo de plataforma ganadora de premio nacional de innovación",
        "Instructora en bootcamps de programación",
        "Organizadora de meetups de desarrollo en Lima"
      ],
      linkedin: "#"
    }
  ];

  const toggleExpand = (memberId: number) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Liderazgo & Experiencia
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nuestro equipo directivo combina décadas de experiencia técnica con visión estratégica empresarial, liderando la transformación digital en Perú y Latinoamérica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-brand transition-all duration-300 border border-border"
            >
              <div className="relative h-80 overflow-hidden">
                <AppImage
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-heading font-bold mb-1">{member.name}</h3>
                  <p className="text-white/90 font-medium">{member.position}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>

                <button
                  onClick={() => toggleExpand(member.id)}
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                >
                  <span>{expandedMember === member.id ? 'Ver menos' : 'Ver más detalles'}</span>
                  <Icon
                    name={expandedMember === member.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                    size={20}
                    variant="outline"
                  />
                </button>

                {expandedMember === member.id && (
                  <div className="mt-6 space-y-6 animate-fadeIn">
                    <div>
                      <h4 className="text-sm font-heading font-bold text-foreground uppercase tracking-wider mb-3">
                        Áreas de Experiencia
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-heading font-bold text-foreground uppercase tracking-wider mb-3">
                        Certificaciones
                      </h4>
                      <ul className="space-y-2">
                        {member.certifications.map((cert, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-heading font-bold text-foreground uppercase tracking-wider mb-3">
                        Logros Destacados
                      </h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <Icon name="StarIcon" size={16} variant="solid" className="text-accent mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    >
                      <Icon name="LinkIcon" size={20} variant="outline" />
                      <span>Conectar en LinkedIn</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;