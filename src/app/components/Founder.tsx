import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function Founder() {
  return (
    <section
      id="founder"
      className="py-20 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Founder
          </h1>
          <div className="w-24 h-1 bg-green-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-white mb-4">
              Chanlang Prum
            </h3>
            <p className="text-xl bg-gradient-to-r from-white via-green-100 to-emerald-500 bg-clip-text text-transparent font-semibold mb-6">
              Founder & Culinary Visionary
            </p>
            <div className="relative mb-6">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-green-300" />
              <blockquote className="text-lg text-white italic pl-8 border-l-4 border-green-600">
                "My dream was simple: to show Cambodia and the
                world that vegetarian food can be as rich,
                flavorful, and satisfying as any traditional
                cuisine. Every dish we serve carries a piece of
                my heart and my commitment to health and
                sustainability."
              </blockquote>
            </div>
            <p className="text-lg text-white mb-4 leading-relaxed">
              For founder Chanlang Prum, a lifelong vegetarian
              with a deep passion for cooking, sharing healthy
              food was always a dream. Her culinary journey
              began humbly in 2018, selling homemade vegetarian
              lunchboxes. After a brief and unsuccessful venture
              opening "Angel Salon" with her closest friend,
              Chanlang decided to return to her true calling.
              She opened a small food kiosk on the streets of
              Phnom Penh, and it was there that the brand
              "GoGreen" was officially born.{" "}
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              The real turning point arrived in 2020 during the
              height of the COVID-19 pandemic. A deeply trusted
              friend from Hong Kong visited Cambodia and asked
              Chanlang what her ultimate dream was. When she
              shared her vision of owning a full vegetarian
              restaurant, he encouraged her to draft a business
              model and generously invested in her idea. With
              his support, GoGreen transformed from a street
              kiosk into a legitimate restaurant in the BKK
              district. Operating a new business during a global
              crisis brought many struggles, but Chanlang never
              lost sight of her community, consistently
              volunteering to cook and provide food for
              charities and those most affected by the pandemic.
            </p>
            <p className="text-lg text-white leading-relaxed">
              After years of resilience and growth, GoGreen
              outgrew its original space and relocated to a
              welcoming new place in 2024 to accommodate its
              expanding family of diners. Chanlang's vision also
              began to stretch beyond the restaurant doors. In
              2025, GoGreen partnered with a local factory to
              launch a signature plant-based version of Prahok
              Ktis, which successfully made its way from
              convenience stores to major supermarket shelves.
              Today, the innovation continues as GoGreen
              prepares to launch Hsama—Cambodia's very first
              fully vegan sauce—proving that from a small street
              kiosk to a thriving brand, the mission to share
              delicious, healthy, and compassionate food remains
              stronger than ever.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-700 rounded-3xl blur-2xl opacity-70 animate-pulse"></div>
              <img
                src="/src/app/assets/ChanlangPrum.png"
                alt="Chanlang Prum - Founder of GoGreen"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}