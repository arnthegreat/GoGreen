import { BookOpen, Sparkles, CalendarDays } from "lucide-react";

export function CookingClasses() {
  return (
    <section
      id="cooking-classes"
      className="py-20 bg-gradient-to-br from-white via-emerald-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500/10 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-green-200">
            <Sparkles className="w-5 h-5" />
            New: Founder-led cooking classes
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-emerald-950">
            Learn to cook with Chanlang
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Join our founder for hands-on vegetarian cooking classes that bring
            Cambodian flavors home. Discover techniques, recipes, and kitchen
            confidence in every session.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="rounded-3xl bg-white shadow-2xl shadow-emerald-200/30 p-8 border border-emerald-100">
              <div className="flex items-center gap-4 mb-4 text-emerald-800">
                <BookOpen className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold">What you'll learn</h3>
                  <p className="text-sm text-gray-500">
                    Plant-based Cambodian dishes, flavor building, and plating tips.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Fresh recipe walkthroughs from our founder</li>
                <li>• Small groups for a personal experience</li>
                <li>• Tips for cooking at home with seasonal ingredients</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white shadow-2xl shadow-emerald-200/30 p-8 border border-emerald-100">
              <div className="flex items-center gap-4 mb-4 text-emerald-800">
                <CalendarDays className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold">Next sessions</h3>
                  <p className="text-sm text-gray-500">
                    Weekly classes with a new recipe each month and seasonal menu updates.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Reserve your spot to cook alongside Chanlang and learn how to make
                delicious plant-based meals, perfect for home or special occasions.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden bg-emerald-950 text-white shadow-2xl shadow-emerald-300/20">
            <div className="bg-gradient-to-br from-emerald-700 to-teal-600 px-8 py-10">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">
                Founder Cooking Class</p>
              <h3 className="mt-4 text-3xl font-bold">Cook with Chanlang</h3>
              <p className="mt-4 text-base text-emerald-100 leading-relaxed">
                Join a limited-seat workshop where the founder teaches signature
                Cambodian vegetarian recipes, kitchen shortcuts, and the stories
                behind each dish.
              </p>
            </div>
            <div className="px-8 py-8 bg-emerald-950">
              <div className="rounded-3xl bg-white/10 p-6 border border-white/10">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">
                  Class highlights</p>
                <ol className="mt-4 space-y-3 text-sm text-emerald-100 leading-relaxed">
                  <li>1. Fresh ingredients and plant-based techniques</li>
                  <li>2. Cambodian staple recipes made easy</li>
                  <li>3. Personalized guidance from the founder</li>
                </ol>
              </div>
              <button
                type="button"
                className="mt-8 w-full rounded-3xl bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-emerald-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                Reserve a spot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
