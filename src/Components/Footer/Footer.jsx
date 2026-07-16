import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/comunidadesdeformacionbiblicacentral/" },
  { icon: FaYoutube, label: "YouTube", href: "http://youtube.com/@iglesiacfbcentral" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/iglesiacfb/" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=50231520285&text=Hola%2C%20quiero%20asistir%20al%20Congreso%20la%20Llave%20de%20David" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-navy/10 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-b border-white/8 pb-10 md:pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo-cfb.png" alt="Iglesia CFB" className="h-10 w-auto" />
              <h2 className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                La Llave de <span className="text-gold">David</span>
              </h2>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Congreso 2026 — Iglesia CFB. Dos días para encontrarnos con el Padre.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Evento
            </h3>
            <p className="text-sm text-white/55">Viernes 28 Agosto — 7:00 PM a 9:30 PM</p>
            <p className="text-sm text-white/55">Sábado 29 Agosto — 4:30 PM a 8:00 PM</p>
            <p className="text-sm text-white/35 mt-3 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              "No temas, rebaño pequeño, porque vuestro Padre ha decidido daros el reino."
            </p>
            <p className="text-xs text-gold/60 font-semibold tracking-wider">Lucas 12:32</p>
          </div>

          <div>
            <h3 className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Redes Sociales
            </h3>
            <div className="flex gap-3 sm:gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-white/[0.08] border border-white/12 flex items-center justify-center text-white/70 hover:text-gold hover:bg-gold/10 hover:border-gold/25 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Congreso La Llave de David — Iglesia CFB
          </p>
          <div className="flex items-center gap-2 text-xs text-white/35">
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            Hecho con amor
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
