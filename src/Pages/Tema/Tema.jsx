import { useEffect, useRef } from "react";

const Tema = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".tema-animate").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in-up");
              }, i * 120);
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
      <div className="max-w-4xl mx-auto text-center">
        <div className="tema-animate opacity-0 mb-8">
          <span className="eyebrow bg-gold/8 text-gold/70 border border-gold/10 inline-flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            Tema del Congreso
          </span>
        </div>

        <h2 className="tema-animate opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-[-0.03em] mb-10">
          NO TEMAS,
          <br />
          <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            PEQUEÑO REBAÑO
          </span>
        </h2>

        <div className="tema-animate opacity-0 max-w-2xl mx-auto mb-12">
          <blockquote className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-7xl text-gold/10" style={{ fontFamily: "'Playfair Display', serif" }}>
              &ldquo;
            </div>
            <p className="text-lg md:text-xl text-body-strong italic leading-relaxed pt-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              No temas, rebaño pequeño, porque vuestro Padre ha decidido daros el reino.
            </p>
            <footer className="mt-5 text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">
              — Lucas 12:32 (LBLA)
            </footer>
          </blockquote>
        </div>

        <div className="tema-animate opacity-0 max-w-xl mx-auto">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto mb-10" />
          <p className="text-body text-sm md:text-base">
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
