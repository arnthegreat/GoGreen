import { Phone, Mail, MapPin, Clock, ShoppingCart, Sparkles } from 'lucide-react';

export function Order() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us, call us, or order online - we're here to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Online CTA */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-xl p-8 lg:p-12 text-white flex flex-col justify-center">
            <Sparkles className="w-16 h-16 mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Order Online Now!
            </h3>
            <p className="text-lg mb-6 opacity-90 leading-relaxed">
              Browse our delicious menu, add your favorite dishes to cart, and choose between delivery or pickup. 
              It's quick, easy, and convenient!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <span className="text-lg">Add items to your cart</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-lg">Choose delivery or pickup</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-lg">Enjoy fresh, healthy food!</span>
              </div>
            </div>
            <button
              onClick={scrollToMenu}
              className="mt-8 bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Browse Menu & Order
            </button>
          </div>

          {/* Contact & Location Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+855 23 123 456</p>
                    <p className="text-gray-600">+855 12 345 678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@gogreen.com.kh</p>
                    <p className="text-gray-600">orders@gogreen.com.kh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Opening Hours</p>
                    <p className="text-gray-600">Mon - Fri: 10:00 AM - 9:00 PM</p>
                    <p className="text-gray-600">Sat - Sun: 9:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Main Branch - BKK1</p>
                      <p className="text-gray-600">Street 302, Sangkat Boeng Keng Kang 1</p>
                      <p className="text-gray-600">Phnom Penh, Cambodia</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Riverside Branch</p>
                      <p className="text-gray-600">Sisowath Quay, Riverside Area</p>
                      <p className="text-gray-600">Phnom Penh, Cambodia</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Toul Kork Branch</p>
                      <p className="text-gray-600">Street 289, Boeung Kak Ti Muoy</p>
                      <p className="text-gray-600">Phnom Penh, Cambodia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}