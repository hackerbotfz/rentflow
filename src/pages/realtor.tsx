import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Briefcase, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const agents = [
  {
    id: 1, name: "David Anderson", title: "Senior Broker", location: "New York, NY",
    bio: "David is a seasoned broker with over a decade of experience in the luxury market. He specializes in high-end residential properties and investment portfolios.",
    phone: "(555) 123-4567", email: "david.a@rentflow.com", listings: 24, experience: 12,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 2, name: "Sarah Mitchell", title: "Real Estate Agent", location: "Los Angeles, CA",
    bio: "Sarah brings a fresh perspective to real estate with her background in interior design. She helps clients see the potential in every property she shows.",
    phone: "(555) 234-5678", email: "sarah.m@rentflow.com", listings: 18, experience: 8,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    id: 3, name: "Michael Chen", title: "Commercial Specialist", location: "San Francisco, CA",
    bio: "Michael is our go-to expert for commercial properties. His analytical approach and market knowledge make him invaluable for business clients.",
    phone: "(555) 345-6789", email: "michael.c@rentflow.com", listings: 15, experience: 10,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: 4, name: "Jessica Williams", title: "Residential Agent", location: "Chicago, IL",
    bio: "Jessica's warm personality and dedication to her clients have earned her the 'Agent of the Year' award twice. She specializes in family homes.",
    phone: "(555) 456-7890", email: "jessica.w@rentflow.com", listings: 21, experience: 6,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    id: 5, name: "Robert Fox", title: "Luxury Consultant", location: "Miami, FL",
    bio: "Robert has an extensive network and an eye for luxury. He connects high-net-worth individuals with their dream estates.",
    phone: "(555) 567-8901", email: "robert.f@rentflow.com", listings: 12, experience: 15,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: 6, name: "Emily Parker", title: "New Home Specialist", location: "Austin, TX",
    bio: "Emily is passionate about new developments and helping first-time buyers navigate the complexities of purchasing a new home.",
    phone: "(555) 678-9012", email: "emily.p@rentflow.com", listings: 30, experience: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export default function Realtor() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Our Experts</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Meet Our Rent Flow Agents</h1>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Our team of dedicated professionals is here to guide you through every step of your real estate journey. With years of experience and local market expertise, we ensure you make the best decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {agents.map((agent, i) => (
              <motion.div key={agent.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} data-testid={`card-agent-${agent.id}`}>
                <Card className="overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-48 shrink-0">
                        <img src={agent.image} alt={agent.name} className="w-full h-48 sm:h-full object-cover" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-3">
                          <h3 className="text-xl font-bold text-foreground">{agent.name}</h3>
                          <p className="text-primary font-medium text-sm">{agent.title}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <MapPin className="w-3 h-3" /> {agent.location}
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">{agent.bio}</p>
                        <div className="space-y-1 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="w-3 h-3 text-primary" /> {agent.phone}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-3 h-3 text-primary" /> {agent.email}
                          </div>
                        </div>
                        <div className="flex gap-6 pt-4 border-t border-border">
                          <div className="text-center">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1"><Briefcase className="w-3 h-3" /> Listings</div>
                            <div className="font-bold text-foreground">{agent.listings}</div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1"><Clock className="w-3 h-3" /> Experience</div>
                            <div className="font-bold text-foreground">{agent.experience} Years</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Become a Rent Flow Agent</h2>
            <p className="text-blue-100 max-w-lg mx-auto mb-8 leading-relaxed">
              Join our team of top-performing agents. We provide the tools, training, and support you need to succeed in the competitive real estate market.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/careers">
                <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold" data-testid="button-join-team">
                  Join Our Team
                </Button>
              </Link>
              <Link href="/careers">
                <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold border-white text-white hover:bg-white hover:text-primary" data-testid="button-contact-careers">
                  Contact Careers
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
