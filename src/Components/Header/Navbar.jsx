import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const NAV_LINKS = [
  { name: "Inicio", path: "home" },
  { name: "Información", path: "tema" },
  { name: "Agenda", path: "agenda" },
  { name: "Ubicación", path: "ubicacion" },
  { name: "Registro", path: "registro" },
];

const WA_URL = "https://api.whatsapp.com/send?phone=50231520285&text=Hola%2C%20quiero%20asistir%20al%20Congreso%20la%20Llave%20de%20David";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
    setOpen(false);
  };

  return (
    <div className="h-[80px]">
      <nav className="fixed left-0 w-full z-50 transition-all duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
          <div
            className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
              scrolled
                ? "glass-nav"
                : "bg-cream/90 border border-navy/5 md:bg-transparent md:border-transparent"
            }`}
          >
            {/* Logo */}
            <Link
              to="home"
              smooth={true}
              duration={600}
              onSetActive={handleSetActive}
              className="cursor-pointer flex items-center gap-3 focus-ring"
              tabIndex={0}
            >
              <img src="/logo-cfb.png" alt="Iglesia CFB" className="h-10 w-auto" />
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-navy font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                  CFB
                </span>
                <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase">
                  Congreso 2026
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  onSetActive={handleSetActive}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer focus-ring ${
                    activeSection === path
                      ? "bg-navy/8 text-navy font-semibold"
                      : "text-text-muted hover:text-navy hover:bg-navy/5"
                  }`}
                  tabIndex={0}
                >
                  {name}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex btn-primary !py-2.5 !px-6 !text-sm focus-ring"
                tabIndex={0}
              >
                Reservar Lugar
              </a>

              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden w-11 h-11 rounded-full bg-navy/5 flex items-center justify-center text-navy/60 hover:text-navy transition-colors focus-ring"
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                tabIndex={0}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              open ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-3xl p-5" style={{ background: "rgba(253, 251, 247, 0.97)", backdropFilter: "blur(24px)", border: "1px solid rgba(11, 47, 106, 0.08)", boxShadow: "0 8px 32px rgba(11, 47, 106, 0.1)" }}>
              <ul className="space-y-1">
                {NAV_LINKS.map(({ name, path }, i) => (
                  <li
                    key={path}
                    className={`transition-all duration-400 ${
                      open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                    }`}
                    style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
                  >
                    <Link
                      to={path}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      onSetActive={handleSetActive}
                      className={`block px-5 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 cursor-pointer focus-ring ${
                        activeSection === path
                          ? "bg-navy/10 text-navy"
                          : "text-navy/70 hover:text-navy hover:bg-navy/5"
                      }`}
                      tabIndex={0}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
                <li
                  className={`pt-2 transition-all duration-400 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${NAV_LINKS.length * 50}ms` : "0ms" }}
                >
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center btn-primary !rounded-2xl focus-ring"
                    tabIndex={0}
                  >
                    Reservar Lugar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
