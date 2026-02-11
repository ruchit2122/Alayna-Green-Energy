import { useState, FormEvent } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    q: "How much does a solar system cost for my home?",
    a: "A typical 3kW home system costs around ₹1.8–2.2 lakh before subsidy. With the PM Surya Ghar Yojana subsidy of ₹78,000, your net cost comes to around ₹1–1.4 lakh. We provide exact quotes after a free site survey.",
  },
  {
    q: "How much can I save on my electricity bill?",
    a: "Most of our residential customers save 80–100% on their electricity bills. A 3kW system generates about 12–15 units per day, which is enough for most homes. Your payback period is typically 3–4 years.",
  },
  {
    q: "Do you handle the subsidy paperwork?",
    a: "Yes, 100%. We handle the entire PM Surya Ghar Yojana application, documentation, and follow-up with GEDA and your discom. You don't have to visit any office or fill any forms.",
  },
  {
    q: "What warranty do I get?",
    a: "Solar panels come with a 25-year performance warranty from the manufacturer (Waaree/Tata/Adani). Inverters have 5–10 year warranty. We also provide our own 1-year workmanship warranty on installation.",
  },
  {
    q: "Do you provide maintenance after installation?",
    a: "Yes. We offer annual maintenance packages that include panel cleaning, wiring check, inverter health check, and generation report. Our service team can reach most locations within 24 hours.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", systemType: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Our team will contact you within 24 hours." });
    setForm({ name: "", email: "", phone: "", location: "", systemType: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-solar py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Have questions about solar? Want a free quote? We're here to help. Call us, WhatsApp us, or fill out the form below.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-2">Connect with Us</h2>
            <p className="text-muted-foreground text-sm mb-8">
              Our office is open Monday to Saturday, 9 AM to 7 PM. For urgent queries, you can reach us on WhatsApp anytime.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-solar-dark" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Head Office</h4>
                  <p className="text-muted-foreground text-sm">
                    02, Near Capetown Complex,<br />
                    Above Chahat Dental Clinic,<br />
                    Opp. Bandhan Bank,<br />
                    100 Ft. Road, Anand - 388 001, Gujarat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-solar-dark" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+916353439659" className="hover:text-primary transition-colors">+91 63534 39659</a> (Tahar Khan)<br />
                    <a href="tel:+918530715191" className="hover:text-primary transition-colors">+91 85307 15191</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-solar-dark" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:Alaynagreens1108@gmail.com" className="hover:text-primary transition-colors">Alaynagreens1108@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-solar-dark" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Working Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    Monday – Saturday: 9:00 AM – 7:00 PM<br />
                    Sunday: Closed (WhatsApp available)
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/916353439659?text=Hi%2C%20I%20am%20interested%20in%20solar%20installation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-solar text-primary-foreground font-heading font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-xl font-heading font-bold mb-2">Request a Free Quote</h3>
            <p className="text-muted-foreground text-sm mb-6">Fill in your details and we'll get back to you within 24 hours with a customized solar proposal.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rajesh Patel"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="location">City / District *</label>
                  <input
                    id="location"
                    type="text"
                    required
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    placeholder="e.g. Anand"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="systemType">System Type</label>
                  <select
                    id="systemType"
                    value={form.systemType}
                    onChange={(e) => setForm({ ...form, systemType: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select type</option>
                    <option value="residential">Residential (Home)</option>
                    <option value="commercial">Commercial (Shop/Office)</option>
                    <option value="industrial">Industrial (Factory)</option>
                    <option value="agricultural">Agricultural (Farm)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">Your Message / Requirements</label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your electricity bill, roof type, or any specific questions..."
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full gradient-gold text-solar-dark font-heading font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Request Free Quote <Send className="h-4 w-4" />
              </button>
              <p className="text-muted-foreground text-xs text-center">
                No spam. No obligation. We just want to help you go solar.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">Common Questions</p>
          <h2 className="text-3xl font-heading font-bold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-center text-sm mb-10">
            Here are answers to the questions we get asked most often. If your question isn't here, just call or WhatsApp us.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-card rounded-xl border border-border shadow-sm group">
                <summary className="px-6 py-4 cursor-pointer font-heading font-semibold text-sm list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
