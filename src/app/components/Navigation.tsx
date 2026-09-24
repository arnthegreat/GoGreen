import { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import GoGreenLogo from '../assets/GoGreen.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Our Story', href: '#founder' },
    /*{ label: 'Menu', href: '#menu' },*/
    { label: 'Products', href: '#products' },
    { label: 'Benefits', href: '#benefits' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      <div className="section-shell">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border transition-all duration-500 ${
            isScrolled
              ? 'border-emerald-100/80 bg-white/80 px-4 shadow-[0_18px_50px_rgba(16,61,45,0.12)] backdrop-blur-xl'
              : 'border-transparent bg-transparent px-2'
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group relative py-2"
          >
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <img
                src={GoGreenLogo}
                alt="GoGreen Logo"
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-xl font-black tracking-[-0.05em] sm:text-2xl ${isScrolled ? 'text-slate-900' : 'text-slate-900'} transition-colors`}>
                GoGreen
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.22em] ${isScrolled ? 'text-emerald-700' : 'text-emerald-700'} -mt-1`}>
                Vegetarian
              </span>
            </div>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                    : 'text-slate-700 hover:bg-white/25 hover:text-emerald-700'
                }`}
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-emerald-600 transition-all duration-300 group-hover:w-3/4" />
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`rounded-full p-2.5 ${isScrolled ? 'bg-emerald-50 text-slate-900' : 'bg-white/15 text-slate-900'}`}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mx-auto mt-4 max-w-7xl rounded-[1.75rem] border border-emerald-100 bg-white/90 p-4 shadow-[0_18px_50px_rgba(16,61,45,0.12)] backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}