import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Products2 from '../assets/Products2.jpg';

export function About() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 text-center md:mb-16">
          <span className="eyebrow">About us</span>
          <h2 className="mt-6 section-title">
            A greener way to enjoy Phnom Penh.
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="soft-card overflow-hidden p-3">
            <div className="overflow-hidden rounded-[1.4rem]">
              <ImageWithFallback
                src={Products2}
                alt="GoGreen products and fresh ingredients"
                className="h-[420px] w-full object-cover md:h-[540px]"
              />
            </div>
          </div>

          <div className="space-y-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Our mission
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 md:text-5xl">
                Plant-based cuisine with heart.
              </h3>
            </div>

            <p className="text-lg leading-8 text-slate-600">
              Established in the heart of Phnom Penh, GoGreen Vegetarian Restaurant is more than a dining spot—it is a movement toward healthier, more sustainable living.
            </p>

            <p className="text-lg leading-8 text-slate-600">
              We believe plant-based cuisine can be both deeply nourishing and incredibly delicious, celebrating local ingredients and traditional Cambodian flavors in a modern, accessible way.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Plant-based', '100% vegetarian recipes'],
                ['Local', 'Cambodian ingredients'],
                ['Purposeful', 'Health + sustainability']
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                    {title === 'Plant-based' ? <Leaf className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{title}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-600">{description}</div>
                </div>
              ))}
            </div>

            <button type="button" onClick={scrollToProducts} className="btn-primary mt-2">
              Explore our products
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}