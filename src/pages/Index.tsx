import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
  Phone,
  Star,
  Leaf,
  Clock,
  Wrench,
  IndianRupee,
} from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-solar.jpg";
import aboutTeamImage from "@/assets/about-team.jpg";
import workSolarImage from "@/assets/work-solar.jpg";

const stats = [
  { value: "2,500+", label: "Happy Customers" },
  { value: "Since 2018", label: "Years of Trust" },
  { value: "10+", label: "Offices Across Gujarat" },
  { value: "3.5-4 ", label: "Capacity Delivered (MW)" },
];

const services = [
  {
    icon: Sun,
    title: "Rooftop Solar Systems",
    desc: "We design, supply, and install customized rooftop solar systems for homes, shops, factories, and offices. Whether you need a 1kW system for your house or a 100kW setup for your factory, we handle everything from survey to commissioning.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    icon: Zap,
    title: "Ground-Mounted Solar Plants",
    desc: "For farms and large open lands, we set up ground-mounted solar power plants that maximize energy generation. Our agricultural solar solutions help farmers reduce electricity bills while earning through net metering.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
  },
  {
    icon: Shield,
    title: "Polycab Wires & Inverters",
    desc: "As official suppliers of Polycab electrical products, we provide high-quality DC cables, AC wires, and solar inverters. Every component we use meets Indian safety standards and comes with a manufacturer warranty.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
  },
  {
    icon: Users,
    title: "Consultation & After-Sales",
    desc: "Not sure how solar works? Our team will visit your site, assess your electricity consumption, and suggest the best system size and budget. We also handle government subsidy paperwork and provide lifelong maintenance support.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
];

const partners = [
  {
    name: "Waaree Energies",
    role: "Official Channel Partner",
    logo: "/waaree.png",
  },

  { name: "Polycab", role: "Wires & Inverters", logo: "/polycab.png" },
];

const whyChooseUs = [
  {
    icon: CheckCircle2,
    title: "Award-Winning Service",
    desc: "Divya Bhaskar Star Award 2024 winner — recognized as Charotar's most trusted solar company.",
  },
  {
    icon: IndianRupee,
    title: "Subsidy Assistance",
    desc: "We handle the entire PM Surya Ghar Yojana and state subsidy process so you don't have to run around.",
  },
  {
    icon: Clock,
    title: "On-Time Installation",
    desc: "Most residential projects completed within 3–5 working days from material dispatch.",
  },
  {
    icon: Wrench,
    title: "5 year Maintenance",
    desc: "We provide 5 years of free maintenance as per government guidelines - including  inverter checks, and performance monitoring to keep your system running at peak efficiency.",
  },
  {
    icon: Leaf,
    title: "Genuine Waree Products Only",
    desc: "We only use Tier-1 branded products with 25-year performance warranty.",
  },
  {
    icon: Star,
    title: "2500+ Happy Families",
    desc: "Our customers across 33 districts of Gujarat trust us because we deliver what we promise.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Site Survey",
    desc: "Our engineer visits your location, checks roof structure, shadow analysis, and electricity bill to recommend the right system.",
  },
  {
    step: "02",
    title: "Custom Proposal",
    desc: "We prepare a detailed quotation with system size, expected savings, subsidy amount, and payback period — everything transparent.",
  },
  {
    step: "03",
    title: "Installation",
    desc: "Our trained team installs the system with proper earthing, wiring, and safety measures. Most homes are done in 3–5 days.",
  },
  {
    step: "04",
    title: "Net Metering & Handover",
    desc: "We apply for net metering with GEB, get your meter installed, and hand over the system with all documents.",
  },
];

const testimonials = [
  {
    name: "Rajesh Patel",
    location: "Anand",
    text: "Got a 5kW system installed for my home. The team was very professional and completed the work in just 4 days. My electricity bill has dropped from ₹4,000 to almost zero. Highly recommended!",
    system: "5kW Residential",
  },
  {
    name: "Mehul Shah",
    location: "Nadiad",
    text: "We installed a 50kW system at our textile unit through Alayna. The subsidy process was handled completely by them. Very satisfied with the quality and after-sales service.",
    system: "50kW Commercial",
  },
  {
    name: "Jasmine Ben",
    location: "Borsad",
    text: "I was confused about solar initially, but Tahar bhai explained everything clearly. From survey to net metering, they took care of everything. My neighbours have also installed from them after seeing my system.",
    system: "3kW Residential",
  },
];

const heroSlides = [
  {
    src: heroImage,
    alt: "Solar panel installation on a rooftop in Gujarat",
    badge: "Official Channel Partner — Waaree Energies Ltd.",
    titleLines: ["Switch to Solar.", "Save Money.", "Go Green."],
    description:
      "We are Alayna Green Energy Pvt. Ltd. — Gujarat's award-winning solar company serving 2500+ homes, businesses, and farms since 2018.",
    location: "Based in Anand, Charotar | 10+ offices across Gujarat",
  },
  {
    src: aboutTeamImage,
    alt: "Alayna Green Energy team at the office",
    badge: "Trusted by 2500+ Families Across Gujarat",
    titleLines: ["Expert Solar Team.", "Honest Guidance.", "Reliable Support."],
    description:
      "From free site survey to subsidy paperwork and net metering, our team handles your complete solar journey with transparent advice.",
    location: "Dedicated service team with statewide support",
  },
  {
    src: workSolarImage,
    alt: "Solar installation work by Alayna Green Energy team",
    badge: "Fast & Safe Installation Process",
    titleLines: [
      "Quality Installation.",
      "On-Time Delivery.",
      "Long-Term Performance.",
    ],
    description:
      "Our trained technicians install rooftop and industrial systems with proper earthing, safety standards, and high-quality components.",
    location: "Most residential systems completed in 3–5 working days",
  },
];

const formatAnimatedValue = (value: string, progress: number) => {
  const plusMatch = value.match(/^\s*([\d,]+)\+\s*$/);
  if (plusMatch) {
    const target = Number(plusMatch[1].replace(/,/g, ""));
    const current = Math.round(target * progress).toLocaleString("en-IN");
    return `${current}+`;
  }

  const rangeMatch = value.match(
    /^\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)\s*$/,
  );
  if (rangeMatch) {
    const startTarget = Number(rangeMatch[1]);
    const endTarget = Number(rangeMatch[2]);
    const startValue = (startTarget * progress).toFixed(
      startTarget % 1 ? 1 : 0,
    );
    const endValue = (endTarget * progress).toFixed(endTarget % 1 ? 1 : 0);
    return `${startValue}-${endValue}`;
  }

  const numberMatch = value.match(/^\s*([\d,]+)\s*$/);
  if (numberMatch) {
    const target = Number(numberMatch[1].replace(/,/g, ""));
    return Math.round(target * progress).toLocaleString("en-IN");
  }

  return value;
};

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [countProgress, setCountProgress] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 1400;
    const startTime = performance.now();
    let rafId = 0;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const nextProgress = Math.min(elapsed / duration, 1);
      setCountProgress(nextProgress);

      if (nextProgress < 1) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    rafId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[550px] flex items-center">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
              {currentSlide.badge}
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              {currentSlide.titleLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-4 max-w-lg">
              {currentSlide.description}
            </p>
            <p className="text-primary-foreground/60 text-sm mb-8 max-w-lg">
              {currentSlide.location}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 gradient-gold text-solar-dark font-heading font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+916353439659"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-heading font-semibold px-6 py-3 rounded-lg hover:border-secondary hover:text-secondary transition-colors"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-gold py-6">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-heading font-extrabold text-solar-dark">
                {formatAnimatedValue(s.value, countProgress)}
              </p>
              <p className="text-sm font-medium text-solar-dark/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            From a small home rooftop to a large industrial power plant — we
            handle everything. Here's what we can do for you.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border group overflow-hidden hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210_29%_15%/0.6)] to-transparent" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-md gradient-gold flex items-center justify-center shadow-lg">
                    <s.icon className="h-4 w-4 text-solar-dark" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-sm mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Gallery */}
      <section className="py-10 bg-muted">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Official franchise partner of Waaree Energies Ltd. Visit our Anand
            showroom to see demo panels, inverters, and accessories in person
            before you buy. We are here to help you make the right choice for
            your solar journey.
          </p>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-border">
            {/* Row 1 - 3 images */}
            <div className="grid grid-cols-3">
              <img
                src="./1_gallery.jpeg"
                alt="Waaree Mission & Vision board"
                className="w-full h-48 object-cover"
              />
              <img
                src="./2_gallery.jpeg"
                alt="Alayna Green Energy showroom signboard"
                className="w-full h-48 object-cover"
              />
              <img
                src="./3_gallery.jpeg"
                alt="Waaree On Grid Inverter display wall"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Row 2 - 3 images */}
            <div className="grid grid-cols-3">
              <img
                src="./4_gallery.jpeg"
                alt="Waaree energy transition display"
                className="w-full h-48 object-cover"
              />
              <img
                src="./5_gallery.jpeg"
                alt="Alayna Waaree authorised channel partner sign"
                className="w-full h-48 object-cover"
              />
              <img
                src="./6_gallery.jpeg"
                alt="Rooftop solar smart investment wall"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Row 3 - 2 images (centered) */}
            <div className="grid grid-cols-2">
              <img
                src="./7_gallery.jpeg"
                alt="Alayna showroom exterior front view"
                className="w-full h-48 object-cover"
              />
              <img
                src="./8_gallery.jpeg"
                alt="Waaree battery energy storage display"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden gradient-solar">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/4" />

            <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
              {/* Image */}
              <div className="w-full md:w-2/5 shrink-0">
                <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-primary-foreground/10">
                  <img
                    src="/awward.png"
                    alt="Alayna Green Energy - Divya Bhaskar Star Award Winner 2024"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 gradient-gold px-3 py-1.5 rounded-full mb-4">
                  <Star className="h-4 w-4 text-solar-dark fill-solar-dark" />
                  <span className="text-xs font-heading font-bold text-solar-dark uppercase tracking-wide">
                    Recognition
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary-foreground mb-3">
                  Divya Bhaskar Star Award Winner 2024
                </h2>
                <p className="text-primary-foreground/75 text-sm md:text-base leading-relaxed mb-2 max-w-lg">
                  Recognized as Charotar's most trusted solar company for
                  excellence in solar energy services across Gujarat. This award
                  reflects the trust of 2500+ families who chose us.
                </p>
                <p className="text-secondary font-heading font-semibold text-sm mb-6 max-w-lg">
                  Awarded by Shri Ramanbhai Solanki
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-center">
                    <p className="text-lg font-heading font-extrabold text-secondary">
                      2024
                    </p>
                    <p className="text-primary-foreground/60 text-xs">
                      Award Year
                    </p>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-center">
                    <p className="text-lg font-heading font-extrabold text-secondary">
                      #1
                    </p>
                    <p className="text-primary-foreground/60 text-xs">
                      In Charotar
                    </p>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-center">
                    <p className="text-lg font-heading font-extrabold text-secondary">
                      2500+
                    </p>
                    <p className="text-primary-foreground/60 text-xs">
                      Happy Families
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">
            Why Us?
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3">
            Why 2500+ Customers Trust Alayna
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            There are many solar companies in Gujarat. Here's what makes us
            different — and why our customers keep recommending us.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 border border-border shadow-sm"
              >
                <item.icon className="h-8 w-8 text-solar-orange mb-3" />
                <h3 className="font-heading font-semibold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3">
            How We Work
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Going solar with us is simple. Here's our step-by-step process from
            your first call to your first unit of free electricity.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative text-center">
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-heading font-extrabold text-solar-dark">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">
            Customer Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Don't take our word for it. Here's what real customers from across
            Gujarat have to say about their experience with us.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-xl p-6 border border-border shadow-sm flex flex-col"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-solar-gold text-solar-gold"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  "{t.text}"
                </p>
                <div className="border-t border-border pt-3">
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {t.location} · {t.system}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">
            Our Partners
          </p>
          <h2 className="text-2xl font-heading font-bold mb-3">
            Companies We Deal With
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-lg mx-auto">
            We only work with India's top solar and electrical brands to ensure
            you get the best quality products with genuine warranties.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((p) => (
              <div key={p.name} className="text-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-28 object-contain mx-auto mb-2"
                />
                <p className="text-muted-foreground text-xs">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-solar py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Reduce Your Electricity Bill?
          </h2>
          <p className="text-primary-foreground/80 mb-3 max-w-lg mx-auto">
            Most of our residential customers save ₹3,000–₹8,000 per month after
            going solar. With government subsidies, your payback period could be
            as low as 3–4 years.
          </p>
          <p className="text-primary-foreground/60 text-sm mb-8">
            Free site survey · No obligation · Transparent pricing
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 gradient-gold text-solar-dark font-heading font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/916353439659?text=Hi%2C%20I%20am%20interested%20in%20solar%20installation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-heading font-semibold px-8 py-3 rounded-lg hover:border-secondary hover:text-secondary transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
