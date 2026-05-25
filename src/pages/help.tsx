import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Search, MessageCircle, Mail, Phone, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How do I schedule a property tour?",
    a: "You can schedule a property tour by visiting the property's listing page and clicking the 'Schedule Tour' button. Select your preferred date and time, and one of our agents will confirm your appointment within 24 hours.",
  },
  {
    q: "What documents do I need to rent a property?",
    a: "Typically you will need a valid government-issued ID, proof of income (recent pay stubs or bank statements), references from previous landlords, and a completed rental application. Requirements may vary by property.",
  },
  {
    q: "Is there a fee for using RentFlow?",
    a: "Browsing and searching properties on RentFlow is completely free. Fees may apply for premium services such as featured listings for property owners, or specific transaction-related services. All fees are clearly disclosed before any commitment.",
  },
  {
    q: "How can I list my property on RentFlow?",
    a: "To list your property, create a RentFlow account and navigate to 'List a Property' from your dashboard. Fill in property details, upload photos, set your price, and our team will review and publish your listing within 48 hours.",
  },
  {
    q: "Can I save my favorite properties?",
    a: "Yes! Once you create a free RentFlow account, you can save properties by clicking the heart icon on any listing. Access all your saved properties from the 'Favorites' section in your dashboard.",
  },
  {
    q: "How do I contact an agent?",
    a: "Each property listing includes the assigned agent's contact information. You can reach out via phone, email, or through the in-app messaging feature. You can also browse our Realtor page to find and contact any agent directly.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${index}`}
      >
        <span className="font-semibold text-foreground pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-5 pb-5 text-muted-foreground leading-relaxed border-t border-border pt-4"
        >
          {a}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Help() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">How can we help you?</h1>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
              Find answers to common questions, get in touch with our support team, or browse our knowledge base.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for answers..."
                className="pl-12 h-14 text-base bg-white rounded-full"
                data-testid="input-help-search"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 px-6" data-testid="button-help-search">
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MessageCircle, title: "Live Chat", desc: "Chat with a support specialist in real time. Available Monday–Friday, 9am–6pm EST.", action: "Start Chat" },
              { icon: Mail, title: "Email Us", desc: "Send us a message and we'll get back to you within 24 hours on business days.", action: "Send Email" },
              { icon: Phone, title: "Call Support", desc: "Speak directly with our support team at +1 (555) 123-4567. Mon–Fri 9am–6pm EST.", action: "Call Now" },
            ].map((channel, i) => (
              <motion.div key={channel.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="p-6 text-center border-border hover:shadow-md transition-shadow h-full">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-2xl">
                      <channel.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{channel.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{channel.desc}</p>
                  <Button variant="outline" className="rounded-full" data-testid={`button-${channel.title.toLowerCase().replace(" ", "-")}`}>
                    {channel.action}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about RentFlow. Can't find the answer? Contact our support team.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-border">
            <h3 className="font-bold text-foreground text-lg mb-2">Still have questions?</h3>
            <p className="text-muted-foreground text-sm mb-4">Can't find the answer you're looking for? Please reach out to our support team.</p>
            <Button className="rounded-full px-8" data-testid="button-contact-support">Get in Touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
