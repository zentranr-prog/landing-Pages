import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'ZENTRANR - Transformación Digital y Consultoría Tecnológica Empresarial',
  description: 'Socios estratégicos en transformación digital. Desarrollo de software personalizado, consultoría tecnológica y soluciones empresariales que generan resultados medibles. Más de 12 años de experiencia y 250+ proyectos exitosos.',
};

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HomepageInteractive />
      </main>
      <Footer />
    </>
  );
}