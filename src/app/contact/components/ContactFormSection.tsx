'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  consultationType: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  industry: string;
  serviceInterest: string[];
  projectBudget: string;
  projectTimeline: string;
  message: string;
  preferredContactMethod: string;
  preferredDate: string;
  preferredTime: string;
  newsletter: boolean;
}

interface ContactFormSectionProps {
  selectedConsultationType?: string;
  className?: string;
}

const ContactFormSection = ({ selectedConsultationType = '', className = '' }: ContactFormSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    consultationType: selectedConsultationType,
    fullName: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    industry: '',
    serviceInterest: [],
    projectBudget: '',
    projectTimeline: '',
    message: '',
    preferredContactMethod: 'email',
    preferredDate: '',
    preferredTime: '',
    newsletter: false
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (selectedConsultationType) {
      setFormData(prev => ({ ...prev, consultationType: selectedConsultationType }));
    }
  }, [selectedConsultationType]);

  const companySizes = [
    { value: 'startup', label: 'Startup (1-10 empleados)' },
    { value: 'small', label: 'Pequeña (11-50 empleados)' },
    { value: 'medium', label: 'Mediana (51-200 empleados)' },
    { value: 'large', label: 'Grande (201-1000 empleados)' },
    { value: 'enterprise', label: 'Empresa (1000+ empleados)' }
  ];

  const industries = [
    'Finanzas y Banca',
    'Salud y Farmacéutica',
    'Manufactura',
    'Retail y E-commerce',
    'Tecnología',
    'Educación',
    'Logística y Transporte',
    'Energía',
    'Telecomunicaciones',
    'Otro'
  ];

  const serviceInterests = [
    'Desarrollo de Software Personalizado',
    'Consultoría de TI y Estrategia',
    'Transformación Digital',
    'Integración de Sistemas',
    'Desarrollo de Aplicaciones Móviles',
    'Soluciones en la Nube',
    'Auditoría Tecnológica',
    'Soporte y Mantenimiento'
  ];

  const projectBudgets = [
    { value: 'under-10k', label: 'Menos de S/ 10,000' },
    { value: '10k-50k', label: 'S/ 10,000 - S/ 50,000' },
    { value: '50k-100k', label: 'S/ 50,000 - S/ 100,000' },
    { value: '100k-500k', label: 'S/ 100,000 - S/ 500,000' },
    { value: 'over-500k', label: 'Más de S/ 500,000' }
  ];

  const projectTimelines = [
    { value: 'urgent', label: 'Urgente (1-2 meses)' },
    { value: 'short', label: 'Corto plazo (3-6 meses)' },
    { value: 'medium', label: 'Mediano plazo (6-12 meses)' },
    { value: 'long', label: 'Largo plazo (12+ meses)' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const consultationTypes = [
    { value: 'executive', label: 'Consulta Ejecutiva' },
    { value: 'technical', label: 'Consulta Técnica' },
    { value: 'project', label: 'Discusión de Proyecto' },
    { value: 'discovery', label: 'Sesión de Descubrimiento' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceInterestChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      serviceInterest: prev.serviceInterest.includes(service)
        ? prev.serviceInterest.filter(s => s !== service)
        : [...prev.serviceInterest, service]
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'El nombre completo es requerido';
      if (!formData.email.trim()) {
        newErrors.email = 'El correo electrónico es requerido';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Correo electrónico inválido';
      }
      if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
      if (!formData.company.trim()) newErrors.company = 'El nombre de la empresa es requerido';
    }

    if (step === 2) {
      if (!formData.companySize) newErrors.companySize = 'Seleccione el tamaño de la empresa';
      if (!formData.industry) newErrors.industry = 'Seleccione una industria';
      if (formData.serviceInterest.length === 0) {
        newErrors.serviceInterest = 'Seleccione al menos un servicio de interés';
      }
    }

    if (step === 3) {
      if (!formData.consultationType) newErrors.consultationType = 'Seleccione un tipo de consulta';
      if (!formData.preferredDate) newErrors.preferredDate = 'Seleccione una fecha preferida';
      if (!formData.preferredTime) newErrors.preferredTime = 'Seleccione una hora preferida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        consultationType: '',
        fullName: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        industry: '',
        serviceInterest: [],
        projectBudget: '',
        projectTimeline: '',
        message: '',
        preferredContactMethod: 'email',
        preferredDate: '',
        preferredTime: '',
        newsletter: false
      });
      setCurrentStep(1);
      setSubmitSuccess(false);
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="space-y-3 mt-8">
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (submitSuccess) {
    return (
      <section className={`py-16 lg:py-24 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-12 border border-border text-center">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircleIcon" size={48} variant="solid" className="text-success" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                ¡Solicitud Enviada Exitosamente!
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Gracias por contactarnos. Nuestro equipo revisará su solicitud y se pondrá en contacto con usted dentro de las próximas 24 horas.
              </p>
              <div className="bg-muted rounded-lg p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Hemos enviado un correo de confirmación a:
                </p>
                <p className="text-base font-medium text-foreground">
                  {formData.email}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Si tiene alguna pregunta urgente, no dude en llamarnos al +51 930 120 687
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Form Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Solicite Su Consulta
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete el formulario y nos pondremos en contacto con usted para programar su consulta personalizada.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[1, 2, 3].map((step) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-lg transition-all duration-300 ${
                        currentStep >= step
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {currentStep > step ? (
                        <Icon name="CheckIcon" size={24} variant="outline" />
                      ) : (
                        step
                      )}
                    </div>
                    <span className="text-xs mt-2 text-muted-foreground font-medium">
                      {step === 1 && 'Información'}
                      {step === 2 && 'Empresa'}
                      {step === 3 && 'Consulta'}
                    </span>
                  </div>
                  {step < 3 && (
                    <div
                      className={`flex-1 h-1 mx-4 transition-all duration-300 ${
                        currentStep > step ? 'bg-primary' : 'bg-muted'
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 lg:p-12 border border-border">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Información Personal
                </h3>

                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.fullName ? 'border-destructive' : 'border-input'
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300`}
                    placeholder="Juan Pérez García"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-destructive">{errors.fullName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.email ? 'border-destructive' : 'border-input'
                      } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300`}
                      placeholder="juan.perez@empresa.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.phone ? 'border-destructive' : 'border-input'
                      } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300`}
                      placeholder="+51 987 654 321"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Nombre de la Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.company ? 'border-destructive' : 'border-input'
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300`}
                    placeholder="Empresa S.A.C."
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-destructive">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-foreground mb-2">
                    Método de Contacto Preferido
                  </label>
                  <select
                    id="preferredContactMethod"
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                  >
                    <option value="email">Correo Electrónico</option>
                    <option value="phone">Teléfono</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Company Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Información de la Empresa
                </h3>

                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-foreground mb-2">
                    Tamaño de la Empresa *
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.companySize ? 'border-destructive' : 'border-input'
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300`}
                  >
                    <option value="">Seleccione el tamaño</option>
                    {companySizes.map((size) => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                  {errors.companySize && (
                    <p className="mt-1 text-sm text-destructive">{errors.companySize}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">
                    Industria *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.industry ? 'border-destructive' : 'border-input'
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300`}
                  >
                    <option value="">Seleccione una industria</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="mt-1 text-sm text-destructive">{errors.industry}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Servicios de Interés * (Seleccione todos los que apliquen)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceInterests.map((service) => (
                      <label
                        key={service}
                        className="flex items-start space-x-3 p-3 rounded-md border border-input hover:border-primary transition-all duration-300 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.serviceInterest.includes(service)}
                          onChange={() => handleServiceInterestChange(service)}
                          className="mt-1 w-4 h-4 text-primary border-input rounded focus:ring-2 focus:ring-ring"
                        />
                        <span className="text-sm text-foreground">{service}</span>
                      </label>
                    ))}
                  </div>
                  {errors.serviceInterest && (
                    <p className="mt-2 text-sm text-destructive">{errors.serviceInterest}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectBudget" className="block text-sm font-medium text-foreground mb-2">
                      Presupuesto del Proyecto (Opcional)
                    </label>
                    <select
                      id="projectBudget"
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                    >
                      <option value="">Seleccione un rango</option>
                      {projectBudgets.map((budget) => (
                        <option key={budget.value} value={budget.value}>
                          {budget.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectTimeline" className="block text-sm font-medium text-foreground mb-2">
                      Cronograma del Proyecto (Opcional)
                    </label>
                    <select
                      id="projectTimeline"
                      name="projectTimeline"
                      value={formData.projectTimeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                    >
                      <option value="">Seleccione un cronograma</option>
                      {projectTimelines.map((timeline) => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Consultation Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Detalles de la Consulta
                </h3>

                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Consulta *
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.consultationType ? 'border-destructive' : 'border-input'
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300`}
                  >
                    <option value="">Seleccione un tipo</option>
                    {consultationTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.consultationType && (
                    <p className="mt-1 text-sm text-destructive">{errors.consultationType}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground mb-2">
                      Fecha Preferida *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.preferredDate ? 'border-destructive' : 'border-input'
                      } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300`}
                    />
                    {errors.preferredDate && (
                      <p className="mt-1 text-sm text-destructive">{errors.preferredDate}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                      Hora Preferida *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.preferredTime ? 'border-destructive' : 'border-input'
                      } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300`}
                    >
                      <option value="">Seleccione una hora</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                    </select>
                    {errors.preferredTime && (
                      <p className="mt-1 text-sm text-destructive">{errors.preferredTime}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje Adicional (Opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 resize-none"
                    placeholder="Cuéntenos más sobre sus necesidades y objetivos..."
                  ></textarea>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-primary border-input rounded focus:ring-2 focus:ring-ring"
                    />
                    <span className="text-sm text-muted-foreground">
                      Deseo recibir actualizaciones sobre tecnología, insights de la industria y recursos exclusivos de ZENTRANR.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Form Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-3 bg-muted text-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-muted/80 inline-flex items-center"
                >
                  <Icon name="ArrowLeftIcon" size={20} variant="outline" className="mr-2" />
                  Anterior
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 inline-flex items-center ml-auto"
                >
                  Siguiente
                  <Icon name="ArrowRightIcon" size={20} variant="outline" className="ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center ml-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={20} variant="outline" className="mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Icon name="PaperAirplaneIcon" size={20} variant="outline" className="mr-2" />
                      Enviar Solicitud
                    </>
                  )}
                </button>
              )}
            </div>
          </form>

          {/* Privacy Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Al enviar este formulario, acepta nuestra{' '}
              <a href="/resources" className="text-primary hover:underline">
                Política de Privacidad
              </a>{' '}
              y{' '}
              <a href="/resources" className="text-primary hover:underline">
                Términos de Servicio
              </a>
              . Sus datos están protegidos y nunca serán compartidos con terceros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;