import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="p-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
