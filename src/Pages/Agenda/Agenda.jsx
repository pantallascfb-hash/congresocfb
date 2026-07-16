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
              setTimeout(() => el.classList.add("animate-fade-in-up"), i * 160);
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
    <div ref={sectionRef} className="section-padding bg-surface/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 md:mb-16">
          <span className="agenda-animate opacity-0 eyebrow bg-navy/5 text-navy/50 border border-navy/8 inline-flex items-center gap-2 mb-8">
            <Clock size={14} />
            Agenda
          </span>
          <h2 className="agenda-animate opacity-0 text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-[-0.02em] leading-tight">
            Dos días de{" "}
            <span className="bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
              encuentro
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {agendaData.map((item, idx) => (
            <div key={idx} className="agenda-animate opacity-0">
              <div className="double-bezel rounded-[2rem] p-2 h-full hover:shadow-lg transition-shadow duration-500">
                <div className="double-bezel-inner rounded-[calc(2rem-0.25rem)] overflow-hidden h-full">
                  <div
                    className={`px-6 md:px-8 py-6 md:py-8 ${
                      item.accent
                        ? "bg-gradient-to-br from-gold/10 via-gold/5 to-transparent"
                        : "bg-gradient-to-br from-navy/5 via-navy/2 to-transparent"
                    }`}
                  >
                    <p className="text-text-muted text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                      {item.day}
                    </p>
                    <p className={`text-3xl md:text-4xl font-black tracking-[-0.02em] ${item.accent ? "text-gold-dark" : "text-navy"}`}>
                      {item.date}
                    </p>
                  </div>

                  <div className="p-6 md:p-8 space-y-4 md:space-y-5">
                    <div className="flex items-center gap-2 text-text-muted">
                      <Clock size={16} strokeWidth={1.5} />
                      <span className="text-sm font-medium tracking-wide">{item.time}</span>
                    </div>

                    <div className="space-y-2">
                      {item.items.map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-surface/60 hover:bg-surface transition-colors duration-300"
                        >
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              item.accent ? "bg-gold/10 text-gold-dark" : "bg-navy/5 text-navy/40"
                            }`}
                          >
                            <Icon size={18} strokeWidth={1.5} />
                          </div>
                          <span className="text-navy/70 text-base font-medium">
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
