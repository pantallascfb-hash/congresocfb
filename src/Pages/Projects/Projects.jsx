import { useEffect } from "react";
import Title from "../../Components/Shared/Title";
import Aos from "aos";
import { FaCheckCircle } from "react-icons/fa";

const skills = [
  {
    category: "Desarrollo Full-Stack",
    items: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "APIs REST/GraphQL"],
  },
  {
    category: "Automatización & IA",
    items: ["Python", "LangChain", "Chatbots IA", "Web Scraping", "Workflow Automation", "RPA"],
  },
  {
    category: "QA Engineering",
    items: ["Selenium", "Cypress", "Pruebas E2E", "CI/CD", "Pruebas de carga", "Testing Automatizado"],
  },
  {
    category: "Infraestructura & DevOps",
    items: ["Docker", "Vercel", "AWS", "GitHub Actions", "Bases de Datos SQL/NoSQL", "Linux"],
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ offset: 200 });
  }, []);

  return (
    <div>
      <Title
        title={"Experiencia & Habilidades"}
        des={
          "Más de 12 años de experiencia en Tecnología. Hemos liderado proyectos de software, automatización e IA para empresas en Latinoamérica."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 my-12">
        {skills.map((skill, i) => (
          <div
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-anchor-placement="top-bottom"
            key={skill.category}
            className="rounded-2xl shadow-xl shadow-emerald-400/10 transition-all duration-300 hover:shadow-xl overflow-hidden p-6"
          >
            <h1 className="text-xl lg:text-2xl font-bold py-4 text-transparent bg-clip-text bg-gradient-to-t from-emerald-400 to-cyan-400">
              {skill.category}
            </h1>
            <div className="flex flex-wrap gap-3 mt-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300/10 text-sm text-white/80 bg-cyan-800/10 backdrop-blur-sm"
                >
                  <FaCheckCircle className="text-emerald-400 text-xs shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
