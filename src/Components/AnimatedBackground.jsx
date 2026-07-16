import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const container = bgRef.current;
    if (!container) return;

    for (let i = 0; i < 20; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const isGold = Math.random() > 0.65;
      Object.assign(star.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        top: "50%",
        left: "50%",
        backgroundColor: isGold ? "rgba(184, 137, 46, 0.35)" : "rgba(11, 47, 106, 0.12)",
        opacity: 0,
        pointerEvents: "none",
      });
      container.appendChild(star);

      gsap.set(star, {
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
      });

      gsap.to(star, {
        opacity: Math.random() * 0.2 + 0.04,
        duration: 2,
        delay: Math.random() * 3,
      });

      const animateStar = () => {
        gsap.to(star, {
          duration: Math.random() * 8 + 10,
          x: `+=${Math.random() * 100 - 50}`,
          y: `+=${Math.random() * 100 - 50}`,
          opacity: Math.random() * 0.15 + 0.03,
          ease: "sine.inOut",
          onComplete: animateStar,
        });
      };
      animateStar();
    }
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{
        zIndex: -1,
        background:
          "radial-gradient(ellipse at 20% 10%, rgba(184, 137, 46, 0.03) 0%, transparent 50%), radial-gradient(ellipse at 80% 90%, rgba(11, 47, 106, 0.02) 0%, transparent 50%), linear-gradient(180deg, #FDFBF7 0%, #F8F3EA 50%, #FDFBF7 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(11,47,106,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(184,137,46,0.04), transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(11,47,106,0.025), transparent 70%)" }}
      />
    </div>
  );
};

export default AnimatedBackground;
