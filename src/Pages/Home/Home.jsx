import Hero from "./Banner/Banner";
import Tema from "../Tema/Tema";
import Agenda from "../Agenda/Agenda";
import Destacada from "../Destacada/Destacada";
import Ubicacion from "../Ubicacion/Ubicacion";
import Registro from "../Registro/Registro";

const Home = () => {
  return (
    <main>
      <section id="home" data-section="home">
        <Hero />
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
        <Registro />
      </section>
    </main>
  );
};

export default Home;
