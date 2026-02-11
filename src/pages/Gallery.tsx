import { useState } from "react";
import Layout from "@/components/Layout";
import {  X, ChevronLeft, ChevronRight, Images } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  location: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/Work.png",
    alt: "Solar panel installation by Alayna Green Energy team",
    caption: "5kW Rooftop Solar System — Residential Installation",
    location: "Anand, Gujarat",
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    alt: "Residential rooftop solar panels on a modern house",
    caption: "3kW Home Rooftop System — Net Metering Enabled",
    location: "Nadiad, Gujarat",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    alt: "Solar panel array on a commercial building rooftop",
    caption: "25kW Commercial Rooftop — Office Complex",
    location: "Ahmedabad, Gujarat",
  },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryImages.length) % galleryImages.length,
      );
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-solar py-20">
        <div className="container mx-auto px-4 text-center">
         
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            Project Gallery
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            A glimpse of our 1,300+ solar installations across Gujarat — from
            small home rooftops to large industrial power plants.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/20">
                      {img.location}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-heading font-semibold text-sm text-foreground leading-snug">
                    {img.caption}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {img.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 gradient-solar">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "1,300+", label: "Installations Completed" },
              { value: "33", label: "Districts Covered" },
              { value: "5-6 MW", label: "Capacity Delivered" },
              { value: "98%+", label: "Customer Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-heading font-extrabold text-secondary">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">
            Want Your Project Featured Here?
          </p>
          <h2 className="text-3xl font-heading font-bold mb-4">
            Let's Build Your Solar System
          </h2>
          <p className="text-muted-foreground mb-8">
            Every project in this gallery started with a simple phone call. Get
            a free site survey and custom quote — no obligation, no pressure.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg gradient-gold text-solar-dark font-heading font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-h-[70vh] w-auto rounded-lg object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-heading font-semibold text-lg">
                {galleryImages[lightboxIndex].caption}
              </p>
              <p className="text-white/60 text-sm mt-1">
                {galleryImages[lightboxIndex].location}
              </p>
            </div>
            <p className="text-white/40 text-xs mt-3">
              {lightboxIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
