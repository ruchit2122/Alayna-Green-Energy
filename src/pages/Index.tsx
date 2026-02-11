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
import officeImage from "@/assets/office.png";

const stats = [
  { value: "1,300+", label: "Happy Customers" },
  { value: "Since 2018", label: "Years of Trust" },
  { value: "10+", label: "Offices Across Gujarat" },
  { value: "5-6 Cr", label: "Capacity Delivered (MW)" },
];

const services = [
  {
    icon: Sun,
    title: "Rooftop Solar Systems",
    desc: "We design, supply, and install customized rooftop solar systems for homes, shops, factories, and offices. Whether you need a 1kW system for your house or a 100kW setup for your factory, we handle everything from survey to commissioning.",
  },
  {
    icon: Zap,
    title: "Ground-Mounted Solar Plants",
    desc: "For farms and large open lands, we set up ground-mounted solar power plants that maximize energy generation. Our agricultural solar solutions help farmers reduce electricity bills while earning through net metering.",
  },
  {
    icon: Shield,
    title: "Polycab Wires & Inverters",
    desc: "As official suppliers of Polycab electrical products, we provide high-quality DC cables, AC wires, and solar inverters. Every component we use meets Indian safety standards and comes with a manufacturer warranty.",
  },
  {
    icon: Users,
    title: "Consultation & After-Sales",
    desc: "Not sure how solar works? Our team will visit your site, assess your electricity consumption, and suggest the best system size and budget. We also handle government subsidy paperwork and provide lifelong maintenance support.",
  },
];

const partners = [
  { name: "Adani Solar", role: "Panel Supplier", logo: "/Adani.svg" },
  {
    name: "Waaree Energies",
    role: "Official Channel Partner",
    logo: "/waaree.png",
  },
  { name: "Tata Solar", role: "Panel Supplier", logo: "/Tata.png" },
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
    title: "Lifetime Maintenance",
    desc: "Annual cleaning, performance checks, and inverter servicing — we stay with you after installation.",
  },
  {
    icon: Leaf,
    title: "Genuine Products Only",
    desc: "No local or duplicate panels. We only use Tier-1 branded products with 25-year performance warranty.",
  },
  {
    icon: Star,
    title: "1,300+ Happy Families",
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
    desc: "We apply for net metering with UGVCL/MGVCL, get your meter installed, and hand over the system with all documents.",
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

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[550px] flex items-center">
        <img
          src={heroImage}
          alt="Solar panel installation on a rooftop in Gujarat"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
              Official Channel Partner — Waaree Energies Ltd.
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              Switch to Solar.
              <br />
              Save Money.
              <br />
              Go Green.
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-4 max-w-lg">
              We are Alayna Green Energy Pvt. Ltd. — Gujarat's award-winning
              solar company serving 1,300+ homes, businesses, and farms since
              2018.
            </p>
            <p className="text-primary-foreground/60 text-sm mb-8 max-w-lg">
              Based in Anand, Charotar | 10+ offices across Gujarat
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
                {s.value}
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
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card rounded-xl p-7 shadow-md hover:shadow-xl transition-shadow border border-border group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-solar flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <s.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
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
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border max-w-2xl mx-auto">
            <img
              src="./office.png"
              alt="Alayna Green Energy showroom and office interiors"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Award */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">
            Recognition
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3">
            Divya Bhaskar Award Winner
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Recognized as Charotar's most trusted solar company — Divya Bhaskar
            Star Award 2024 winner for excellence in solar energy services
            across Gujarat.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border max-w-2xl mx-auto">
            <img
              src="/awward.png"
              alt="Alayna Green Energy - Divya Bhaskar Star Award Winner 2024"
              className="w-full h-auto object-cover"
            />
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
            Why 1,300+ Customers Trust Alayna
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
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-card rounded-lg px-8 py-5 shadow-sm border border-border text-center min-w-[180px] flex flex-col items-center justify-center"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-12 object-contain mb-2"
                />
                <p className="text-muted-foreground text-xs mt-1">{p.role}</p>
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
