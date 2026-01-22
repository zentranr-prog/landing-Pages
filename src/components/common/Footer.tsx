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
      { label: 'Digital Transformation', path: '/services' },
      { label: 'Technology Consulting', path: '/technology-consulting' },
      { label: 'Custom Development', path: '/services' },
      { label: 'Cloud Solutions', path: '/services' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Approach', path: '/about' },
      { label: 'Case Studies', path: '/resources' },
      { label: 'Careers', path: '/about' },
    ],
    resources: [
      { label: 'Blog', path: '/resources' },
      { label: 'Whitepapers', path: '/resources' },
      { label: 'Technology Stack', path: '/resources' },
      { label: 'FAQ', path: '/resources' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/resources' },
      { label: 'Terms of Service', path: '/resources' },
      { label: 'Cookie Policy', path: '/resources' },
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
                <circle cx="20" cy="20" r="18" stroke="url(#footerGradient1)" strokeWidth="2" />
                <path
                  d="M12 20 L18 14 L24 20 L30 14"
                  stroke="url(#footerGradient2)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="20" cy="20" r="3" fill="var(--color-accent)" />
                <defs>
                  <linearGradient id="footerGradient1" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="var(--color-accent)" />
                  </linearGradient>
                  <linearGradient id="footerGradient2" x1="12" y1="14" x2="30" y2="14">
                    <stop offset="0%" stopColor="var(--color-accent)" />
                    <stop offset="100%" stopColor="var(--color-primary)" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-heading font-bold tracking-tight">ZENTRANR</span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6 max-w-sm">
              Transforming businesses through thoughtful technology solutions. We bring zen philosophy to digital transformation, creating elegant systems that drive measurable growth.
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
              Services
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
              Company
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
              Resources
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
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="max-w-2xl">
            <h3 className="text-lg font-heading font-semibold mb-2">
              Stay Updated with Technology Insights
            </h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Subscribe to receive expert analysis, industry trends, and transformation strategies.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-md bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-accent text-accent-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-brand hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
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