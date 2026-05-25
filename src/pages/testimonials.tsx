import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const allTestimonials = [
  {
    id: 1, name: "Sarah Jenkins", role: "Home Buyer", stars: 5,
    quote: "RentFlow made buying my first home an absolute dream. The team was patient, knowledgeable, and always available to answer my questions. I couldn't have asked for a better experience.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: 2, name: "James Miller", role: "Home Owner", stars: 5,
    quote: "I was nervous about selling my family home of 20 years. RentFlow walked me through every step with compassion and professionalism. We sold above asking price in just two weeks!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    id: 3, name: "Emily Chen", role: "Renter", stars: 5,
    quote: "Finding a pet-friendly apartment in the city felt impossible until I tried RentFlow. Within a week I had three great options and moved in the following month. Incredible service.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
  },
  {
    id: 4, name: "Michael Stark", role: "Property Investor", stars: 5,
    quote: "As a property investor, I need a partner who understands the market deeply. RentFlow's agents have consistently helped me find high-yield properties ahead of the competition.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    id: 5, name: "Jessica Wong", role: "First-Time Buyer", stars: 5,
    quote: "The mortgage calculator and the financing guidance from RentFlow saved me thousands. They connected me with the perfect lender and my agent negotiated a fantastic deal.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    id: 6, name: "David Thompson", role: "Home Seller", stars: 4,
    quote: "The marketing package RentFlow put together for my property was exceptional — professional photos, virtual tour, featured placement online. We had offers within 48 hours of listing.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    id: 7, name: "Amara Okonkwo", role: "Long-Term Renter", stars: 5,
    quote: "I have renewed my lease three times through RentFlow and every renewal has been smooth and hassle-free. The online portal and responsive support team make it effortless.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
  },
  {
    id: 8, name: "Carlos Rivera", role: "Relocation Buyer", stars: 5,
    quote: "Relocating from another country, I was terrified about buying property abroad. RentFlow's team held my hand through every legal requirement and found us a stunning family home.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
  },
];

const INITIAL_COUNT = 6;

export default function Testimonials() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const visible = allTestimonials.slice(0, count);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Client Stories</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h1>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Discover the true essence of home through the words of satisfied clients. Real stories from real people who found their perfect home with RentFlow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <Quote className="w-12 h-12 text-blue-200 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-8">
            "RentFlow didn't just find us a house — they found us a home. The difference is everything."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Sarah Jenkins" className="w-12 h-12 rounded-full object-cover border-2 border-white/50" />
            <div className="text-left">
              <div className="font-semibold text-white">Sarah Jenkins</div>
              <div className="text-blue-200 text-sm">Home Buyer, New York</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                data-testid={`card-testimonial-${t.id}`}
              >
                <Card className="p-6 h-full border-border hover:shadow-md transition-shadow flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
                    {Array.from({ length: 5 - t.stars }).map((_, j) => <Star key={j + t.stars} className="w-4 h-4 text-border" />)}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {count < allTestimonials.length && (
            <div className="mt-10 text-center">
              <Button
                variant="outline"
                className="rounded-full px-10"
                onClick={() => setCount(allTestimonials.length)}
                data-testid="button-load-more"
              >
                Load More Reviews
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Ready to write your own success story?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Join thousands of happy clients who found their perfect property with RentFlow.</p>
            <Button size="lg" className="rounded-full px-10 font-semibold" data-testid="button-get-started">Get Started Today</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
