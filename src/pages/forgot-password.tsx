import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Home } from "lucide-react";

export default function ForgotPassword() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-105 transition-transform">
            <Home size={20} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">RentFlow</span>
        </Link>
        <Link href="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-5 rounded-2xl">
              <Home className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-3">Reset your password</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-sm mx-auto">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10"
                  data-testid="input-email"
                />
              </div>
            </div>

            <Button type="submit" className="w-full rounded-full h-12 text-base font-semibold" data-testid="button-send-reset">
              Send reset link
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-muted-foreground">Or</span></div>
          </div>

          <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium" data-testid="link-back-to-login">
            <ArrowLeft className="w-4 h-4" /> Back to login
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
