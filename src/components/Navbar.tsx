import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Alayna Green Energy Pvt. Ltd."
            className="h-10 w-auto"
          />
          <div>
            <span className="block text-[10px] font-heading font-medium text-secondary tracking-widest uppercase -mt-0">
              Green Energy Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-heading text-sm tracking-wide transition-colors hover:text-orange-400 ${
                  location.pathname === item.path
                    ? "font-bold text-orange-400"
                    : "font-medium text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-navbar-mobile pb-4">
          <ul className="flex flex-col items-center gap-4 pt-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`font-heading text-sm transition-colors hover:text-orange-400 ${
                    location.pathname === item.path
                      ? "font-bold text-orange-400"
                      : "font-medium text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
