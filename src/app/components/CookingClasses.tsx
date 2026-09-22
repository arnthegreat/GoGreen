import { BookOpen, CalendarDays, Sparkles } from 'lucide-react';

export function CookingClasses() {
  return (
    <section id="cooking-classes" className="bg-[#f3f8f2] py-20 md:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            Founder-led cooking classes
          </span>
          <h2 className="mt-6 section-title">Learn to cook with Chanlang</h2>
          <p className="mt-5 section-subtitle mx-auto">
            Join our founder for hands-on vegetarian cooking sessions that turn Cambodian flavors into confident home cooking.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="soft-card p-7 md:p-8">
              <div className="mb-4 flex items-start gap-4 text-emerald-800">
                <div className="rounded-2xl bg-emerald-100 p-3">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">What you’ll learn</h3>
                  <p className="mt-1 text-sm text-slate-500">Plant-based Cambodian dishes, flavor building, and plating tips.</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />Fresh recipe walkthroughs from our founder</li>
                <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />Small groups for a personal, immersive experience</li>
                <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />Practical techniques for cooking at home with seasonal ingredients</li>
              </ul>
            </div>

            <div className="soft-card p-7 md:p-8">
              <div className="mb-4 flex items-start gap-4 text-emerald-800">
                <div className="rounded-2xl bg-emerald-100 p-3">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Next sessions</h3>
                  <p className="mt-1 text-sm text-slate-500">Weekly classes featuring seasonal ingredients and new recipes.</p>
                </div>
              </div>
              <p className="text-slate-600 leading-7">
                Reserve your place to cook alongside Chanlang and learn how to create delicious plant-based meals for home life and special occasions.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#10392d] text-white shadow-[0_24px_60px_rgba(16,57,45,0.18)]">
            <div className="bg-gradient-to-br from-[#1d5a42] to-[#2c7b58] px-8 py-10 md:px-10 md:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100">Founder cooking class</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">Cook with Chanlang</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-emerald-50/90">
                Join a limited-seat workshop where the founder teaches signature Cambodian vegetarian recipes, kitchen shortcuts, and the stories behind each dish.
              </p>
            </div>

            <div className="bg-[#10392d] px-8 py-8 md:px-10 md:py-10">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-100">Class highlights</p>
                <ol className="mt-5 space-y-4 text-sm leading-6 text-emerald-50/90">
                  <li>1. Fresh ingredients and plant-based techniques</li>
                  <li>2. Cambodian staple recipes made easy</li>
                  <li>3. Personalized guidance from the founder</li>
                </ol>
              </div>
              <button type="button" className="mt-8 w-full rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#10392d] transition hover:bg-emerald-50">
                Reserve a spot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
