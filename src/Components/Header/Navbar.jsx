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
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
    setOpen(false);
  };

  return (
    <div className="h-[88px]">
      <nav className="fixed left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              scrolled
                ? "glass-nav shadow-2xl shadow-black/30"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <Link
              to="home"
              smooth={true}
              duration={600}
              onSetActive={handleSetActive}
              className="cursor-pointer flex items-center gap-3"
            >
              <img src="/logo-cfb.png" alt="CFB" className="h-9 w-auto" />
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-white font-bold text-sm tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  CFB
                </span>
                <span className="text-gold/70 text-[9px] font-semibold tracking-[0.2em] uppercase">
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
                  offset={-88}
                  spy={true}
                  onSetActive={handleSetActive}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer ${
                    activeSection === path
                      ? "bg-gold/10 text-gold"
                      : "text-white/40 hover:text-white/70"
                  }`}
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
                className="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-xs"
              >
                Reservar Lugar
              </a>

              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <div className="glass-nav rounded-3xl p-5">
              <ul className="space-y-1">
                {NAV_LINKS.map(({ name, path }, i) => (
                  <li
                    key={path}
                    className={`transition-all duration-500 ${
                      open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
                  >
                    <Link
                      to={path}
                      smooth={true}
                      duration={600}
                      offset={-88}
                      onSetActive={handleSetActive}
                      className={`block px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                        activeSection === path
                          ? "bg-gold/10 text-gold"
                          : "text-white/50 hover:text-white/80 hover:bg-white/5"
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
                <li
                  className={`pt-2 transition-all duration-500 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${NAV_LINKS.length * 60}ms` : "0ms" }}
                >
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center btn-primary !rounded-2xl"
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
