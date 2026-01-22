import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface OfficeLocationProps {
  className?: string;
}

const OfficeLocation = ({ className = '' }: OfficeLocationProps) => {
  const officeDetails = {
    address: 'Av. Javier Prado Este 476, Piso 8',
    district: 'San Isidro',
    city: 'Lima',
    postalCode: '15073',
    country: 'Perú',
    coordinates: {
      lat: -12.0897,
      lng: -77.0282
    },
    businessHours: [
      { day: 'Lunes - Viernes', hours: '9:00 AM - 6:00 PM' },
      { day: 'Sábado', hours: '10:00 AM - 2:00 PM' },
      { day: 'Domingo', hours: 'Cerrado' }
    ],
    publicTransport: [
      'Metropolitano: Estación Javier Prado (5 min caminando)',
      'Corredor Azul: Paradero Javier Prado (3 min caminando)',
      'Línea 1 Metro: Estación San Borja Sur (15 min en taxi)'
    ],
    parking: 'Estacionamiento disponible en el edificio'
  };

  return (
    <section id="map-section" className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visítenos en nuestra oficina principal en el corazón del distrito financiero de Lima.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Map */}
            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-lg h-[400px] lg:h-[500px]">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="ZENTRANR Office Location"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${officeDetails.coordinates.lat},${officeDetails.coordinates.lng}&z=16&output=embed`}
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Office Details */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPinIcon" size={24} variant="solid" className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Dirección
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {officeDetails.address}<br />
                      {officeDetails.district}, {officeDetails.city}<br />
                      {officeDetails.postalCode}<br />
                      {officeDetails.country}
                    </p>
                    <a
                      href={`https://www.google.com/maps?q=${officeDetails.coordinates.lat},${officeDetails.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm mt-3 transition-colors duration-300"
                    >
                      Ver en Google Maps
                      <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="ClockIcon" size={24} variant="outline" className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      Horario de Atención
                    </h3>
                    <div className="space-y-2">
                      {officeDetails.businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium text-foreground">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Public Transport Card */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="TruckIcon" size={24} variant="outline" className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      Transporte Público
                    </h3>
                    <ul className="space-y-2">
                      {officeDetails.publicTransport.map((transport, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <Icon 
                            name="CheckCircleIcon" 
                            size={16} 
                            variant="solid" 
                            className="text-success mr-2 mt-0.5 flex-shrink-0" 
                          />
                          <span className="text-muted-foreground">{transport}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center text-sm">
                        <Icon name="BuildingOffice2Icon" size={16} variant="outline" className="text-muted-foreground mr-2" />
                        <span className="text-muted-foreground">{officeDetails.parking}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${officeDetails.coordinates.lat},${officeDetails.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold text-center transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95"
              >
                Obtener Direcciones
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="InformationCircleIcon" size={24} variant="solid" className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                    ¿Necesita Ayuda para Encontrarnos?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nuestro equipo está disponible para guiarle hasta nuestra oficina
                  </p>
                </div>
              </div>
              <a
                href="tel:+5112345678"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;