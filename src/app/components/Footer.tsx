import { Facebook, Instagram, Leaf, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0d2119] py-12 text-white md:py-14">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-500/15 p-2.5 text-emerald-300">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-black tracking-[-0.05em]">GoGreen</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">Vegetarian</div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
              Phnom Penh’s premium vegetarian restaurant, serving healthy and delicious plant-based cuisine with heart.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><a href="#about" className="transition hover:text-white">About us</a></li>
              <li><a href="#founder" className="transition hover:text-white">Our story</a></li>
              <li><a href="#products" className="transition hover:text-white">Products</a></li>
              <li><a href="#order" className="transition hover:text-white">Order online</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-emerald-300" />
                <span>+855 23 123 456<br />+855 12 345 678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-emerald-300" />
                <span>info@gogreen.com.kh</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Main location</h3>
            <div className="mt-5 flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="mt-0.5 h-4 w-4 text-emerald-300" />
              <p>Street 302, Sangkat Boeng Keng Kang 1<br />Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          <p>© 2026 GoGreen Vegetarian Restaurant. Founded by Chanlang Prum.</p>
          <p className="mt-2">Made with ❤️ in Phnom Penh, Cambodia</p>
        </div>
      </div>
    </footer>
  );
}
