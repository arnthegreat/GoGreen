import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Sprout,
  Heart,
  Award,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-white via-green-50/30 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-200/20 to-green-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 px-6 py-3 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-bold text-sm uppercase tracking-wider">
              About Us
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              GoGreen
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
            <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1706670663016-777de9e62d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1ib2RpYSUyMHBobm9tJTIwcGVuaCUyMGNpdHl8ZW58MXx8fHwxNzczMzI3NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Phnom Penh Cambodia"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              A Green Revolution in{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Phnom Penh
              </span>
            </h3>

            <p className="text-xl text-gray-700 leading-relaxed">
              Established in the heart of Phnom Penh, GoGreen
              Vegetarian Restaurant is more than just a dining
              destination—it's a movement towards healthier,
              more sustainable living. We believe that
              plant-based cuisine can be both nutritious and
              incredibly delicious.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to transform the way Cambodia
              thinks about vegetarian food by offering
              authentic, flavorful dishes that celebrate local
              ingredients and traditional cooking methods, all
              while being completely plant-based.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                <div className="bg-white rounded-xl p-3 inline-block mb-3 shadow-md">
                  <Sprout className="w-8 h-8 text-green-600" />
                </div>
                <p className="font-black text-gray-900 text-sm">
                  100% Plant-Based
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                <div className="bg-white rounded-xl p-3 inline-block mb-3 shadow-md">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <p className="font-black text-gray-900 text-sm">
                  Made with Love
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-green-500/50 inline-flex items-center gap-3"
              >
                <span>Explore Our Menu</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}