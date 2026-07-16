import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Title from "../../Components/Shared/Title";
import { gtmPush } from "../../utils/gtm";

const user = "zamorag_12";
const domain = "me.com";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Title
        title={"Cotiza tu Proyecto"}
        des={
          "Cuéntanos qué necesitas y te daremos una cotización personalizada en menos de 24 horas."
        }
      />

      <div
        className="max-w-4xl mx-auto mt-8 bg-gradient-to-br from-teal-950/20 to-cyan-950/20 backdrop-blur-md shadow-lg rounded-2xl p-8 md:p-12"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-emerald-300">
              Contáctanos
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Somos <strong className="text-white">Nuxcrew GT</strong>, tu socio ideal automatizando flujos y sistemas de tu negocio. Responde en máximo 24 horas.
            </p>

            <div className="space-y-4">
              <a
                href="https://api.whatsapp.com/send?phone=50255133479&text=Quiero%20automatizar%20con%20IA%20mi%20negocio"
                target="_blank"
                onClick={() => gtmPush("cta_click", { label: "whatsapp_contact_card" })}
                className="flex items-center gap-3 p-4 rounded-xl bg-green-900/20 border border-green-700/30 hover:bg-green-900/30 transition cursor-pointer group"
              >
                <FaWhatsapp className="text-green-400 text-2xl" />
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                </div>
              </a>

              <a
                href={`mailto:${user}@${domain}`}
                onClick={() => gtmPush("cta_click", { label: "email_contact_card" })}
                className="flex items-center gap-3 p-4 rounded-xl bg-teal-900/20 border border-teal-600/30 hover:bg-teal-900/30 transition cursor-pointer group"
              >
                <FaEnvelope className="text-emerald-400 text-xl" />
                <div>
                  <p className="text-white font-medium">Email</p>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-emerald-300">
              ¿Qué necesitas?
            </h3>
            <p className="text-gray-400 text-sm">
              Escríbenos directo a WhatsApp y te cotizamos hoy.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=50255133479&text=Quiero%20automatizar%20con%20IA%20mi%20negocio"
              target="_blank"
              onClick={() => gtmPush("cta_click", { label: "cotizar_whatsapp_contact" })}
              className="buttonClass group w-full justify-center !py-4 !text-lg !bg-gradient-to-r !from-emerald-600 !to-cyan-600 !border-0"
            >
              <FaWhatsapp className="text-2xl" />
                Cotizar por WhatsApp
              <span className="buttonAnimationColor group-hover:-top-4" />
            </a>

            <div className="mt-6 p-4 rounded-xl bg-teal-950/20 border border-emerald-800/20">
              <p className="text-sm text-gray-400">
                <strong className="text-emerald-300">Respuesta ágil:</strong>{" "}
                Te contactamos por WhatsApp en menos de 24 horas con una cotización clara y sin compromiso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
