import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="gradient-solar text-primary-foreground">
    <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Brand */}
      <div className="md:col-span-1">
        <div className="flex items-center gap-2 mb-4">
          <img
            src="/logo.png"
            alt="Alayna Green Energy Logo"
            className="h-24 w-24 object-contain"
          />
          <div>
            <span className="block text-[10px] font-heading font-medium text-secondary tracking-widest uppercase -mt-1">
              Green Energy Pvt. Ltd.
            </span>
          </div>
        </div>
        <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
          Gujarat's award-winning solar company. Official channel partner of
          Waaree Energies Ltd. Serving 1,300+ happy customers since 2018.
        </p>
        <a
          href="https://wa.me/916353439659?text=Hi%2C%20I%20am%20interested%20in%20solar%20installation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors font-medium"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Us
        </a>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-heading font-semibold mb-4 text-secondary">
          Pages
        </h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          {[
            { label: "Home", path: "/" },
            { label: "About Us", path: "/about" },
            { label: "Our Work", path: "/work" },
            { label: "Contact", path: "/contact" },
          ].map((l) => (
            <li key={l.path}>
              <Link
                to={l.path}
                className="hover:text-secondary transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-heading font-semibold mb-4 text-secondary">
          Services
        </h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li>Rooftop Solar Systems</li>
          <li>Ground-Mounted Plants</li>
          <li>Polycab Wires & Inverters</li>
          <li>Solar Consultation</li>
          <li>Subsidy Assistance</li>
          <li>Maintenance & AMC</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-heading font-semibold mb-4 text-secondary">
          Contact
        </h4>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
            <span>
              02, Near Capetown Complex, Opp. Bandhan Bank, 100 Ft. Road, Anand
              - 388 001
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-secondary" />
            <span>+91 63534 39659 / +91 85307 15191</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-secondary" />
            <span>Alaynagreens1108@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/60">
        <p>
          © {new Date().getFullYear()} Alayna Green Energy Pvt. Ltd. All rights
          reserved.
        </p>
        <p>
          Made by{" "}
          <a
            href="https://www.jinarthinfotech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors "
          >
            Jinarth Infotech
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
