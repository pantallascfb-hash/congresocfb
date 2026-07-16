import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-scroll";
import AnimatedBackground from "../../Components/AnimatedBackground";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";

const Main = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="noise-overlay overflow-hidden relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <section className="max-w-7xl w-11/12 mx-auto">
        <Outlet />
      </section>
      <Footer />

      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Link to="home" smooth={true} duration={600}>
          <button
            className="w-12 h-12 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center text-navy/50 hover:text-gold hover:bg-gold/5 hover:border-gold/20 transition-all duration-500 cursor-pointer focus-ring"
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} strokeWidth={1.5} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
