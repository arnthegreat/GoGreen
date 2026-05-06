import { ShoppingBag, Store, Sparkles } from "lucide-react";
import PrahokKtis3 from "../assets/PrahokKtis3.jpg";
import KapiPao3 from "../assets/KapiPao3.jpg";
import FermentedSoybeanPaste3 from "../assets/FermentedSoybeanPaste3.jpg";
import SoybeanKapiPao from "../assets/SoybeanKapiPao.jpg";
import SoybeanPrahokKtis from "../assets/SoybeanPrahokKtis.jpg";
import FermentedSoybeanPaste from "../assets/FermentedSoybeanPaste.jpg";

const retailProducts = [
  {
    id: 1,
    name: "Soybean Prahok Ktis",
    description:
      "Savory Cambodian soybean dip with coconut, rich umami flavor",
    category: "Sauces & Condiments",
    image: PrahokKtis3,
    position: "50% 100%",
  },
  {
    id: 2,
    name: "Soybean Kapi Pao",
    description:
      "Soft steamed bun filled with savory, nutritious soybean mixture",
    category: "Ready-to-Cook",
    image: KapiPao3,
  },  
  {
    id: 3,
    name: "Fermented Soybean Paste",
    description:
      "Savory fermented soybean paste with deep umami flavor",
    category: "Ready-to-Cook",
    image: FermentedSoybeanPaste3,
    position: "20% 10%",
  },
  {
    id: 4,
    name: "Soybean Kapi Pao Small",
    description:
      "Smaller soft steamed bun filled with savory, nutritious soybean mixture",
    category: "Sauces & Condiments",
    image: SoybeanKapiPao,
  },
  {
    id: 5,
    name: "Soybean Prahok Ktis Small",
    description:
      "Smaller savory Cambodian soybean dip with coconut, rich umami flavo",
    category: "DIY Kits",
    image: SoybeanPrahokKtis,
  },
  {
    id: 6,
    name: "Fermented Soybean Paste Small",
    description: "Smaller savory fermented soybean paste with deep umami flavor",
    category: "Sauces & Condiments",
    image: FermentedSoybeanPaste,
    position: "100% 10%",
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Signature Products
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the GoGreen experience home with our exclusive
            product line
          </p>
        </div>

        {/* Retail Availability Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12 mb-12 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Store className="w-16 h-16" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Now Available in Stores!
                </h3>
                <p className="text-lg opacity-90">
                  Find our products at leading convenience
                  stores and supermarkets across Phnom Penh
                </p>
              </div>
            </div>
            <ShoppingBag className="w-20 h-20 opacity-50" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {retailProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-white to-green-50 border-2 border-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-green-300"
            >
              <img src={product.image} alt={product.name} className="w-full h-92 object-cover rounded-lg mb-4" style={{ objectPosition: product.position }} />
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <ShoppingBag className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}