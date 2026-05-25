import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Star, Award, Building, Users, MapPin, Bed, Bath, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const featuredListings = [
  { id: 1, name: "Serenity Meadows", location: "MainLand, Lagos", price: "$2,340", beds: 4, baths: 2, badge: "New", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" },
  { id: 2, name: "Urban Heights Apt", location: "Downtown, Chicago", price: "$1,850", beds: 2, baths: 1, badge: "For Rent", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80" },
  { id: 3, name: "Luxury Pool Villa", location: "Palm Springs, CA", price: "$5,500", beds: 5, baths: 4, badge: "Exclusive", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80" },
  { id: 4, name: "Garden Estate", location: "Victoria Island, Lagos", price: "$3,800", beds: 4, baths: 3, badge: "Featured", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
];

const neighborhoods = [
  { id: 1, name: "Harmony Heights", sqft: "1,245", beds: 4, baths: 3, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" },
  { id: 2, name: "Curtis Adams", sqft: "1,600", beds: 3, baths: 2, image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=600&q=80" },
  { id: 3, name: "Marlene Leppanen", sqft: "1,480", beds: 2, baths: 2, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80" },
];

const testimonials = [
  { id: 1, name: "Chris Okafor", role: "CEO, Real Iron", quote: "RentFlow helped us navigate the complex world of real estate financing with ease.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { id: 2, name: "Danny Samuel", role: "CEO, Daniels Brothers", quote: "The neighborhood we found through RentFlow is more than just a place to live.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
  { id: 3, name: "Chinaza Egwu", role: "Manager, My Delicacy", quote: "From the moment we walked through the door of our new home, we knew it was the one.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { id: 4, name: "Sarah Jenkins", role: "Home Buyer", quote: "RentFlow's team was incredibly supportive and knowledgeable throughout the entire process.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
];

function BadgePill({ label }: { label: string }) {
  return (
    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full z-10">
      {label}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-16 pb-28 lg:pt-24 lg:pb-36 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-6">
                Home is where your story begins.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
                Unlock your dream home, explore endless possibilities with RentFlow — your premier rent destination.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/features">
                  <Button size="lg" className="rounded-full h-13 px-8 font-semibold group">
                    Find Properties <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button size="lg" variant="outline" className="rounded-full h-13 px-8 font-semibold">
                    Explore Gallery
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85"
                alt="Luxury Modern Home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-blue-200">Beverly Hills, CA</span>
                </div>
                <h3 className="text-2xl font-bold">The Palms Residence</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 border-y border-border py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "408+", label: "Happy Customers" },
              { icon: Star, value: "4.9", label: "Average Rating" },
              { icon: Award, value: "327+", label: "Awards Winning" },
              { icon: Building, value: "30+", label: "Properties Ready" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-4"
              >
                <stat.icon className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Featured Listing</h2>
            <p className="text-muted-foreground max-w-lg">Dive into the exclusive collection of featured listings at RentFlow — every corner offers comfort, every detail drafted with perfection.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredListings.map((prop, i) => (
              <motion.div key={prop.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href="/features">
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 border-border">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <BadgePill label={prop.badge} />
                      <img src={prop.image} alt={prop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="p-4">
                      <div className="text-xl font-bold text-primary mb-1">{prop.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                      <h3 className="font-semibold text-foreground">{prop.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1 mb-3">
                        <MapPin className="w-3 h-3" /> {prop.location}
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Bed className="w-4 h-4" />{prop.beds} Beds</span>
                        <span className="flex items-center gap-1"><Bath className="w-4 h-4" />{prop.baths} Baths</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/features">
              <Button variant="outline" className="rounded-full px-8">See More <ChevronRight className="ml-1 w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fostering a future where every individual finds their perfect home, every family creates lasting memories, and every community flourishes — Our Vision at RentFlow is to redefine the real estate experience. Guided by integrity, innovation, and a commitment to excellence, ensuring every step of your journey.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At RentFlow our mission is to transform the real estate landscape by providing unparalleled services, expertise and support to every client. We want to create a seamless experience, guiding you through every step of your home journey with integrity, transparency, and dedication with a focus on innovation and community building.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Your Complete RentFlow Experience</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Unlocking opportunities, empowering choices and simplifying your housing journey with RentFlow</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Finance a Home", href: "/finance", desc: "Loan can get you pre-approved so you're ready to make an offer quickly when you find the right home.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
              { title: "Sell a Home", href: "/sell", desc: "No matter what path you take to sell your home, we can help you navigate a successful sale.", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80" },
              { title: "Rent a Home", href: "/rent", desc: "We are creating a seamless experience from shopping on the largest rental network.", image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80" },
            ].map((svc, i) => (
              <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="overflow-hidden group border-border hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{svc.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{svc.desc}</p>
                    <Link href={svc.href} className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Property Neighborhoods</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-muted-foreground">Navigating the tapestry of neighborhoods — delve into the fabric, treasures, and find your perfect fit with RentFlow.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {neighborhoods.map((n, i) => (
              <motion.div key={n.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={n.image} alt={n.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg">{n.name}</h3>
                      <div className="flex gap-3 text-sm text-white/80 mt-1">
                        <span>{n.sqft} Sq Ft</span>
                        <span className="flex items-center gap-1"><Bed className="w-3 h-3" />{n.beds} Bed</span>
                        <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{n.baths} Bath</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/features">
              <Button variant="outline" className="rounded-full px-8">See More <ChevronRight className="ml-1 w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Testimonials From Happy RentFlow Clients</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Discover the true essence of home through the words of satisfied clients, as RentFlow touches lives around the globe.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="p-6 h-full border-border hover:shadow-md transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/testimonials">
              <Button className="rounded-full px-8">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
