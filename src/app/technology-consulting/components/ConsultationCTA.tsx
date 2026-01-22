'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const ConsultationCTA = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary via-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-white/20 rounded w-3/4 mx-auto" />
              <div className="h-4 bg-white/20 rounded w-1/2 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary via-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Icon name="CalendarDaysIcon" size={20} variant="solid" className="text-white" />
              <span className="text-sm font-heading font-semibold text-white">
                Consulta Sin Compromiso
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Comience su Transformación Digital Hoy
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Agende una consulta ejecutiva gratuita con nuestros expertos en transformación digital y descubra cómo podemos impulsar su crecimiento.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-brand">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Juan Pérez"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="juan.perez@empresa.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Nombre de su empresa"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+51 930 120 687"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                    Cuéntenos sobre sus Desafíos
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Describa brevemente los desafíos tecnológicos que enfrenta su organización..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-heading font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={24} variant="outline" className="animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Agendar Consulta Gratuita</span>
                      <Icon name="ArrowRightIcon" size={24} variant="outline" />
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, acepta nuestra política de privacidad. Sus datos serán tratados de forma confidencial.
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircleIcon" size={48} variant="solid" className="text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  ¡Solicitud Enviada Exitosamente!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nuestro equipo se pondrá en contacto con usted dentro de las próximas 24 horas.
                </p>
                <div className="inline-flex items-center space-x-2 text-sm text-primary">
                  <Icon name="EnvelopeIcon" size={20} variant="solid" />
                  <span>Revise su email para confirmación</span>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <Icon name="PhoneIcon" size={24} variant="outline" className="text-white" />
              </div>
              <div className="text-sm font-heading font-semibold text-white mb-1">Llámenos</div>
              <div className="text-white/80">+51 930 120 687</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <Icon name="EnvelopeIcon" size={24} variant="outline" className="text-white" />
              </div>
              <div className="text-sm font-heading font-semibold text-white mb-1">Email</div>
              <div className="text-white/80">zentranr@gmail.com</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <Icon name="ClockIcon" size={24} variant="outline" className="text-white" />
              </div>
              <div className="text-sm font-heading font-semibold text-white mb-1">Horario</div>
              <div className="text-white/80">Lun - Vie: 9:00 - 18:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;