import { ArrowRight, Leaf, Star } from 'lucide-react';
import Products from '../assets/Products.jpg';

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 lg:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,120,87,0.17),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(151,186,146,0.16),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-emerald-50/90 to-transparent" />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div className="max-w-xl">
          <span className="eyebrow">
            <Leaf className="h-3.5 w-3.5" />
            Fresh • Healthy • Delicious
          </span>

          <h1 className="mt-6 text-slate-900">
            GoGreen
            <span className="mt-2 block text-2xl font-semibold text-emerald-700 sm:text-3xl lg:text-4xl">
              Vegetarian
            </span>
          </h1>

          <p className="mt-6 text-2xl font-semibold text-emerald-800 sm:text-3xl">
            Where health meets flavor.
          </p>

          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
            Bring the vibrant taste of Cambodia into your everyday life with authentic vegetarian products that are fresh, wholesome, and deeply satisfying.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={scrollToProducts} className="btn-primary">
              Order now
              <ArrowRight className="h-4 w-4" />
            </button>
            <button type="button" onClick={scrollToProducts} className="btn-secondary">
              View products
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full border border-emerald-200 bg-white/80 px-3 py-2 shadow-sm">100% plant-based</span>
            <span className="rounded-full border border-emerald-200 bg-white/80 px-3 py-2 shadow-sm">Locally inspired</span>
            <span className="rounded-full border border-emerald-200 bg-white/80 px-3 py-2 shadow-sm">Made with care</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-5 rounded-[2.1rem] bg-gradient-to-br from-emerald-200/75 via-emerald-100/70 to-lime-100/70 blur-2xl" />
          <div className="soft-card relative overflow-hidden p-3">
            <div className="overflow-hidden rounded-[1.55rem]">
              <img src={Products} alt="Fresh GoGreen bowls and ingredients" className="h-[420px] w-full object-cover sm:h-[500px]" />
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-[0_18px_35px_rgba(16,61,45,0.12)] sm:left-[-1.5rem]">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-600 p-2.5 text-white shadow-lg shadow-emerald-900/10">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl font-black text-slate-900">100%</div>
                <div className="text-xs font-medium text-slate-600">Plant-based</div>
              </div>
            </div>
          </div>

          {/*<div className="absolute -right-4 top-6 rounded-2xl border border-emerald-100 bg-[#1e5d44] p-3.5 text-white shadow-[0_16px_35px_rgba(30,93,68,0.2)] sm:-right-8 sm:p-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-current text-amber-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em]">Most loved</span>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
}