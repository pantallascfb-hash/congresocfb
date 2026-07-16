import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const bgRef = useRef(null);
  const trailRef = useRef(null);
  const timeouts = useRef([]);

  useEffect(() => {
    const container = trailRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const dot = document.createElement("div");
      const isGold = Math.random() > 0.6;
      const color = isGold
        ? `rgba(200, 156, 61, ${Math.random() * 0.4 + 0.3})`
        : `rgba(30, 93, 184, ${Math.random() * 0.3 + 0.2})`;

      Object.assign(dot.style, {
        position: "absolute",
        width: "3px",
        height: "3px",
        background: color,
        borderRadius: "50%",
        top: `${e.clientY}px`,
        left: `${e.clientX}px`,
        pointerEvents: "none",
        opacity: 0.7,
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        boxShadow: `0 0 6px ${color}, 0 0 12px ${color}`,
        transition: "opacity 0.6s ease-out",
      });

      container.appendChild(dot);

      setTimeout(() => {
        dot.style.opacity = "0";
        setTimeout(() => container.removeChild(dot), 600);
      }, 80);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const container = bgRef.current;
    if (!container) return;

    // Stars
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2 + 0.5;
      const isGold = Math.random() > 0.7;
      Object.assign(star.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        top: "50%",
        left: "50%",
        backgroundColor: isGold ? "#C89C3D" : "rgba(200, 214, 229, 0.8)",
        opacity: 0,
        pointerEvents: "none",
      });
      container.appendChild(star);

      gsap.set(star, {
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200) - (typeof window !== "undefined" ? window.innerWidth / 2 : 600),
        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800) - (typeof window !== "undefined" ? window.innerHeight / 2 : 400),
      });

      gsap.to(star, {
        opacity: Math.random() * 0.4 + 0.1,
        duration: 2,
        delay: Math.random() * 3,
      });

      const animateStar = () => {
        gsap.to(star, {
          duration: Math.random() * 6 + 8,
          x: `+=${Math.random() * 200 - 100}`,
          y: `+=${Math.random() * 200 - 100}`,
          opacity: Math.random() * 0.35 + 0.05,
          ease: "power1.inOut",
          onComplete: animateStar,
        });
      };
      animateStar();
    }

    // Shooting stars — gold streaks
    const createShootingStar = () => {
      const star = document.createElement("div");
      const isGold = Math.random() > 0.5;
      Object.assign(star.style, {
        position: "absolute",
        width: `${Math.random() * 80 + 40}px`,
        height: "1.5px",
        background: isGold
          ? "linear-gradient(90deg, rgba(200,156,61,0.8), transparent)"
          : "linear-gradient(90deg, rgba(200,214,229,0.6), transparent)",
        top: `${Math.random() * 60 + 10}%`,
        left: "-10%",
        opacity: 0.7,
        transform: `rotate(${Math.random() * 20 + 35}deg)`,
        pointerEvents: "none",
      });
      container.appendChild(star);
      gsap.to(star, {
        x: "140vw",
        y: "140vh",
        opacity: 0,
        duration: Math.random() * 1 + 1.2,
        ease: "power2.out",
        onComplete: () => star.remove(),
      });
      const next = setTimeout(createShootingStar, Math.random() * 8000 + 4000);
      timeouts.current.push(next);
    };
    createShootingStar();

    // Floating orbs — navy/gold ambient glow
    for (let i = 0; i < 8; i++) {
      const orb = document.createElement("div");
      const size = Math.random() * 120 + 80;
      const isGold = Math.random() > 0.7;
      Object.assign(orb.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        background: isGold
          ? "radial-gradient(circle, rgba(200,156,61,0.04), transparent)"
          : "radial-gradient(circle, rgba(30,93,184,0.06), transparent)",
        borderRadius: "50%",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        pointerEvents: "none",
        filter: "blur(40px)",
        animation: `float ${Math.random() * 20 + 12}s ease-in-out infinite alternate`,
      });
      container.appendChild(orb);
    }

    return () => timeouts.current.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* Background container */}
      <div
        ref={bgRef}
        className="fixed top-0 left-0 w-screen h-screen -z-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(30, 93, 184, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(200, 156, 61, 0.03) 0%, transparent 50%), linear-gradient(180deg, #0c1629 0%, #101e3a 50%, #0c1629 100%)",
        }}
      >
        {/* Aurora */}
        <div className="absolute w-full h-full mix-blend-screen overflow-hidden">
          <div
            className="absolute w-[200%] h-[200%] opacity-[0.04] blur-3xl"
            style={{
              background: "linear-gradient(135deg, #0B2F6A, #1E5DB8, #C89C3D)",
              animation: "aurora 60s linear infinite",
            }}
          />
        </div>

        {/* Nebula */}
        <div
          className="absolute w-full h-full blur-2xl"
          style={{
            background: "radial-gradient(circle at center, rgba(200,214,229,0.02), transparent 60%)",
            animation: "cloud 45s ease-in-out infinite alternate",
          }}
        />

        {/* Lens flare */}
        <div
          className="absolute w-full h-px blur-3xl opacity-[0.03]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(200,156,61,0.5), transparent)",
            animation: "lensflare 10s linear infinite",
          }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(200,156,61,0.3) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Mouse trail */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
        style={{ zIndex: 9999 }}
      />

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-30px); }
        }
        @keyframes aurora {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes cloud {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        @keyframes lensflare {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
};

export default AnimatedBackground;
