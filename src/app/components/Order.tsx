import { Clock, Mail, MapPin, Phone, ShoppingCart, Sparkles } from 'lucide-react';

export function Order() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="order" className="bg-[#edf5ee] py-20 md:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-6 section-title">Visit, call, or order with ease.</h2>
          <p className="mt-5 section-subtitle mx-auto">
            Enjoy fresh, flavorful vegetarian meals in person or from the comfort of home.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="overflow-hidden rounded-[2rem] bg-[#1d5a42] p-7 text-white shadow-[0_24px_60px_rgba(29,90,66,0.18)] md:p-10">
            <Sparkles className="h-12 w-12 text-emerald-200" />
            <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">Order online now.</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-emerald-50/90 md:text-lg">
              Browse our delicious menu, add favorites to your cart, and choose delivery or pickup in just a few steps.
            </p>

            <div className="mt-8 space-y-4 text-base md:text-lg">
              {[
                'Add items to your cart',
                'Choose delivery or pickup',
                'Enjoy fresh, healthy food'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-2.5">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button type="button" onClick={scrollToProducts} className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1d5a42] transition hover:bg-emerald-50">
                Browse products & order
              </button>
              <span className="inline-flex items-center rounded-full border border-red-200 bg-red-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="soft-card p-7 md:p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">Quick contact</h3>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-700"><Phone className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Phone</p>
                    <p className="mt-1 text-base text-slate-700">+855 23 123 456</p>
                    <p className="text-base text-slate-700">+855 12 345 678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-700"><Mail className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Email</p>
                    <p className="mt-1 text-base text-slate-700">info@gogreen.com.kh</p>
                    <p className="text-base text-slate-700">orders@gogreen.com.kh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-700"><Clock className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Opening hours</p>
                    <p className="mt-1 text-base text-slate-700">Mon - Fri: 10:00 AM - 9:00 PM</p>
                    <p className="text-base text-slate-700">Sat - Sun: 9:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="soft-card p-7 md:p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">Our locations</h3>
              <div className="mt-6 space-y-5">
                {[
                  ['Main Branch - BKK1', 'Street 302, Sangkat Boeng Keng Kang 1', 'Phnom Penh, Cambodia'],
                  ['Riverside Branch', 'Sisowath Quay, Riverside Area', 'Phnom Penh, Cambodia'],
                  ['Toul Kork Branch', 'Street 289, Boeung Kak Ti Muoy', 'Phnom Penh, Cambodia']
                ].map(([title, line1, line2]) => (
                  <div key={title} className="border-l-2 border-emerald-500 pl-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-emerald-700" />
                      <div>
                        <p className="text-base font-semibold text-slate-900">{title}</p>
                        <p className="text-sm text-slate-600">{line1}</p>
                        <p className="text-sm text-slate-600">{line2}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}