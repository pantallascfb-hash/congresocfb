import { useEffect, useRef } from "react";

const KeyIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <defs>
      <linearGradient id="keyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C89C3D" />
        <stop offset="50%" stopColor="#E8C97A" />
        <stop offset="100%" stopColor="#C89C3D" />
      </linearGradient>
      <filter id="keyGlow">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#keyGlow)" opacity="0.85">
      <circle cx="65" cy="70" r="28" stroke="url(#keyGrad)" strokeWidth="4" fill="none" />
      <circle cx="65" cy="70" r="16" stroke="url(#keyGrad)" strokeWidth="2.5" fill="none" opacity="0.5" />
      <path d="M93 70 L155 70" stroke="url(#keyGrad)" strokeWidth="4" strokeLinecap="round" />
      <path d="M130 70 L130 90" stroke="url(#keyGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M145 70 L145 85" stroke="url(#keyGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M155 70 L155 82" stroke="url(#keyGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="65" cy="70" r="3.5" fill="url(#keyGrad)" />
    </g>
  </svg>
);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = heroRef.current?.querySelectorAll(".hero-animate");
    els?.forEach((el) => observer.observe(el));
    return () => els?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-10">
            <div className="hero-animate opacity-0 delay-100">
              <span className="eyebrow bg-gold/10 text-gold border border-gold/15 inline-flex items-center gap-2">
                <img src="/logo-cfb.png" alt="CFB" className="h-4 w-auto" />
                Iglesia CFB · Agosto 2026
              </span>
            </div>

            <div className="hero-animate opacity-0 delay-200">
              <p className="text-gold/80 text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Congreso
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-white leading-[0.85] tracking-[-0.03em]">
                LA LLAVE
                <br />
                <span className="flex items-baseline gap-3 lg:gap-4">
                  DE
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                      DAVID
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-gold/60 via-gold-light/80 to-gold/60" />
                  </span>
                </span>
              </h1>
              <p className="text-white/15 text-4xl md:text-5xl font-light mt-3 tracking-[-0.02em]" style={{ fontFamily: "'Playfair Display', serif" }}>
                2026
              </p>
            </div>

            <div className="hero-animate opacity-0 delay-300">
              <p className="text-body-strong text-base md:text-lg">
                El rebaño del Padre
              </p>
            </div>

            <div className="hero-animate opacity-0 delay-400 flex flex-wrap items-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=50231520285&text=Hola%2C%20quiero%20asistir%20al%20Congreso%20la%20Llave%20de%20David"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center gap-3 !px-8 !py-4 !text-base"
              >
                Reservar mi Lugar
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-all duration-500 group-hover:translate-x-1 group-hover:scale-105">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="hero-animate opacity-0 delay-500 flex flex-wrap items-center gap-5 text-xs text-white/30">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold/60" />
                2 días de conferencias
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold/60" />
                Alabanza y oración
              </span>

            </div>
          </div>

          {/* Right — Key card */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="hero-animate opacity-0 delay-300 relative w-full max-w-md">
              {/* Double-bezel card */}
              <div className="double-bezel rounded-[2rem] p-2">
                <div className="double-bezel-inner rounded-[calc(2rem-0.25rem)] aspect-[4/5] relative overflow-hidden">
                  {/* Sheep image */}
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=800&q=80"
                      alt="Ovejas en pradera al atardecer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/40 to-navy-deep/80" />
                  </div>

                  {/* Decorative rings */}
                  <div className="absolute top-8 right-8 w-28 h-28 border border-gold/10 rounded-full" />
                  <div className="absolute top-12 right-12 w-20 h-20 border border-gold/5 rounded-full" />

                  {/* Key */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 md:w-48 md:h-48 animate-float">
                      <KeyIllustration />
                    </div>
                  </div>

                  {/* Bottom text */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                    <p className="text-white/25 text-[10px] tracking-[0.4em] uppercase">
                      El rebaño del Padre
                    </p>
                    <p className="text-white/10 text-[9px] tracking-widest mt-1">
                      Lucas 12:32
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating date badge */}
              <div className="absolute -bottom-5 -left-5 double-bezel rounded-2xl px-5 py-3 animate-fade-in-up delay-700 opacity-0">
                <p className="text-white/40 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Próximamente
                </p>
                <p className="text-gold text-base font-bold tracking-tight">28–29 Agosto</p>
              </div>

              {/* Floating verse */}
              <div className="absolute -top-4 -right-4 double-bezel rounded-2xl px-5 py-3 hidden md:block animate-fade-in-up delay-800 opacity-0">
                <p className="text-white/35 text-[11px] italic max-w-[160px] leading-relaxed">
                  "No temas, rebaño pequeño"
                </p>
                <p className="text-gold/60 text-[9px] font-semibold mt-1 tracking-wider">
                  Lucas 12:32
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
