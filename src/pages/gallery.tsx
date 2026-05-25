import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const typeFilters = ["All", "Exterior", "Interior", "Outdoor"];
const styleFilters = ["Apartment", "Studio", "Residential"];

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85", alt: "Modern villa exterior", type: "Exterior", style: "Residential" },
  { id: 2, src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=85", alt: "Luxury apartment interior", type: "Interior", style: "Apartment" },
  { id: 3, src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=85", alt: "Pool villa exterior", type: "Outdoor", style: "Residential" },
  { id: 4, src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=85", alt: "Modern exterior facade", type: "Exterior", style: "Apartment" },
  { id: 5, src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=85", alt: "Cozy studio interior", type: "Interior", style: "Studio" },
  { id: 6, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=85", alt: "Rooftop pool outdoor", type: "Outdoor", style: "Apartment" },
  { id: 7, src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85", alt: "Contemporary residence", type: "Exterior", style: "Residential" },
  { id: 8, src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85", alt: "Modern kitchen interior", type: "Interior", style: "Apartment" },
  { id: 9, src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85", alt: "Garden terrace outdoor", type: "Outdoor", style: "Residential" },
  { id: 10, src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=85", alt: "Studio apartment", type: "Interior", style: "Studio" },
  { id: 11, src: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=85", alt: "Contemporary building exterior", type: "Exterior", style: "Apartment" },
  { id: 12, src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=85", alt: "Infinity pool outdoor", type: "Outdoor", style: "Residential" },
];

export default function Gallery() {
  const [activeType, setActiveType] = useState("All");
  const [activeStyle, setActiveStyle] = useState<string | null>(null);

  const filtered = images.filter((img) => {
    const typeOk = activeType === "All" || img.type === activeType;
    const styleOk = !activeStyle || img.style === activeStyle;
    return typeOk && styleOk;
  });

  const col1 = filtered.filter((_, i) => i % 3 === 0);
  const col2 = filtered.filter((_, i) => i % 3 === 1);
  const col3 = filtered.filter((_, i) => i % 3 === 2);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
              Exclusive<br />Gallery
            </h1>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Explore our handpicked collection of the world's most stunning properties, featuring exquisite interiors and breathtaking landscapes.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap gap-2">
              {typeFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveType(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    activeType === f
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {styleFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveStyle(activeStyle === f ? null : f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    activeStyle === f
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType + activeStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[col1, col2, col3].map((col, ci) => (
              <div key={ci} className="flex flex-col gap-4">
                {col.map((img, i) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className={`overflow-hidden rounded-2xl ${i % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/4]"} group cursor-pointer`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-3 text-center py-20 text-muted-foreground">No images found for this filter combination.</div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
