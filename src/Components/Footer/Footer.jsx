import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/comunidadesdeformacionbiblicacentral/" },
  { icon: FaYoutube, label: "YouTube", href: "http://youtube.com/@iglesiacfbcentral" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/iglesiacfb/" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=50231520285&text=Hola%2C%20quiero%20asistir%20al%20Congreso%20la%20Llave%20de%20David" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5 pb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo-cfb.png" alt="Iglesia CFB" className="h-10 w-auto" />
              <h2 className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                La Llave de <span className="text-gold">David</span>
              </h2>
            </div>
            <p className="text-xs text-white/25 leading-relaxed max-w-xs">
              Congreso 2026 — Iglesia CFB. Dos días para encontrarnos con el Padre.
            </p>
          </div>

          {/* Event info */}
          <div className="space-y-3">
            <h3 className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Evento
            </h3>
            <p className="text-xs text-white/30">Viernes 28 Agosto — 7:00 PM a 9:30 PM</p>
            <p className="text-xs text-white/30">Sábado 29 Agosto — 4:30 PM a 8:00 PM</p>
            <p className="text-xs text-white/20 mt-3 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              "No temas, rebaño pequeño, porque vuestro Padre ha decidido daros el reino."
            </p>
            <p className="text-[10px] text-gold/40 font-semibold tracking-wider">Lucas 12:32</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Redes Sociales
            </h3>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/25 hover:text-gold hover:bg-gold/5 hover:border-gold/15 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/15">
            © {new Date().getFullYear()} Congreso La Llave de David — Iglesia CFB
          </p>
          <div className="flex items-center gap-2 text-[10px] text-white/15">
            <span className="w-1 h-1 rounded-full bg-gold/30" />
            Hecho con amor
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
