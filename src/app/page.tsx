import { redirect } from 'next/navigation';

export default function RootPage() {
  // En cuanto alguien entra a la raíz, lo mandamos a /homepage
  redirect('/homepage');
}