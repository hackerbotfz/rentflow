import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Search, CheckCircle, Calendar, FileText, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const lifestyleCards = [
  { title: "City Living", desc: "Urban apartments near transit, dining, and entertainment hubs.", image: "https://images.unsplash.com/photo-1515263487990-61b07816fe47?w=600&q=80" },
  { title: "Pet Friendly", desc: "Homes with yards, parks nearby, and landlords who love animals.", image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=600&q=80" },
  { title: "First-Time Renters", desc: "Affordable options with flexible lease terms and helpful guidance.", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80" },
  { title: "Family Homes", desc: "Spacious homes near top-rated schools and family-friendly neighborhoods.", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80" },
];

export default function Rent() {
  const handleSearch = (e: React.FormEvent) => e.preventDefault();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Seamless Rental Experience</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Find Your Perfect Rental Home</h1>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Browse thousands of verified rental properties. Our easy process connects you with your next home in no time.
            </p>
            <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-lg p-4 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="relative sm:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="City, ZIP, or Neighborhood" className="pl-10" data-testid="input-rent-search" />
              </div>
              <Select>
                <SelectTrigger data-testid="select-rent-type"><SelectValue placeholder="Property Type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" className="rounded-full font-semibold" data-testid="button-rent-search">
                <Search className="mr-2 w-4 h-4" /> Search
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Why Rent with RentFlow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Why Rent with RentFlow?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">We've simplified the rental process so you can focus on finding the perfect home.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: "Verified Listings", desc: "Every property on RentFlow is verified by our team to ensure accuracy and prevent scams." },
              { icon: Calendar, title: "Easy Scheduling", desc: "Book property tours directly online at a time that works for you, with instant confirmation." },
              { icon: FileText, title: "Online Applications", desc: "Apply for rentals entirely online with our secure digital application and e-signature system." },
            ].map((item, i) => (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="p-6 border-border hover:shadow-lg transition-shadow h-full">
                  <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4"><item.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Lifestyle */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Browse by Lifestyle</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Find a rental that fits the way you live.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifestyleCards.map((card, i) => (
              <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href="/features">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                      <p className="text-white/80 text-sm leading-snug">{card.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to find your new home?</h2>
            <p className="text-blue-100 max-w-lg mx-auto mb-8 leading-relaxed">
              Join thousands of renters who found their perfect home through RentFlow. Start browsing today.
            </p>
            <Link href="/features">
              <Button size="lg" variant="secondary" className="rounded-full px-10 font-semibold" data-testid="button-start-browsing">
                Start Browsing Listings <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
