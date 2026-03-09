import Layout from "@/components/Layout";
import {
  MapPin,
  CheckCircle2,
  Building,
  Home,
  Factory,
  Tractor,
} from "lucide-react";
import workImage from "@/assets/work-solar.jpg";

const locations = [
  "Ahmedabad", "Amreli", "Anand", "Aravali", "Banaskantha", "Bharuch",
  "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang",
  "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh",
  "Kachchh (Kutch)", "Kheda", "Mahisagar", "Mehsana", "Morbi", "Narmada",
  "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha",
  "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad",
];

const projectTypes = [
  {
    icon: Home,
    title: "Residential Projects",
    count: "900+",
    desc: "Home rooftop systems from 1kW to 10kW. Most of our customers are families in Anand, Nadiad, Kheda, and surrounding towns who wanted to eliminate their monthly electricity bills.",
  },
  {
    icon: Building,
    title: "Commercial Projects",
    count: "250+",
    desc: "Solar systems for shops, offices, hospitals, schools, and hotels ranging from 10kW to 100kW. We've helped businesses significantly reduce their operating costs.",
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    count: "100+",
    desc: "Large-scale installations for factories, warehouses, and manufacturing units. These projects typically range from 50kW to 500kW and involve detailed structural assessment.",
  },
  {
    icon: Tractor,
    title: "Agricultural Projects",
    count: "50+",
    desc: "Ground-mounted solar for farms and agricultural pump systems. Many farmers in Gujarat have benefited from solar-powered irrigation, reducing their dependency on grid electricity.",
  },
];

const highlights = [
  "33 districts of Gujarat covered",
  "2,500+ installations completed",
  "5-6 MW cumulative capacity delivered",
  "Average installation time: 3-5 days",
  "Net metering completion rate: 100%",
  "Customer satisfaction rate: 98%+",
];

const Work = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center">
      <img
        src={workImage}
        alt="Solar panel installation by Alayna team"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero-overlay" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
          Our Work & Experience
        </h1>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
          Over 2,500 installations. 33 districts. 5-6 MW capacity. Here's a
          closer look at what we've built.
        </p>
      </div>
    </section>

    {/* Experience */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">
          Our Track Record
        </p>
        <h2 className="text-3xl font-heading font-bold mb-6 text-center">
          Work Experience
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Since 2018, we have served over 2,500 customers across Gujarat — from
          small 2kW home rooftop systems in Anand to 200kW industrial
          installations in Ahmedabad. Every project we take on goes through the
          same process: proper site survey, honest quoting, clean installation,
          and reliable after-sales support.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our installation team is fully trained in safety protocols, proper
          earthing, and wiring standards. We don't subcontract our work to
          random electricians — our own team handles every project from start to
          finish.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          What sets us apart is our completion rate. Every project we've started
          has been delivered on time, and we have a 100% net metering completion
          rate. We don't leave a project half-done — that's a promise we've kept
          since day one.
        </p>
      </div>
    </section>

    {/* Project Types */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">
          Project Categories
        </p>
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">
          Types of Projects We Handle
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projectTypes.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-xl p-7 border border-border shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <p.icon className="h-6 w-6 text-solar-dark" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-heading font-semibold text-lg">
                      {p.title}
                    </h3>
                    <span className="text-secondary font-heading font-bold text-sm">
                      {p.count}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Key Highlights */}
    <section className="py-16 gradient-solar">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-heading font-bold text-primary-foreground mb-8">
          Key Highlights
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {highlights.map((h) => (
            <div
              key={h}
              className="flex items-center gap-2 text-primary-foreground/90 text-sm font-medium"
            >
              <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
              {h}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Places of Operation */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">
          Coverage
        </p>
        <h2 className="text-3xl font-heading font-bold mb-3 text-center">
          Places of Operation in Gujarat
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto text-sm">
          We operate across all 33 districts of Gujarat. No matter where you are
          in the state, our team can reach you for survey and installation.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {locations.map((loc) => (
            <div
              key={loc}
              className="flex items-center gap-2 bg-card rounded-lg px-4 py-3 text-sm border border-border shadow-sm"
            >
              <MapPin className="h-4 w-4 text-solar-orange shrink-0" />
              {loc}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Office Locations */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">
          Our Presence
        </p>
        <h2 className="text-3xl font-heading font-bold mb-3 text-center">
          Office Locations
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-lg mx-auto text-sm">
          With 10+ dedicated offices, we ensure quick response times and local
          support for our customers.
        </p>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-border">
          <img
            src="./office_location.png"
            alt="Alayna Green Energy office locations"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Work;