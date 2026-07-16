import { useEffect, useRef } from "react";

const Tema = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".tema-animate").forEach((el, i) => {
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
    <div ref={sectionRef} className="section-padding">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="tema-animate opacity-0 mb-8">
          <span className="eyebrow bg-gold/8 text-gold-dark border border-gold/12 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            Tema del Congreso
          </span>
        </div>

        <h2 className="tema-animate opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[0.92] tracking-[-0.02em] mb-10">
          NO TEMAS,
          <br />
          <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark bg-clip-text text-transparent">
            PEQUEÑO REBAÑO
          </span>
        </h2>

        <div className="tema-animate opacity-0 max-w-2xl mx-auto mb-12">
          <blockquote className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-gold/20" style={{ fontFamily: "'Playfair Display', serif" }}>
              &ldquo;
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-navy italic leading-relaxed pt-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              No temas, rebaño pequeño, porque vuestro Padre ha decidido daros el reino.
            </p>
            <footer className="mt-6 text-gold-dark text-sm font-semibold tracking-[0.15em]">
              — Lucas 12:32 (LBLA)
            </footer>
          </blockquote>
        </div>

        <div className="tema-animate opacity-0 max-w-xl mx-auto">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto mb-10" />
          <p className="text-body">
            Dios llama a su pueblo a vivir confiando en Él, aun en tiempos difíciles.
            Este congreso será un tiempo para fortalecer nuestra fe y recordar que
            pertenecemos al rebaño del Padre.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tema;
