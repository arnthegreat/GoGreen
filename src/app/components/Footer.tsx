import { Leaf, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold">GoGreen</span>
            </div>
            <p className="text-gray-400 mb-4">
              Phnom Penh's premier vegetarian restaurant, serving healthy and delicious plant-based cuisine since 2018.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-green-400 transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-green-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#order" className="text-gray-400 hover:text-green-400 transition-colors">
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">+855 23 123 456</p>
                  <p className="text-gray-400">+855 12 345 678</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-green-400 mt-0.5" />
                <p className="text-gray-400">info@gogreen.com.kh</p>
              </li>
            </ul>
          </div>

          {/* Main Location */}
          <div>
            <h3 className="text-lg font-bold mb-4">Main Location</h3>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
              <p className="text-gray-400">
                Street 302, Sangkat Boeng Keng Kang 1<br />
                Phnom Penh, Cambodia
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 GoGreen Vegetarian Restaurant. Founded by Chanlang Prum. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Made with 💚 in Phnom Penh, Cambodia
          </p>
        </div>
      </div>
    </footer>
  );
}
