import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-105 transition-transform">
                <Home size={20} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">RentFlow</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Unlock your dream home, explore endless possibilities with RentFlow - your premier rent destination.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>123 Real Estate Blvd, Suite 100, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>contact@rentflow.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Listing</Link>
              </li>
              <li>
                <Link href="/overview" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/realtor" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Team</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</Link>
              </li>
              <li>
                <Link href="/finance" className="text-sm text-muted-foreground hover:text-primary transition-colors">Financing</Link>
              </li>
              <li>
                <Link href="/sell" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sell a Home</Link>
              </li>
              <li>
                <Link href="/rent" className="text-sm text-muted-foreground hover:text-primary transition-colors">Rent a Home</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Enter your email" className="bg-white" />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RentFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
