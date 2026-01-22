import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TechnologyConsultingInteractive from './components/TechnologyConsultingInteractive';

export const metadata: Metadata = {
  title: 'Consultoría Tecnológica - ZENTRANR Corporate',
  description: 'Servicios estratégicos de consultoría tecnológica y transformación digital. Auditorías tecnológicas integrales, optimización de sistemas y desarrollo de estrategias digitales que impulsan el crecimiento empresarial medible.',
};

export default function TechnologyConsultingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <TechnologyConsultingInteractive />
      </div>
      <Footer />
    </main>
  );
}