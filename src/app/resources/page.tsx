import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ResourcesInteractive from './components/ResourcesInteractive';

export const metadata: Metadata = {
  title: 'Recursos & Conocimiento - ZENTRANR',
  description: 'Explora nuestra biblioteca de artículos tecnológicos, whitepapers de investigación y webinars educativos diseñados para impulsar tu transformación digital con insights de expertos en consultoría IT.',
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <ResourcesInteractive />
      </main>
      <Footer />
    </>
  );
}