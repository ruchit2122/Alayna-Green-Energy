import Layout from "@/components/Layout";
import {
  Award,
  Target,
  Eye,
  Users,
  Calendar,
  TrendingUp,
  Building2,
} from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const milestones = [
  {
    year: "2018",
    event:
      "Company founded in Anand by Tahar Khan with a vision to make solar energy accessible to every household in Charotar.",
  },
  {
    year: "2019",
    event:
      "Became official channel partner of Waaree Energies Ltd. Completed first 100 residential installations.",
  },
  {
    year: "2020",
    event:
      "Expanded to Nadiad, Borsad, and Kheda with dedicated office teams. Crossed 300+ customer milestone.",
  },
  {
    year: "2021",
    event:
      "Partnered with Tata Solar and started handling commercial projects above 50kW capacity.",
  },
  {
    year: "2022",
    event:
      "Opened offices in Petlad, Umreth, and Chotta Udaipur. Started operations in 25+ Gujarat districts.",
  },
  {
    year: "2023",
    event:
      "Became authorized Polycab supplier. Crossed 1,500 installations and ₹5 crore cumulative capacity.",
  },
  {
    year: "2024",
    event:
      "Won Divya Bhaskar Star Award (Charotar YRK). Expanded to 10+ offices and 33 districts across Gujarat.",
  },
];

const values = [
  {
    icon: Users,
    title: "Customer First",
    desc: "Every decision we make starts with one question — will this benefit the customer? We don't upsell, we don't push unnecessary upgrades, and we never compromise on quality to save cost.",
  },
  {
    icon: TrendingUp,
    title: "Transparency",
    desc: "We give you a clear breakdown of costs, savings, subsidy amounts, and payback period before you sign anything. No hidden charges, no surprises.",
  },
  {
    icon: Building2,
    title: "Local Presence",
    desc: "With 10+ offices across Charotar and Gujarat, we are never far from our customers. If something goes wrong, our service team can reach you within 24 hours.",
  },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-solar py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
          About Alayna Green Energy
        </h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          A small team from Anand that grew into one of Charotar's most trusted
          solar companies.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">
            Our Story
          </p>
          <h2 className="text-3xl font-heading font-bold mb-4">
            How It All Started
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Back in 2018, Tahar Khan noticed something — most families in Anand
            and surrounding towns were paying ₹3,000 to ₹10,000 every month in
            electricity bills, and many didn't even know that solar could bring
            that down to almost zero.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            He started Alayna Green Energy with a simple goal: make solar easy
            and affordable for regular families. No confusing jargon, no
            inflated quotes — just honest work and good products. The first year
            was mostly word-of-mouth. One happy customer would tell their
            neighbour, and that neighbour would call us.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Today, we've served over 2,500 customers across 33 districts of
            Gujarat. We are the official channel/franchise partner of Waaree
            Energies Ltd., and we also deal in Tata Solar, Adani Solar panels,
            and Polycab electrical products.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            But the core hasn't changed — we still pick up every phone call, we
            still visit every site personally, and we still treat every 3kW home
            system with the same seriousness as a 100kW factory installation.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img
            src={aboutTeam}
            alt="Alayna Green Energy team at a project site"
            className="w-full h-[450px] object-cover"
          />
        </div>
      </div>
    </section>

    {/* Mission / Vision / Awards */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Target,
            title: "Our Mission",
            text: "To make solar energy simple, affordable, and accessible to every home, shop, and farm in Gujarat. We want to remove the confusion around solar and help people save money while going green.",
          },
          {
            icon: Eye,
            title: "Our Vision",
            text: "To be the first name people think of when they think of solar in Gujarat. We want every district, every taluka to have access to honest, high-quality solar solutions through our network.",
          },
          {
            icon: Award,
            title: "Divya Bhaskar Star Award 2024",
            text: "In 2024, we were honored with the Divya Bhaskar Star Award (Charotar YRK) for outstanding contribution to solar energy adoption. This award was a recognition of the trust our 2,500+ customers have placed in us.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-card rounded-xl p-8 shadow-md border border-border text-center"
          >
            <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
              <item.icon className="h-7 w-7 text-solar-dark" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Our Values */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">
          What We Stand For
        </p>
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col items-start">
              <v.icon className="h-8 w-8 text-solar-orange mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">
                {v.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">
          Our Journey
        </p>
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Key Milestones
        </h2>
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex gap-6 relative">
              {/* Line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full gradient-solar flex items-center justify-center shrink-0 z-10">
                  <Calendar className="h-4 w-4 text-secondary" />
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-0.5 bg-border flex-1 min-h-[24px]" />
                )}
              </div>
              <div className="pb-8">
                <p className="font-heading font-bold text-lg text-primary">
                  {m.year}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {m.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Director */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">
          Leadership
        </p>
        <h2 className="text-2xl font-heading font-bold mb-2">Tahar Khan</h2>
        <p className="text-muted-foreground font-heading text-sm mb-4">
          Founder & Managing Director
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Tahar Khan started Alayna Green Energy in 2018 with a belief that
          solar energy shouldn't be complicated or expensive. With a hands-on
          approach and deep understanding of the local market, he built the
          company from a one-person operation into a 10+ office network serving
          all of Gujarat.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          He personally oversees large commercial projects and is known among
          customers for being accessible — you can call him directly, and he
          will answer. Under his leadership, the company has partnered with
          Waaree, Tata, Adani, and Polycab, and has won the Divya Bhaskar Star
          Award 2024 for excellence in solar energy.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;
