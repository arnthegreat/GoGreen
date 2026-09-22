import { ArrowRight, Leaf, Star } from 'lucide-react';
import Products from '../assets/Products.jpg';

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#eef5ee] pt-28 pb-20 sm:pt-32 lg:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,120,87,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(131,168,126,0.18),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#e9f2e8] to-transparent" />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-xl">
          <span className="eyebrow">
            <Leaf className="h-3.5 w-3.5" />
            Fresh • Healthy • Delicious
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-[-0.06em] text-slate-900 sm:text-6xl lg:text-7xl">
            GoGreen
            <span className="mt-1 block text-2xl font-semibold text-emerald-700 sm:text-3xl lg:text-4xl">
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
            <span className="rounded-full border border-emerald-200 bg-white px-3 py-2 shadow-sm">100% plant-based</span>
            <span className="rounded-full border border-emerald-200 bg-white px-3 py-2 shadow-sm">Locally inspired</span>
            <span className="rounded-full border border-emerald-200 bg-white px-3 py-2 shadow-sm">Made with care</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-emerald-200 via-emerald-100 to-lime-100 blur-2xl" />
          <div className="soft-card relative overflow-hidden p-3">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img src={Products} alt="Fresh GoGreen bowls and ingredients" className="h-[420px] w-full object-cover sm:h-[500px]" />
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-[0_18px_35px_rgba(16,61,45,0.12)] sm:left-[-1.5rem]">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-600 p-2.5 text-white">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl font-black text-slate-900">100%</div>
                <div className="text-xs font-medium text-slate-600">Plant-based</div>
              </div>
            </div>
          </div>

          {/*}
          <div className="absolute -right-4 -top-4 rounded-2xl bg-[#1d5a42] p-4 text-white shadow-[0_18px_35px_rgba(29,90,66,0.25)] sm:-right-8">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-current text-amber-300" />
              <span className="text-sm font-semibold">Most popular</span>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
}