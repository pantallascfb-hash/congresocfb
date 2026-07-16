import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Registro = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reg-animate").forEach((el, i) => {
              setTimeout(() => el.classList.add("animate-fade-in-up"), i * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="section-padding bg-surface/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="double-bezel rounded-[2.5rem] p-3">
          <div className="double-bezel-inner rounded-[calc(2.5rem-0.375rem)] p-8 md:p-16 lg:p-20 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
              <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(200,156,61,0.4) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            </div>

            <div className="relative z-10 space-y-8">
              <div className="reg-animate opacity-0">
                <span className="eyebrow bg-gold/8 text-gold-dark border border-gold/12 inline-flex items-center gap-2">
                  Registro
                </span>
              </div>

              <h2 className="reg-animate opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy tracking-[-0.03em] leading-tight">
                ¿Listo para
                <br />
                <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark bg-clip-text text-transparent">
                  asistir?
                </span>
              </h2>

              <p className="reg-animate opacity-0 text-text-muted text-sm md:text-base max-w-md mx-auto leading-relaxed">
                Reserva tu lugar en el Congreso La Llave de David 2026.
                No dejes pasar esta oportunidad de encontrarnos con el Padre.
              </p>

              <div className="reg-animate opacity-0 pt-4">
                <a
                  href="https://api.whatsapp.com/send?phone=50231520285&text=Hola%2C%20quiero%20asistir%20al%20Congreso%20la%20Llave%20de%20David"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group inline-flex items-center gap-3 !px-12 !py-5 !text-lg"
                >
                  QUIERO ASISTIR
                  <span className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center transition-all duration-500 group-hover:translate-x-1 group-hover:scale-105">
                    <ArrowRight size={18} strokeWidth={2} />
                  </span>
                </a>
              </div>

              <p className="reg-animate opacity-0 text-text-muted/40 text-xs">
                Pronto habilitaremos el formulario de registro
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
