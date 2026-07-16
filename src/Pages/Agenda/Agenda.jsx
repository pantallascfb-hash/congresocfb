import { useEffect, useRef } from "react";
import { Clock, Music, BookOpen, Heart } from "lucide-react";

const agendaData = [
  {
    day: "Viernes",
    date: "28 Agosto",
    time: "7:00 PM – 9:30 PM",
    accent: true,
    items: [
      { icon: BookOpen, label: "Conferencias" },
      { icon: Music, label: "Alabanza" },
      { icon: Heart, label: "Oración" },
    ],
  },
  {
    day: "Sábado",
    date: "29 Agosto",
    time: "4:30 PM – 8:00 PM",
    accent: false,
    items: [
      { icon: BookOpen, label: "Conferencias" },
      { icon: Music, label: "Ministración" },
    ],
  },
];

const Agenda = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".agenda-animate").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in-up");
              }, i * 180);
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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="agenda-animate opacity-0 eyebrow bg-white/5 text-white/40 border border-white/5 inline-flex items-center gap-2 mb-8">
            <Clock size={12} />
            Agenda
          </span>
          <h2 className="agenda-animate opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-[-0.03em] leading-tight">
            Dos días de{" "}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              encuentro
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {agendaData.map((item, idx) => (
            <div key={idx} className="agenda-animate opacity-0">
              <div className="double-bezel rounded-[2rem] p-2 h-full group hover:scale-[1.01] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <div className="double-bezel-inner rounded-[calc(2rem-0.25rem)] overflow-hidden h-full">
                  {/* Header */}
                  <div
                    className={`px-8 py-7 ${
                      item.accent
                        ? "bg-gradient-to-br from-gold/20 via-gold/10 to-gold/5"
                        : "bg-gradient-to-br from-navy/40 via-blue-mid/10 to-navy/20"
                    }`}
                  >
                    <p className="text-white/40 text-[10px] font-semibold tracking-[0.25em] uppercase mb-2">
                      {item.day}
                    </p>
                    <p className={`text-3xl md:text-4xl font-black tracking-[-0.02em] ${item.accent ? "text-gold" : "text-white"}`}>
                      {item.date}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="p-8 space-y-5">
                    <div className="flex items-center gap-2 text-white/30">
                      <Clock size={14} />
                      <span className="text-xs font-medium tracking-wide">{item.time}</span>
                    </div>

                    <div className="space-y-2">
                      {item.items.map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
                        >
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                              item.accent ? "bg-gold/10 text-gold/70" : "bg-white/5 text-white/30"
                            }`}
                          >
                            <Icon size={15} strokeWidth={1.5} />
                          </div>
                          <span className="text-white/60 text-sm font-medium">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
