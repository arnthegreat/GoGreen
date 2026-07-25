import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";
import ChanlangPrumImage from "../assets/ChanlangPrum.jpg";

export function Founder() {
  return (
    <section
      id="founder"
      className="py-20 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-bl from-teal-950 via-green-900 to-emerald-950"
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
              Founder's Vision
            </p>
            <div className="relative mb-6">
              <Quote className="absolute top-0 left-3 w-8 h-8 text-green-300" />
              <blockquote className="text-lg text-white italic pl-12 border-l-4 border-green-600">
                "My dream was simple: to show Cambodia and the
                world that vegetarian food can be as rich,
                flavorful, and satisfying as any traditional
                cuisine. Every dish we serve carries a piece of
                my heart and my commitment to health and
                sustainability."
              </blockquote>
            </div>
            
            <p className="text-xl bg-gradient-to-r from-white via-green-100 to-emerald-500 bg-clip-text text-transparent font-semibold mb-6">
              Founder's Story
            </p>

            <p className="text-lg text-white mb-4 leading-relaxed">
              My journey toward founding Gogreen Vegetarian began long before the restaurant itself was established.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Growing up in Banteay Meanchey Province, Cambodia, near the Thailand border, I developed a deep love and compassion for animals from an early age. In 2002, at the age of sixteen, I was introduced to the philosophy of vegetarianism through a Chinese temple founded by Taiwanese practitioners in my hometown. Although I did not immediately adopt a vegetarian lifestyle, the experience planted a seed that would later shape my life’s purpose.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Years later, after studying Buddhist teachings related to karma and the interconnectedness of all living beings, I made the decision to become a full vegetarian. Today, I have maintained this commitment for more than sixteen years.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Before becoming an entrepreneur, I worked in a variety of professional roles, including Receptionist, Administrator, Secretary, VIP Service Executive, and Personal Assistant. These experiences taught me discipline, leadership, communication, and the importance of serving others with sincerity and professionalism.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Despite my career progression, I carried a dream of creating a vegetarian restaurant that would promote health, compassion, and environmental awareness.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              On July 18, 2020, that dream became reality when Gogreen Vegetarian officially opened its doors, supported by the financial partnership of my Hong Kong friend, Terry.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Only three months later, the COVID-19 pandemic impacted the entire world. During the same period, I was pregnant with my youngest child and faced severe pregnancy sickness, financial uncertainty, landlord disputes, my husband’s job loss and COVID-19 infection, as well as significant emotional and mental challenges.
            </p>
            <p className="text-lg text-white mb-4leading-relaxed">
              There were many moments when I considered closing the business.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              However, every challenge strengthened my conviction that Gogreen existed for a purpose greater than myself.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Through resilience and continuous learning, Gogreen has remained open and continued to grow. Today, we operate a restaurant and have developed three signature vegetarian products: Brohok KTIS, Kapi Pao, and Fermented Soybean, which are available in multiple retail channels throughout Cambodia.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Over the past six years, I have also dedicated myself to sharing vegetarian knowledge through cooking classes, recipe development, and supporting food establishments in transitioning from meat-based operations to vegetarian concepts.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              One of the most important lessons I have learned is that leadership begins with personal growth. Success requires not only passion but also continuous learning, self-development, and the courage to take responsibility during difficult times.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Looking toward the future, my dream is to establish a dedicated vegetarian food manufacturing facility in Cambodia and bring Khmer vegetarian cuisine to international markets. I hope future generations will continue building upon this mission and help introduce Cambodian plant-based products and culinary traditions to the world. 
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
            Gogreen is more than a business. It is a lifelong commitment to health, compassion, sustainability, and positive impact.
            </p>
            <br />
            <p className="italic text-base text-white mb-4 leading-relaxed">Chanlang Prum - Founder, Gogreen Vegetarian</p>
            
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-700 rounded-3xl blur-2xl opacity-70 animate-pulse"></div>
              <img
                src={ChanlangPrumImage}
                alt="Chanlang Prum - Founder of GoGreen"
                className="relative w-full h-[900px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}