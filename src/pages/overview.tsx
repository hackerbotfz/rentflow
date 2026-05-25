import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const team = [
  { name: "David Anderson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Sarah Mitchell", role: "Head of Sales", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "James Carter", role: "Senior Property Consultant", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Emily Parker", role: "Marketing Director", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
];

export default function Overview() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Who We Are</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
              Redefining Rent Flow for the Modern World
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=85" alt="Our office" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At RentFlow, we believe finding a home should be as seamless as living in one. We combine technology with personalized service to bring you the best property experience.
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2015, RentFlow started with a simple mission: to make the rental process transparent and efficient. What began as a small team of three has grown into a leading real estate platform serving thousands of happy clients.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We saw the frustration in the market — hidden fees, confusing paperwork, and unresponsive agents. We decided to change that. Today, RentFlow stands as a beacon of trust and innovation in the property market.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "10,000+", label: "Properties Listed" },
                  { value: "50,000+", label: "Trusted Clients" },
                  { value: "Award", label: "Winning Service" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-xl font-bold text-primary mb-1">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fostering a future where every individual finds their perfect home, every family creates lasting memories, and every community flourishes — Our Vision at RentFlow is to redefine the real estate experience. Guided by integrity, innovation, and a commitment to excellence, ensuring every step of your journey.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At RentFlow our mission is to transform the real estate landscape by providing unparalleled services, expertise and support to every client. We want to create a seamless experience, guiding you through every step of your home journey with integrity, transparency, and dedication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">The passionate individuals behind RentFlow who make your home journey effortless.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div key={member.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="overflow-hidden group border-border hover:shadow-lg transition-all duration-300 text-center">
                  <div className="aspect-square overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Your Complete RentFlow Experience</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Unlocking opportunities, empowering choices and simplifying your housing journey with RentFlow</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Finance a Home", href: "/finance", desc: "Loan can get you pre-approved so you're ready to make an offer quickly when you find the right home.", points: ["Competitive rates", "Fast pre-approval", "Expert guidance"] },
              { title: "Sell a Home", href: "/sell", desc: "No matter what path you take to sell your home, we can help you navigate a successful sale.", points: ["Free valuation", "Premium marketing", "Expert negotiation"] },
              { title: "Rent a Home", href: "/rent", desc: "We are creating a seamless experience from shopping on the largest rental network.", points: ["Verified listings", "Easy scheduling", "Online applications"] },
            ].map((svc, i) => (
              <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="p-6 h-full border-border hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-3">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                  <Link href={svc.href} className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
