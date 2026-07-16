import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineDocumentText,
  HiOutlineCurrencyDollar,
  HiOutlineShieldExclamation,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";
import Aos from "aos";
import Title from "../../Components/Shared/Title";
import { gtmPush } from "../../utils/gtm";

const problems = [
  {
    icon: <HiOutlineDocumentText className="text-3xl" />,
    title: "Procesos anticuados",
    desc: "Excel, papel y WhatsApp creando caos operacional en tu empresa.",
  },
  {
    icon: <HiOutlineCurrencyDollar className="text-3xl" />,
    title: "Pérdida de tiempo y dinero",
    desc: "Errores e información dispersa que cuestan miles de dólares al año.",
  },
  {
    icon: <HiOutlineShieldExclamation className="text-3xl" />,
    title: "Falta de control",
    desc: "Sobre operaciones críticas y equipos de trabajo.",
  },
  {
    icon: <HiOutlineClock className="text-3xl" />,
    title: "Datos desactualizados",
    desc: "Dificultad para acceder a información en tiempo real.",
  },
  {
    icon: <HiOutlineChartBar className="text-3xl" />,
    title: "Reportes imprecisos",
    desc: "Duplicidad de información y errores constantes en reportes.",
  },
  {
    icon: <HiOutlineArrowTrendingUp className="text-3xl" />,
    title: "Escalabilidad limitada",
    desc: "Imposibilidad de crecer o auditar procesos eficientemente.",
  },
];

const About = () => {
  useEffect(() => {
    Aos.init({ once: true, offset: 200, duration: 1000 });
  }, []);

  return (
    <div>
      <Title
        title={"Problemas que Resolvemos"}
        des={
          "Estos son los problemas más comunes que eliminamos con nuestras soluciones tecnológicas."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {problems.map((p, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="p-6 rounded-2xl border border-emerald-800/20 bg-teal-950/10 hover:bg-teal-950/30 hover:border-emerald-600/40 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 flex items-center justify-center text-emerald-400 group-hover:text-cyan-400 transition-colors mb-4">
              {p.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        className="text-center mt-12"
      >
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          En <span className="text-emerald-400 font-semibold">Nuxcrew GT</span> convertimos esos problemas en soluciones digitales ágiles, seguras y escalables.{" "}
          <strong className="text-white">Tu socio ideal, automatizando flujos y sistemas de tu negocio.</strong>
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=50255133479&text=Quiero%20automatizar%20con%20IA%20mi%20negocio"
          target="_blank"
          onClick={() => gtmPush("cta_click", { label: "cotiza_problemas" })}
          className="buttonClass group inline-flex mx-auto"
        >
          <FaWhatsapp className="text-xl" />
          Cotiza gratis tu proyecto
          <span className="buttonAnimationColor group-hover:-top-4" />
        </a>
      </div>
    </div>
  );
};

export default About;
