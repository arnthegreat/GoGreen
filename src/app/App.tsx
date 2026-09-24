import { Toaster } from 'sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Founder } from './components/Founder';
import { CookingClasses } from './components/CookingClasses';
import { Benefits } from './components/Benefits';
import { Products } from './components/Products';
import { Order } from './components/Order';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(45,106,81,0.08),transparent_25%),linear-gradient(180deg,#f7f3ec_0%,#f2f7f2_40%,#edf4ee_100%)] text-slate-900 antialiased">
      <Toaster position="top-center" richColors />
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Founder />
        <CookingClasses />
        <Benefits />
        <Products />
        <Order />
      </main>
      <Footer />
    </div>
  );
}