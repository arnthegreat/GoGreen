import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Star,
  Flame,
  Heart,
  Utensils,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const signatureDishes = [
  {
    id: 1,
    name: "Happiness Hot Pot",
    description:
      "resh vegetables, tofu, mushrooms, and noodles simmered in rich broth.",
    price: 8.5,
    image:
      "https://images.unsplash.com/photo-1676300186673-615bcc8d5d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YXJpYW4lMjBib3dsJTIwaGVhbHRoeXxlbnwxfHx8fDE3NzMzMjc0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: true,
    spicy: false,
    calories: "450 cal",
  },
  {
    id: 2,
    name: "Prohok Ktis",
    description:
      "Savory soy meat in rich coconut cream with aromatic spices",
    price: 7.5,
    image:
      "https://images.unsplash.com/photo-1681330266932-391fd00f805f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdhbiUyMHNhbGFkJTIwY29sb3JmdWwlMjBmcmVzaHxlbnwxfHx8fDE3NzMzMjc0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: false,
    spicy: true,
    calories: "380 cal",
  },
  {
    id: 3,
    name: "Deep Fried Vegan Fish",
    description:
      "Plant-based fish made from soy and seaweed, golden fried.",
    price: 9.0,
    image:
      "https://images.unsplash.com/photo-1761315412830-2f59480377b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwY3VycnklMjBhc2lhbiUyMGN1aXNpbmV8ZW58MXx8fHwxNzczMzI3NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: true,
    spicy: false,
    calories: "520 cal",
  },
  {
    id: 4,
    name: "Fresh Spring Rolls",
    description:
      "Hand-rolled rice paper filled with crisp vegetables, herbs, and peanut sauce",
    price: 6.5,
    image:
      "https://images.unsplash.com/photo-1761315413785-0bf98364ceab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwc3ByaW5nJTIwcm9sbHMlMjBhcHBldGl6ZXJ8ZW58MXx8fHwxNzczMzI3NDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: true,
    spicy: false,
    calories: "290 cal",
  },
  {
    id: 5,
    name: "Tofu Veggie Stir-Fry",
    description:
      "Crispy tofu with seasonal vegetables in our house-made ginger-soy sauce",
    price: 8.0,
    image:
      "https://images.unsplash.com/photo-1771762210858-e26a3152503e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2Z1JTIwc3RpciUyMGZyeSUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzczMzI2Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: false,
    spicy: true,
    calories: "420 cal",
  },
  {
    id: 6,
    name: "Market Fresh Vegetables",
    description:
      "Daily selection of organic vegetables from local farmers, prepared your way",
    price: 7.0,
    image:
      "https://images.unsplash.com/photo-1657288089316-c0350003ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBvcmdhbmljJTIwbWFya2V0fGVufDF8fHx8MTc3MzI5NzI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: false,
    spicy: false,
    calories: "310 cal",
  },
];

export function Menu() {
  const [hoveredId, setHoveredId] = useState<number | null>(
    null,
  );

  return (
    <section
      id="menu"
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-pulse">
        <Sparkles className="w-8 h-8 text-green-400/40" />
      </div>
      <div
        className="absolute bottom-20 left-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <Heart className="w-8 h-8 text-red-400/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 px-6 py-3 rounded-full mb-6 shadow-lg">
            <Utensils className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-bold text-sm uppercase tracking-wider">
              Our Menu
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Signature
            </span>{" "}
            Dishes
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
            <Sparkles className="w-5 h-5 text-green-500" />
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most beloved creations, crafted with
            passion and the freshest ingredients
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish) => (
            <div
              key={dish.id}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
              onMouseEnter={() => setHoveredId(dish.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                  {dish.popular && (
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-1.5 text-sm font-black shadow-xl transform group-hover:scale-110 transition-transform">
                      <Star className="w-4 h-4 fill-white" />
                      Popular
                    </div>
                  )}
                  {dish.spicy && (
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-1.5 text-sm font-black shadow-xl ml-auto transform group-hover:scale-110 transition-transform">
                      <Flame className="w-4 h-4 fill-white" />
                      Spicy
                    </div>
                  )}
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-2xl z-20 transform group-hover:scale-110 transition-transform">
                  <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    ${dish.price.toFixed(2)}
                  </div>
                </div>

                {/* Calories Badge */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold z-20">
                  {dish.calories}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Decorative Element */}
                <div className="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform -translate-y-3"></div>

                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {dish.name}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}