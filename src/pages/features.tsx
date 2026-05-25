import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Search, MapPin, Bed, Bath, ChevronLeft, ChevronRight } from "lucide-react";

const allProperties = [
  { id: 1, name: "Serenity Meadows", location: "MainLand, Lagos", price: "$2,340", beds: 4, baths: 2, badge: "New", type: "Apartment", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" },
  { id: 2, name: "Urban Heights Apartment", location: "Downtown, Chicago", price: "$1,850", beds: 2, baths: 1, badge: "For Rent", type: "Apartment", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80" },
  { id: 3, name: "Cozy Suburban Cottage", location: "Maple Ave, Portland", price: "$3,200", beds: 3, baths: 2, badge: "Hot", type: "House", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80" },
  { id: 4, name: "Luxury Pool Villa", location: "Palm Springs, CA", price: "$5,500", beds: 5, baths: 4, badge: "Exclusive", type: "Villa", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80" },
  { id: 5, name: "Modern Loft", location: "SoHo, New York", price: "$4,200", beds: 1, baths: 1, badge: "New", type: "Studio", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80" },
  { id: 6, name: "Garden Estate", location: "Victoria Island, Lagos", price: "$3,800", beds: 4, baths: 3, badge: "Featured", type: "House", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { id: 7, name: "Minimalist Studio", location: "Berlin, Germany", price: "$1,200", beds: 1, baths: 1, badge: "Deal", type: "Studio", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80" },
  { id: 8, name: "Lakeside Residence", location: "Lekki, Lagos", price: "$2,950", beds: 3, baths: 2, badge: "Sale", type: "House", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" },
];

const badgeColors: Record<string, string> = {
  New: "bg-primary text-primary-foreground",
  Hot: "bg-orange-500 text-white",
  Exclusive: "bg-purple-600 text-white",
  Featured: "bg-blue-500 text-white",
  Deal: "bg-green-600 text-white",
  Sale: "bg-red-500 text-white",
  "For Rent": "bg-teal-500 text-white",
};

export default function Features() {
  const [keyword, setKeyword] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [page, setPage] = useState(1);

  const filtered = allProperties.filter((p) => {
    const kw = keyword.toLowerCase();
    const matchKw = !kw || p.name.toLowerCase().includes(kw) || p.location.toLowerCase().includes(kw);
    const matchType = !propertyType || p.type === propertyType;
    const matchPrice = !priceRange || (() => {
      const num = parseInt(p.price.replace(/\D/g, ""));
      if (priceRange === "under2000") return num < 2000;
      if (priceRange === "2000-4000") return num >= 2000 && num <= 4000;
      if (priceRange === "over4000") return num > 4000;
      return true;
    })();
    return matchKw && matchType && matchPrice;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
    if (sortBy === "price-desc") return parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""));
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Search */}
      <section className="bg-slate-50 border-b border-border py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">Find Your Dream Property</h1>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Browse our extensive collection of properties and find the one that suits your lifestyle perfectly.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="bg-white rounded-2xl shadow-lg p-4 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="relative sm:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="e.g. Lagos, Apartment, Pool..."
                  className="pl-10"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  data-testid="input-search"
                />
              </div>
              <Select onValueChange={setPropertyType}>
                <SelectTrigger data-testid="select-property-type">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Studio">Studio</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={setPriceRange}>
                <SelectTrigger data-testid="select-price-range">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under2000">Under $2,000</SelectItem>
                  <SelectItem value="2000-4000">$2,000 – $4,000</SelectItem>
                  <SelectItem value="over4000">Over $4,000</SelectItem>
                </SelectContent>
              </Select>
              <Button className="sm:col-span-4 rounded-full" data-testid="button-search" onClick={() => setPage(1)}>
                <Search className="mr-2 w-4 h-4" /> Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold text-foreground">{sorted.length} Properties Found</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select onValueChange={setSortBy}>
                <SelectTrigger className="w-40" data-testid="select-sort">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sorted.map((prop, i) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                data-testid={`card-property-${prop.id}`}
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <span className={`absolute top-3 left-3 z-10 text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[prop.badge] || "bg-primary text-primary-foreground"}`}>
                      {prop.badge}
                    </span>
                    <img src={prop.image} alt={prop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">{prop.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                        <h3 className="font-semibold text-foreground text-lg">{prop.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="w-3 h-3" /> {prop.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                      <span className="flex items-center gap-2"><Bed className="w-4 h-4 text-primary" />{prop.beds} Beds</span>
                      <span className="flex items-center gap-2"><Bath className="w-4 h-4 text-primary" />{prop.baths} Baths</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors disabled:opacity-40"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              data-testid="button-prev-page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                data-testid={`button-page-${p}`}
                className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${page === p ? "bg-primary text-primary-foreground" : "border border-border hover:border-primary hover:text-primary"}`}
              >
                {p}
              </button>
            ))}
            <span className="text-muted-foreground px-1">...</span>
            <button className="w-10 h-10 rounded-full text-sm font-medium border border-border hover:border-primary hover:text-primary transition-colors">12</button>
            <button
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              onClick={() => setPage((p) => p + 1)}
              data-testid="button-next-page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
