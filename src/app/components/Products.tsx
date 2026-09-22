import { ShoppingBag, Store } from 'lucide-react';
import PrahokKtis3 from '../assets/PrahokKtis3.jpg';
import KapiPao3 from '../assets/KapiPao3.jpg';
import FermentedSoybeanPaste3 from '../assets/FermentedSoybeanPaste3.jpg';
import SoybeanKapiPao from '../assets/SoybeanKapiPao.jpg';
import SoybeanPrahokKtis from '../assets/SoybeanPrahokKtis.jpg';
import FermentedSoybeanPaste from '../assets/FermentedSoybeanPaste.jpg';

const retailProducts = [
  { id: 1, name: 'Soybean Prahok Ktis', description: 'Savory Cambodian soybean dip with coconut, rich umami flavor', category: 'Sauces & Condiments', image: PrahokKtis3, position: '50% 100%' },
  { id: 2, name: 'Soybean Kapi Pao', description: 'Soft steamed bun filled with savory, nutritious soybean mixture', category: 'Ready-to-Cook', image: KapiPao3 },
  { id: 3, name: 'Fermented Soybean Paste', description: 'Savory fermented soybean paste with deep umami flavor', category: 'Ready-to-Cook', image: FermentedSoybeanPaste3, position: '20% 10%' },
  { id: 4, name: 'Soybean Kapi Pao Small', description: 'Smaller soft steamed bun filled with savory, nutritious soybean mixture', category: 'Sauces & Condiments', image: SoybeanKapiPao },
  { id: 5, name: 'Soybean Prahok Ktis Small', description: 'Smaller savory Cambodian soybean dip with coconut, rich umami flavor', category: 'DIY Kits', image: SoybeanPrahokKtis },
  { id: 6, name: 'Fermented Soybean Paste Small', description: 'Smaller savory fermented soybean paste with deep umami flavor', category: 'Sauces & Condiments', image: FermentedSoybeanPaste, position: '100% 10%' }
];

const retailPartners = [
  'Aeon Supermarket',
  'Thai Huot Supermarket',
  'Chip Mong Supermarket',
  'CambodiaTrade',
  'We Market Hub',
  'Wholesale Vegetarian Groceries',
  'Vegetarian Restaurants'
];

export function Products() {
  return (
    <section id="products" className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Signature products</span>
          <h2 className="mt-6 section-title">Bring GoGreen home.</h2>
          <p className="mt-5 section-subtitle mx-auto">
            Take the GoGreen experience home with an exclusive product line inspired by Cambodia’s rich, vibrant flavors.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-emerald-200 bg-[radial-gradient(circle_at_top_left,_rgba(141,191,159,0.30),transparent_30%),linear-gradient(135deg,#edf9ee_0%,#eaf4eb_42%,#f7faf7_100%)] p-6 text-slate-900 shadow-[0_26px_60px_rgba(16,61,45,0.10)] md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr] lg:items-end">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-[#1d5a42] p-4 text-white shadow-lg shadow-emerald-900/10">
                <Store className="h-8 w-8" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">Retail network</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Now available in stores.</h3>
                <p className="mt-2 max-w-2xl text-base leading-7 text-slate-600">Find our products in leading supermarkets, convenience stores, and vegetarian-friendly destinations across Phnom Penh.</p>
              </div>
            </div>

            {/* 
            <div className="rounded-[1.5rem] border border-emerald-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3 text-sm font-medium text-slate-600">
                <span>Freshly stocked</span>
                <ShoppingBag className="h-4 w-4 text-emerald-700" />
              </div>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-3xl font-semibold tracking-[-0.06em] text-slate-900">10+</span>
                <span className="pb-1 text-sm text-slate-500">partners</span>
              </div>
            </div>*/}
          </div>

          <div className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Featured locations</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {retailPartners.map((store, index) => (
                <span
                  key={store}
                  className={[
                    'rounded-full border bg-white/80 px-3 py-2 text-sm font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md',
                    index % 2 === 0 ? 'border-emerald-200 text-slate-700' : 'border-slate-200 text-slate-600'
                  ].join(' ')}
                >
                  {store}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {retailProducts.map((product) => (
            <article key={product.id} className="soft-card overflow-hidden p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(16,61,45,0.08)]">
              <div className="overflow-hidden rounded-[1.2rem]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                  style={{ objectPosition: product.position || 'center' }}
                />
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                  {product.category}
                </span>
                <ShoppingBag className="h-5 w-5 text-emerald-700" />
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-900">{product.name}</h3>
              <p className="mt-2 text-base leading-7 text-slate-600">{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}