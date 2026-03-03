import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

const images = Array.from({ length: 10 }, (_, i) => ({
  src: `/${i + 1}.jpeg`,
  alt: `Alayna Green Energy — Project ${i + 1}`,
}));

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const goPrev = () =>
    setLightbox((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null,
    );
  const goNext = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % images.length : null));

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-solar py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">
            Our Work
          </p>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-3">
            Project Gallery
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            A glimpse of our solar installations across Gujarat - rooftops,
            ground-mounted plants, and happy customers.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <button
                key={img.src}
                onClick={() => openLightbox(index)}
                className="group relative rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[4/3] bg-muted"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210_29%_15%/0.5)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block gradient-gold text-solar-dark text-xs font-heading font-semibold px-2.5 py-1 rounded-md">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(210_29%_15%/0.9)] backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-primary-foreground/80 hover:text-secondary transition-colors z-10"
          >
            <X className="h-7 w-7" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 md:left-8 text-primary-foreground/70 hover:text-secondary transition-colors z-10"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>

          {/* Image */}
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl border border-border/30 object-contain"
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 md:right-8 text-primary-foreground/70 hover:text-secondary transition-colors z-10"
          >
            <ChevronRight className="h-9 w-9" />
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 text-primary-foreground/60 text-sm font-heading">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
