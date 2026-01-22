'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { label: 'Inicio', path: '/homepage' },
    { label: 'Servicios', path: '/services' },
    { label: 'Consulta Tecnologica', path: '/technology-consulting' },
    { label: 'Acerca', path: '/about' },
    { label: 'Recurso', path: '/resources' },
  ];

  const isActivePath = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-md' : 'bg-background'
      } ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center space-x-2 group">
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <circle cx="20" cy="20" r="18" stroke="url(#gradient1)" strokeWidth="2" />
                <path
                  d="M12 20 L18 14 L24 20 L30 14"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="20" cy="20" r="3" fill="var(--color-accent)" />
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="var(--color-accent)" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="12" y1="14" x2="30" y2="14">
                    <stop offset="0%" stopColor="var(--color-secondary)" />
                    <stop offset="100%" stopColor="var(--color-primary)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-xl lg:text-2xl font-heading font-bold text-foreground tracking-tight">
              ZENTRANR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-md text-sm font-heading font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={24}
              variant="outline"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-40">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-3 rounded-md text-base font-heading font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold text-center transition-all duration-300 hover:bg-primary/90 active:scale-95"
              >
                Schedule Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;