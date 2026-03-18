import { Heart, Leaf, Users, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Better Health',
    description: 'Nutrient-rich, plant-based meals that support your overall wellness and vitality',
    color: 'text-red-500'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable practices that reduce environmental impact and support local farmers',
    color: 'text-green-500'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Supporting local communities and creating a positive social impact',
    color: 'text-blue-500'
  },
  {
    icon: Sparkles,
    title: 'Fresh & Organic',
    description: 'Daily sourced organic ingredients, ensuring maximum flavor and nutrition',
    color: 'text-yellow-500'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description: 'Strict quality control and hygiene standards in every dish we prepare',
    color: 'text-purple-500'
  },
  {
    icon: TrendingUp,
    title: 'Energy Boost',
    description: 'Plant-based nutrition that keeps you energized and focused throughout the day',
    color: 'text-orange-500'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose GoGreen?
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the amazing benefits of choosing plant-based dining with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`${benefit.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Green Movement Today!
          </h3>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            Experience the perfect blend of taste, health, and sustainability. Your body and the planet will thank you!
          </p>
          <button
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
