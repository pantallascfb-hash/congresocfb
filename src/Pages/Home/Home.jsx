import { useState } from "react";
import Hero from "./Banner/Banner";
import Tema from "../Tema/Tema";
import Agenda from "../Agenda/Agenda";
import Destacada from "../Destacada/Destacada";
import Ubicacion from "../Ubicacion/Ubicacion";
import Registro from "../Registro/Registro";
import RegisterModal from "../../Components/RegisterModal/RegisterModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <section id="home" data-section="home">
        <Hero onRegister={() => setIsModalOpen(true)} />
      </section>
      <section id="tema" data-section="tema">
        <Tema />
      </section>
      <section id="agenda" data-section="agenda">
        <Agenda />
      </section>
      <Destacada />
      <section id="ubicacion" data-section="ubicacion">
        <Ubicacion />
      </section>
      <section id="registro" data-section="registro">
        <Registro onRegister={() => setIsModalOpen(true)} />
      </section>
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default Home;
