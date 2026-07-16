import { useEffect, useRef } from "react";

const KeyIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <defs>
      <linearGradient id="keyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B8892E" />
        <stop offset="50%" stopColor="#D4A84A" />
        <stop offset="100%" stopColor="#B8892E" />
      </linearGradient>
      <filter id="keyGlow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#keyGlow)" opacity="0.9">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left */}
          <div className="lg:col-span-6 space-y-8">
            <div className="hero-animate opacity-0 delay-100">
              <span className="eyebrow bg-gold/10 text-gold-dark border border-gold/15 inline-flex items-center gap-2">
                <img src="/logo-cfb.png" alt="CFB" className="h-5 w-auto" />
                Iglesia CFB · Agosto 2026
              </span>
            </div>

            <div className="hero-animate opacity-0 delay-200">
              <p className="text-gold-dark text-sm font-bold tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Congreso
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-navy leading-[0.88] tracking-[-0.02em]">
                LA LLAVE
                <br />
                <span className="flex items-baseline gap-3 lg:gap-4">
                  DE
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-navy via-blue-mid to-navy bg-clip-text text-transparent">
                      DAVID
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold rounded-full" />
                  </span>
                </span>
              </h1>
              <p className="text-navy/20 text-4xl md:text-5xl font-light mt-3 tracking-[-0.01em]" style={{ fontFamily: "'Playfair Display', serif" }}>
                2026
              </p>
            </div>

            <div className="hero-animate opacity-0 delay-300">
              <p className="text-body-strong text-lg md:text-xl">
                El rebaño del Padre
              </p>
            </div>

            <div className="hero-animate opacity-0 delay-400 flex flex-wrap items-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=50231520285&text=Hola%2C%20quiero%20asistir%20al%20Congreso%20la%20Llave%20de%20David"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center gap-3 focus-ring"
                tabIndex={0}
              >
                Reservar mi Lugar
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-all duration-500 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="hero-animate opacity-0 delay-500 flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                2 días de conferencias
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                Alabanza y oración
              </span>
            </div>
          </div>

          {/* Right — Key card */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="hero-animate opacity-0 delay-300 relative w-full max-w-md">
              <div className="double-bezel rounded-[2rem] p-2">
                <div className="double-bezel-inner rounded-[calc(2rem-0.25rem)] aspect-[4/5] relative overflow-hidden bg-cream-warm">
                  {/* Sheep image */}
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=800&q=80"
                      alt="Ovejas en pradera al atardecer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-cream-warm/30 via-transparent to-cream-warm/50" />
                  </div>

                  {/* Decorative rings */}
                  <div className="absolute top-8 right-8 w-28 h-28 border border-gold/15 rounded-full" />
                  <div className="absolute top-12 right-12 w-20 h-20 border border-gold/8 rounded-full" />

                  {/* Key */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 md:w-48 md:h-48 animate-float">
                      <KeyIllustration />
                    </div>
                  </div>

                  {/* Bottom text */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                    <p className="text-navy/30 text-xs tracking-[0.3em] uppercase">
                      El rebaño del Padre
                    </p>
                    <p className="text-navy/15 text-[10px] tracking-widest mt-1">
                      Lucas 12:32
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating date */}
              <div className="absolute -bottom-5 -left-5 double-bezel rounded-2xl px-5 py-3 animate-fade-in-up delay-700 opacity-0">
                <p className="text-text-muted text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Próximamente
                </p>
                <p className="text-gold-dark text-lg font-bold tracking-tight">28–29 Agosto</p>
              </div>

              {/* Floating verse */}
              <div className="absolute -top-4 -right-4 double-bezel rounded-2xl px-5 py-3 hidden md:block animate-fade-in-up delay-800 opacity-0">
                <p className="text-text-muted text-sm italic max-w-[170px] leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "No temas, rebaño pequeño"
                </p>
                <p className="text-gold text-[10px] font-semibold mt-1 tracking-wider">
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
