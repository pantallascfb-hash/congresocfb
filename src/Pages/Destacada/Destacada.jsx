import { useEffect, useRef } from "react";

const Destacada = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".dest-animate").forEach((el, i) => {
              setTimeout(() => el.classList.add("animate-fade-in-up"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="double-bezel rounded-[2.5rem] overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center justify-center">
          <div className="double-bezel-inner rounded-[calc(2.5rem-0.25rem)] overflow-hidden w-full h-full relative">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=1400&q=80"
                alt="Rebaño de ovejas al atardecer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30" />
            </div>

            {/* Decorative rings */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-12 left-12 w-36 h-36 border border-gold/10 rounded-full" />
              <div className="absolute bottom-12 right-12 w-28 h-28 border border-gold/10 rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-8 py-24 max-w-3xl mx-auto">
              <div className="dest-animate opacity-0 mb-8">
                <span className="eyebrow bg-gold/15 text-gold-light border border-gold/20 inline-flex items-center gap-2">
                  El rebaño del Padre
                </span>
              </div>

              <h2 className="dest-animate opacity-0 text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[0.95] tracking-[-0.02em] mb-8">
                DOS DÍAS PARA
                <br />
                <span className="bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent">
                  ENCONTRARNOS CON EL PADRE
                </span>
              </h2>

              <div className="dest-animate opacity-0 w-12 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-8" />

              <p className="dest-animate opacity-0 text-white/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                Viernes 28 y Sábado 29 de Agosto — Un tiempo de restauración,
                alabanza y comunión con Dios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destacada;
