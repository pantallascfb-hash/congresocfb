import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineCpuChip,
  HiOutlineBeaker,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import Aos from "aos";
import Title from "../../Components/Shared/Title";
import { gtmPush } from "../../utils/gtm";

const services = [
  {
    icon: <HiOutlineDevicePhoneMobile className="text-4xl" />,
    title: "Apps a la Medida",
    desc: "Desarrollamos aplicaciones web y móviles 100% personalizadas para tus procesos de negocio. Reemplaza planillas, formularios y controles manuales.",
    features: ["Web y móvil", "UI/UX moderno", "Escalable y seguro"],
  },
  {
    icon: <HiOutlineCpuChip className="text-4xl" />,
    title: "Automatización con IA",
    desc: "Integramos inteligencia artificial para automatizar flujos de trabajo, procesar documentos y optimizar decisiones en tiempo real.",
    features: ["Workflows inteligentes", "Procesamiento NLP", "Integración API"],
  },
  {
    icon: <HiOutlineBeaker className="text-4xl" />,
    title: "QA Engineering",
    desc: "Aseguramos la calidad de tu software con pruebas automatizadas, regresión continua y reportes detallados.",
    features: ["Pruebas automatizadas", "CI/CD", "Reportes en tiempo real"],
  },
  {
    icon: <HiOutlineBuildingOffice2 className="text-4xl" />,
    title: "Sistemas Empresariales",
    desc: "Implementamos sistemas de facturación, inventario, ERP y CRM para digitalizar por completo tu operación.",
    features: ["Facturación electrónica", "Inventarios", "Dashboard en vivo"],
  },
];

const Skill = () => {
  useEffect(() => {
    Aos.init({ once: true, offset: 200, duration: 1000 });
  }, []);

  return (
    <div>
      <Title
        title={"Soluciones"}
        des={
          "Todo lo que necesitas para digitalizar y automatizar tu negocio."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {services.map((s, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="p-8 rounded-2xl border border-emerald-800/20 bg-gradient-to-br from-teal-950/10 to-cyan-950/10 hover:from-teal-950/20 hover:to-cyan-950/20 transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 flex items-center justify-center text-emerald-300 group-hover:text-cyan-300 transition-colors mb-6">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.features.map((f, j) => (
                <span
                  key={j}
                  className="px-3 py-1 text-xs rounded-full border border-teal-600/30 text-emerald-300 bg-teal-950/20"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        className="text-center mt-12"
      >
        <a
          href="https://api.whatsapp.com/send?phone=50255133479&text=Quiero%20automatizar%20con%20IA%20mi%20negocio"
          target="_blank"
          onClick={() => gtmPush("cta_click", { label: "cotiza_soluciones" })}
          className="buttonClass group inline-flex mx-auto !bg-gradient-to-r !from-emerald-600 !to-cyan-600 !border-0 !px-8 !py-3"
        >
          <FaWhatsapp className="text-xl" />
          Cotiza tu solución
          <span className="buttonAnimationColor group-hover:-top-4" />
        </a>
      </div>
    </div>
  );
};

export default Skill;
