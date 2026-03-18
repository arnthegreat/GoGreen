import { Toaster } from 'sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Founder } from './components/Founder';
import { Menu } from './components/Menu';
import { Benefits } from './components/Benefits';
import { Products } from './components/Products';
import { Order } from './components/Order';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Founder />
        <Menu />
        <Benefits />
        <Products />
        <Order />
      </main>
      <Footer />
    </div>
  );
}