'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary via-secondary to-primary py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-6">
          <Icon
            name="EnvelopeIcon"
            size={48}
            variant="outline"
            className="mx-auto text-primary-foreground mb-4"
          />
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Mantente Actualizado con Insights Tecnológicos
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Suscríbete para recibir análisis experto, tendencias de la industria y estrategias de transformación directamente en tu bandeja de entrada.
          </p>
        </div>

        {isSubscribed ? (
          <div className="bg-success/20 border border-success rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 text-primary-foreground">
              <Icon name="CheckCircleIcon" size={24} variant="solid" />
              <p className="font-semibold">¡Suscripción exitosa! Revisa tu correo.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-md font-heading font-semibold whitespace-nowrap hover:bg-accent/90 hover:shadow-brand hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Suscribirse
              </button>
            </div>
            <p className="text-xs text-primary-foreground/80 mt-3">
              Al suscribirte, aceptas recibir correos de ZENTRANR. Puedes darte de baja en cualquier momento.
            </p>
          </form>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-primary-foreground/90">
          <div className="flex items-center space-x-2">
            <Icon name="CheckIcon" size={20} variant="solid" />
            <span className="text-sm">Contenido exclusivo</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckIcon" size={20} variant="solid" />
            <span className="text-sm">Sin spam</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckIcon" size={20} variant="solid" />
            <span className="text-sm">Cancela cuando quieras</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;