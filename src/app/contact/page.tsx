import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContactInteractive from './components/ContactInteractive';

export const metadata: Metadata = {
  title: 'Contacto - ZENTRANR Corporate',
  description: 'Programe una consulta personalizada con ZENTRANR. Múltiples formas de conectar: teléfono, email, WhatsApp o visítenos en Lima. Consultas ejecutivas, técnicas y de proyecto disponibles.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <ContactInteractive />
      </div>
      <Footer />
    </main>
  );
}