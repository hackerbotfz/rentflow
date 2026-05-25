import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Megaphone, Handshake, CheckCircle, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const steps = [
  { num: "01", title: "Consultation & Strategy", desc: "We meet with you to understand your goals, assess your property, and craft a tailored selling strategy." },
  { num: "02", title: "Prep & Launch", desc: "Professional photography, staging advice, and multi-platform listing launch to maximize your property's exposure." },
  { num: "03", title: "Showings & Offers", desc: "We coordinate all showings, collect feedback, and present all offers with expert analysis to guide your decisions." },
  { num: "04", title: "Closing", desc: "From accepted offer to final handshake, we manage every detail of the closing process so you can focus on your next chapter." },
];

export default function Sell() {
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Sell a Home</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">Get the Best Price for Your Home</h1>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Our proven process and expert negotiators ensure you walk away with the best possible deal. We market your home to the right buyers at the right time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 font-semibold" data-testid="button-valuation">Get Free Valuation</Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold" data-testid="button-marketing-plan">Our Marketing Plan</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card className="border-border shadow-lg">
                <CardContent className="p-7">
                  <h2 className="text-xl font-bold text-foreground mb-5">What's your home worth?</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Property Address</Label>
                      <Input id="address" placeholder="123 Main St, City, State" data-testid="input-address" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="beds">Bedrooms</Label>
                        <Input id="beds" type="number" min="1" placeholder="3" data-testid="input-beds" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="baths">Bathrooms</Label>
                        <Input id="baths" type="number" min="1" placeholder="2" data-testid="input-baths" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sellEmail">Your Email</Label>
                      <Input id="sellEmail" type="email" placeholder="you@example.com" data-testid="input-email" />
                    </div>
                    <Button type="submit" className="w-full rounded-full font-semibold" data-testid="button-get-estimate">Get Estimate</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Why Homeowners Trust RentFlow</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">We have sold hundreds of homes across the country with unmatched results.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Accurate Valuation", desc: "Our data-driven pricing strategy gets your home valued correctly from day one, avoiding costly re-listings." },
              { icon: Megaphone, title: "Premium Marketing", desc: "Professional photography, virtual tours, and placement on 50+ real estate platforms." },
              { icon: Handshake, title: "Expert Negotiation", desc: "Our seasoned agents have negotiated hundreds of deals and always fight for your best interest." },
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

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Our Proven Selling Process</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Four steps to getting your home sold at the best price.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.num} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="p-6 bg-white rounded-2xl border border-border h-full hover:shadow-md transition-shadow">
                  <div className="text-5xl font-bold text-primary/20 mb-3">{step.num}</div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to make a move?</h2>
            <p className="text-blue-100 max-w-lg mx-auto mb-8 leading-relaxed">
              Schedule a free consultation with one of our expert agents and start your selling journey today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold" data-testid="button-schedule">
                <CheckCircle className="mr-2 w-4 h-4" /> Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold border-white text-white hover:bg-white hover:text-primary" data-testid="button-call">
                <Phone className="mr-2 w-4 h-4" /> Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
