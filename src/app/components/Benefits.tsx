import { Heart, Leaf, ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Better health',
    description: 'Nutrient-rich plant-based meals that support wellness, energy, and everyday vitality.',
    accent: 'bg-red-50 text-red-600'
  },
  {
    icon: Leaf,
    title: 'Eco-friendly',
    description: 'A more sustainable way to eat that supports local ingredients and a lighter footprint.',
    accent: 'bg-emerald-50 text-emerald-600'
  },
  {
    icon: Users,
    title: 'Community first',
    description: 'We support local producers, growers, and a food culture centered on care and connection.',
    accent: 'bg-sky-50 text-sky-600'
  },
  {
    icon: Sparkles,
    title: 'Fresh & organic',
    description: 'Daily-sourced ingredients and thoughtful preparation bring exceptional flavor and nutrition.',
    accent: 'bg-amber-50 text-amber-600'
  },
  {
    icon: ShieldCheck,
    title: 'Quality assured',
    description: 'Strict quality control and hygiene standards ensure confidence in every dish we prepare.',
    accent: 'bg-violet-50 text-violet-600'
  },
  {
    icon: TrendingUp,
    title: 'Energy boost',
    description: 'Wholesome nutrition helps you feel lighter, more energized, and ready for the day ahead.',
    accent: 'bg-orange-50 text-orange-600'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-[#f2f7f1] py-20 md:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why choose us</span>
          <h2 className="mt-6 section-title">A better way to eat, every day.</h2>
          <p className="mt-5 section-subtitle mx-auto">
            Discover the practical benefits of a plant-based lifestyle that tastes as good as it feels.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="soft-card group p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(16,61,45,0.1)]"
              >
                <div className={`mb-5 inline-flex rounded-2xl p-3 ${benefit.accent}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-[2rem] bg-[#1d5a42] px-6 py-8 text-center text-white shadow-[0_22px_54px_rgba(29,90,66,0.22)] md:px-10 md:py-12">
          <h3 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">Join the movement today.</h3>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-emerald-50/90 md:text-lg">
            Experience the perfect balance of taste, health, and sustainability. Your body and the planet will thank you.
          </p>
          <button
            type="button"
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1d5a42] transition hover:bg-emerald-50"
          >
            Start your journey
          </button>
        </div>
      </div>
    </section>
  );
}
