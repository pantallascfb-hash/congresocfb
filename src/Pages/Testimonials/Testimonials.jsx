import { X } from "lucide-react";
import Title from "../../Components/Shared/Title";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Slider from "react-slick";
const SliderComponent = Slider.default || Slider;
import user from "../../assets/logo/user.png";
import { gtmPush } from "../../utils/gtm";

const defaultFeedbacks = [
  {
    name: "María López",
    overview: "Excelente servicio profesional. Altamente recomendado.",
    createdAt: new Date().toISOString(),
  },
  {
    name: "Carlos Mendoza",
    overview: "La automatización con IA transformó nuestros procesos. Increíble trabajo.",
    createdAt: new Date().toISOString(),
  },
  {
    name: "Ana García",
    overview: "Muy profesional y eficiente. Gran experiencia de trabajo.",
    createdAt: new Date().toISOString(),
  },
  {
    name: "Pedro Ramírez",
    overview: "Calidad excepcional en QA y desarrollo. Superaron nuestras expectativas.",
    createdAt: new Date().toISOString(),
  },
];

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", overview: "" });

  // Load feedbacks from localStorage or default
  useEffect(() => {
    const storedFeedbacks = localStorage.getItem("feedbacks");
    if (storedFeedbacks) {
      setFeedbacks(JSON.parse(storedFeedbacks));
    } else {
      setFeedbacks(defaultFeedbacks);
      localStorage.setItem("feedbacks", JSON.stringify(defaultFeedbacks));
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle feedback submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, overview } = formData;
    if (!name || !overview) {
      toast.warn("Por favor completa todos los campos.");
      return;
    }

    const newFeedback = {
      name,
      overview,
      createdAt: new Date().toISOString(),
    };

    gtmPush("form_submit", { label: "testimonio_enviado" });
    const updatedFeedbacks = [newFeedback, ...feedbacks].slice(0, 4);
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));

    toast.success("Gracias por tu opinión!", {
      style: {
        background: "linear-gradient(to right, #4b0082, #8a2be2)",
        color: "#fff",
      },
    });

    setFormData({ name: "", overview: "" });
    setOpen(false);
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <Title
        title="Testimonios"
        des="Me encantaría conocer tu opinión. ¡Deja tu feedback honesto!"
      />

      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-[#1a0e25]/80 border border-teal-600/30 shadow-xl shadow-emerald-800/20 rounded-xl max-w-xl w-full p-6 space-y-4 relative backdrop-blur-md"
          >
            <button
              onClick={() => setOpen(false)}
              type="button"
              className="btn btn-sm btn-circle bg-teal-900/50 text-white absolute right-3 top-3"
            >
              <X size={18} />
            </button>
            <h2 className="text-2xl md:text-3xl lg:text-4xl pb-4 lg:pb-6 font-bold text-emerald-300 text-center mb-2">
              Deja tu opinión
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-transparent border border-emerald-600/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <textarea
              name="overview"
              rows="4"
              placeholder="Tu Opinión..."
              value={formData.overview}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-transparent border border-emerald-600/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <div className="flex justify-center">
              <button type="submit" className="buttonClass group">
                Enviar Opinión
                <span className="buttonAnimationColor"></span>
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-8">
        <SliderComponent {...sliderSettings}>
          {feedbacks.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={index}
              className="px-3 py-6"
            >
              <div className="bg-[#1d1128]/20 rounded-2xl border border-emerald-800/30 shadow-lg p-6 text-center min-h-[220px] min-w-[380px] transition hover:scale-[1.02] duration-300">
                <img
                  src={user}
                  alt="User"
                  className="w-14 h-14 rounded-full border-2 border-emerald-400 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-300">
                  {item.overview?.slice(0, 120)}
                </p>
                
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </SliderComponent>
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex justify-center mt-12"
      >
        <button onClick={() => { gtmPush("cta_click", { label: "deja_opinion_testimonios" }); setOpen(true); }} className="buttonClass group">
          Deja tu opinión
          <span className="buttonAnimationColor group-hover:-top-4"></span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
