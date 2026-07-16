import { useEffect, useRef } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const WAZE_URL =
  "https://www.waze.com/es-419/live-map/directions/iglesia-cfb-7a-calle-9-80-ciudad-san-cristobal,-zona-8,-mixco?to=place.w.176554130.1765606836.4170674";

const Ubicacion = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".ubic-animate").forEach((el, i) => {
              setTimeout(() => el.classList.add("animate-fade-in-up"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="ubic-animate opacity-0 eyebrow bg-navy/5 text-navy/50 border border-navy/8 inline-flex items-center gap-2 mb-8">
            <MapPin size={12} />
            Ubicación
          </span>
          <h2 className="ubic-animate opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy tracking-[-0.03em]">
            Encuéntranos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 ubic-animate opacity-0">
            <div className="double-bezel rounded-[2rem] p-2 h-[400px]">
              <div className="double-bezel-inner rounded-[calc(2rem-0.25rem)] overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2!2d-90.6349!3d14.4874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a47d0e5d5e5d%3A0x7e5fdedd5b13e74f!2sComunidades%20de%20Formaci%C3%B3n%20B%C3%ADblica!5e0!3m2!1ses!2sgt!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Iglesia CFB"
                />
              </div>
            </div>
          </div>

          {/* Info card */}
          <div className="ubic-animate opacity-0">
            <div className="double-bezel rounded-[2rem] p-2 h-full">
              <div className="double-bezel-inner rounded-[calc(2rem-0.25rem)] p-8 h-full flex flex-col">
                <div className="space-y-6 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold-dark">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-navy font-bold text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Iglesia CFB
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      7a Calle 9-80, Ciudad San Cristóbal
                      <br />
                      Zona 8, Mixco
                    </p>
                  </div>

                  <a
                    href={WAZE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-3 w-full justify-center !rounded-2xl"
                  >
                    <Navigation size={15} strokeWidth={1.5} />
                    Cómo llegar
                    <ExternalLink size={12} className="opacity-50" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
