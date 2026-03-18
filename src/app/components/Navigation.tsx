import { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

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
    { label: 'Menu', href: '#menu' },
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
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3 border-b border-gray-100' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group relative"
          >
            <div className={`relative ${isScrolled ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-white/20 backdrop-blur-xl'} p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Leaf className={`w-7 h-7 ${isScrolled ? 'text-white' : 'text-white'}`} />
              {!isScrolled && <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl opacity-80"></div>}
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black ${isScrolled ? 'text-gray-900' : 'text-white'} group-hover:text-green-600 transition-colors`}>
                GoGreen
              </span>
              <span className={`text-xs font-bold ${isScrolled ? 'text-green-600' : 'text-green-300'} -mt-1`}>
                Restaurant
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 font-bold transition-all duration-300 rounded-xl group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                    : 'text-white hover:text-green-300 hover:bg-white/10'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-600 group-hover:w-3/4 transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'} p-2`}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-green-600 hover:bg-green-50 font-bold transition-all text-left px-4 py-3 rounded-xl"
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