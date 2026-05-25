import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Cpu, Target, Users, CheckCircle, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Join RentFlow</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Elevate Your Real Estate Career
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
              Join a team that's reshaping the future of real estate. At RentFlow, you'll get the tools, support, and leads to build the career you've always wanted.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-semibold" data-testid="button-join-today">Join RentFlow Today</Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold" data-testid="button-view-careers">View All Careers</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose RentFlow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Why Choose RentFlow?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">We give our agents everything they need to succeed and thrive.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Industry-Leading Splits", desc: "Keep more of what you earn with our competitive commission structure that rewards performance." },
              { icon: Cpu, title: "Proprietary Tech Stack", desc: "Access our cutting-edge CRM, AI-powered lead scoring, and automated follow-up tools." },
              { icon: Target, title: "Exclusive Leads", desc: "Receive pre-qualified buyer and seller leads directly to your dashboard, ready to convert." },
              { icon: Users, title: "Mentorship & Support", desc: "Tap into our network of top producers for mentorship, coaching, and collaborative growth." },
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

      {/* Work Smarter */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=85" alt="Team collaboration" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Work Smarter, Not Harder</h2>
              <ul className="space-y-4">
                {[
                  "Automated marketing campaigns that run while you focus on clients",
                  "AI-assisted pricing tools to win more listings with confidence",
                  "Mobile-first tools so you can manage deals from anywhere",
                  "Real-time market data and neighborhood analytics at your fingertips",
                ].map((point, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Quote className="w-12 h-12 text-blue-200 mx-auto mb-6" />
            <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-8">
              "Joining RentFlow was the best career decision I ever made. The leads are real, the support is genuine, and my income has doubled in two years."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="David Anderson" className="w-12 h-12 rounded-full object-cover border-2 border-white/50" />
              <div className="text-left">
                <div className="font-semibold text-white">David Anderson</div>
                <div className="text-blue-200 text-sm">Senior Broker, New York</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to take the next step?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Apply today and join a community of top-performing agents building the future of real estate.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-semibold" data-testid="button-apply">Apply Now</Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold" data-testid="button-learn-more">Learn More</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
