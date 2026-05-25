import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Shield, Users } from "lucide-react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(value);
}

export default function Finance() {
  const [homePrice, setHomePrice] = useState("500000");
  const [downPayment, setDownPayment] = useState("100000");
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState("30");
  const [result, setResult] = useState<{ monthly: number; totalPayment: number; totalInterest: number } | null>(null);

  const calculate = () => {
    const P = parseFloat(homePrice) - parseFloat(downPayment);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseInt(loanTerm) * 12;
    if (!P || !r || !n || P <= 0) return;
    const monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setResult({ monthly, totalPayment: monthly * n, totalInterest: monthly * n - P });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Home Financing</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Smart Financing for Your Dream Home</h1>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Navigate your financing options with confidence. Use our mortgage calculator to estimate your monthly payments and plan your home purchase.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-semibold" data-testid="button-pre-approve">Get Pre-Approved</Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold" data-testid="button-calc-payment" onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}>
                Calculate Payment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-xl"><Calculator className="w-6 h-6 text-primary" /></div>
                <h2 className="text-2xl font-bold text-foreground">Mortgage Calculator</h2>
              </div>

              <Card className="border-border">
                <CardContent className="p-6 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="homePrice">Home Price</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                      <Input id="homePrice" className="pl-7" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} placeholder="500,000" data-testid="input-home-price" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="downPayment">Down Payment</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                      <Input id="downPayment" className="pl-7" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} placeholder="100,000" data-testid="input-down-payment" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
                    <div className="relative">
                      <Input id="interestRate" className="pr-8" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="6.5" data-testid="input-interest-rate" />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Loan Term</Label>
                    <Select value={loanTerm} onValueChange={setLoanTerm}>
                      <SelectTrigger data-testid="select-loan-term">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 Years</SelectItem>
                        <SelectItem value="15">15 Years</SelectItem>
                        <SelectItem value="20">20 Years</SelectItem>
                        <SelectItem value="30">30 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full rounded-full font-semibold" onClick={calculate} data-testid="button-calculate">
                    Calculate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Estimate</h2>
              {result ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                  <Card className="border-primary/30 bg-primary/5 mb-6">
                    <CardContent className="p-8 text-center">
                      <p className="text-muted-foreground mb-2">Estimated Monthly Payment</p>
                      <div className="text-5xl font-bold text-primary mb-1">{formatCurrency(result.monthly)}</div>
                      <p className="text-sm text-muted-foreground">/month</p>
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border-border">
                      <CardContent className="p-5 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Total Payment</p>
                        <div className="text-xl font-bold text-foreground">{formatCurrency(result.totalPayment)}</div>
                      </CardContent>
                    </Card>
                    <Card className="border-border">
                      <CardContent className="p-5 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
                        <div className="text-xl font-bold text-foreground">{formatCurrency(result.totalInterest)}</div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ) : (
                <div className="border-2 border-dashed border-border rounded-2xl p-12 text-center">
                  <Calculator className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Fill in the values and click Calculate to see your estimated monthly payment.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Accurate Valuation", desc: "Get a precise market value estimate backed by real data and local expertise." },
              { icon: Shield, title: "Premium Marketing", desc: "Your property showcased across all major platforms with professional photography." },
              { icon: Users, title: "Expert Negotiation", desc: "Our seasoned agents fight to get you the best terms possible on your financing." },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4"><f.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
