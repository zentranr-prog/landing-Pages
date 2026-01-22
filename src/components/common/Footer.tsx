import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Transformación Digital', path: '/services' },
      { label: 'Consultoría Tecnológica', path: '/technology-consulting' },
      { label: 'Desarrollo a Medida', path: '/services' },
      { label: 'Soluciones Cloud', path: '/services' },
    ],
    company: [
      { label: 'Nosotros', path: '/about' },
      { label: 'Nuestro Enfoque', path: '/about' },
    ],
    resources: [
      { label: 'Blog', path: '/resources' },
    ],
    legal: [
      { label: 'Política de Privacidad', path: '/resources' },
      { label: 'Términos de Servicio', path: '/resources' },
      { label: 'Política de Cookies', path: '/resources' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'LinkIcon', url: '#' },
    { name: 'Twitter', icon: 'LinkIcon', url: '#' },
    { name: 'GitHub', icon: 'LinkIcon', url: '#' },
  ];

  return (
    <footer className={`bg-secondary text-secondary-foreground ${className}`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/homepage" className="inline-flex items-center space-x-2 mb-4 group">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <defs>
                  <linearGradient id="gradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="var(--color-secondary)" />
                  </linearGradient>
                  <linearGradient id="gradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-accent)" />
                    <stop offset="100%" stopColor="var(--color-primary)" />
                  </linearGradient>
                </defs>

                <g transform="translate(4, 5)">
                  <rect x="22" y="0" width="12" height="12" rx="3" fill="url(#gradLight)" />

                  <rect x="0" y="5" width="20" height="20" rx="4" fill="url(#gradDark)" />

                  <rect x="12" y="16" width="20" height="20" rx="4" fill="url(#gradDark)" />

                  <g
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M 10 12 L 10 18 L 22 18 L 22 24" opacity="0.8" />
                    <circle cx="10" cy="10" r="2.5" />
                    <circle cx="22" cy="26" r="2.5" />
                  </g>
                </g>
              </svg>
              <span className="text-2xl font-heading font-bold tracking-tight">ZENTRANR</span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6 max-w-sm">
              Transformamos negocios mediante soluciones tecnológicas conscientes. Aplicamos la
              filosofía zen a la transformación digital, creando sistemas elegantes que impulsan un
              crecimiento medible.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              Servicios
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              Compañia
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              Recursos
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
       
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/70">
              © {currentYear} ZENTRANR Corporate. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
