import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  title: string;
  description: string;
  value: string;
  action: string;
  available: string;
}

interface ContactMethodsProps {
  className?: string;
}

const ContactMethods = ({ className = '' }: ContactMethodsProps) => {
  const contactMethods: ContactMethod[] = [
    {
      id: 'phone',
      icon: 'PhoneIcon',
      title: 'Teléfono',
      description: 'Hable directamente con nuestro equipo',
      value: '+51 1 234 5678',
      action: 'tel:+5112345678',
      available: 'Lun - Vie: 9:00 - 18:00'
    },
    {
      id: 'email',
      icon: 'EnvelopeIcon',
      title: 'Correo Electrónico',
      description: 'Envíenos un mensaje detallado',
      value: 'contacto@zentranr.pe',
      action: 'mailto:contacto@zentranr.pe',
      available: 'Respuesta en 24 horas'
    },
    {
      id: 'whatsapp',
      icon: 'ChatBubbleLeftRightIcon',
      title: 'WhatsApp Business',
      description: 'Chat en tiempo real',
      value: '+51 987 654 321',
      action: 'https://wa.me/51987654321',
      available: 'Lun - Vie: 9:00 - 18:00'
    },
    {
      id: 'location',
      icon: 'MapPinIcon',
      title: 'Oficina Principal',
      description: 'Visítenos en Lima',
      value: 'Av. Javier Prado Este 476, San Isidro, Lima',
      action: '#map-section',
      available: 'Lun - Vie: 9:00 - 18:00'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Múltiples Formas de Conectar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elija el método de contacto que mejor se adapte a sus necesidades. Estamos aquí para ayudarle.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.action}
                className="group bg-card rounded-lg p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon 
                      name={method.icon as any} 
                      size={28} 
                      variant="outline" 
                      className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {method.description}
                    </p>
                    <p className="text-base font-medium text-foreground mb-2 break-words">
                      {method.value}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="ClockIcon" size={16} variant="outline" className="mr-2" />
                      {method.available}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Icon 
                      name="ArrowRightIcon" 
                      size={20} 
                      variant="outline" 
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="mt-12 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-8 border border-accent/20">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="BellAlertIcon" size={24} variant="solid" className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                    Soporte de Emergencia 24/7
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Para clientes con contratos de soporte activo
                  </p>
                </div>
              </div>
              <a
                href="tel:+5112345679"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-brand hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                +51 1 234 5679
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;