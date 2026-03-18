import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Leaf,
  ArrowRight,
  Star,
  Sparkles,
  Award,
} from "lucide-react";

export function Hero() {
  const scrollToMenu = () => {
    document
      .getElementById("menu")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 px-5 py-2.5 rounded-full shadow-2xl">
            <span className="text-green-300 font-bold text-sm">
              Fresh • Healthy • Delicious
            </span>
          </div>

          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
                GoGreen
              </span>
              <br />
              <span className="text-white">Vegetarian</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Restaurant
              </span>
            </h1>
          </div>

          <p className="text-3xl md:text-4xl font-bold text-green-300 leading-tight">
            Where Health Meets Flavor
          </p>

          <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
            Experience the vibrant tastes of Cambodia through
            our plant-based culinary journey. Fresh, wholesome,
            and absolutely delicious!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={scrollToMenu}
              className="group relative bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-10 py-5 rounded-2xl text-lg font-black flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl hover:shadow-green-500/50"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              onClick={scrollToMenu}
              className="group relative bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white px-10 py-5 rounded-2xl text-lg font-black border-2 border-white/30 hover:border-white/50 transition-all shadow-xl"
            >
              View Menu
            </button>
          </div>
        </div>

        {/* Right Content - Food Showcase */}
        <div className="relative hidden lg:block">
          {/* Main Featured Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl">
              <div className="rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1676300186673-615bcc8d5d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YXJpYW4lMjBib3dsJTIwaGVhbHRoeXxlbnwxfHx8fDE3NzMzMjc0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fresh Bowl"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-4 max-w-xs transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900">
                  100%
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Plant-Based
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-2xl p-4 max-w-xs transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-2 text-white">
              <Star className="w-5 h-5 fill-white" />
              <span className="font-black text-lg">
                Most Popular
              </span>
            </div>
            <div className="text-white/90 text-sm mt-1">
              Fresh Daily
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <div className="text-sm font-semibold">
            Scroll to explore
          </div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}