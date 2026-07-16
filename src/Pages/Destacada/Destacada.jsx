const Destacada = () => {
  return (
    <div style={{ padding: "2rem 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            borderRadius: "2.5rem",
            overflow: "hidden",
            minHeight: "420px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            background: "#0B2F6A",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=800&q=80"
            alt="Rebaño de ovejas al atardecer"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(11, 47, 106, 0.5)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
              padding: "6rem 2rem",
              maxWidth: "48rem",
            }}
          >
            <p
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                padding: "0.375rem 1rem",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontWeight: 600,
                background: "rgba(184, 137, 46, 0.2)",
                color: "#D4A84A",
                border: "1px solid rgba(184, 137, 46, 0.25)",
                marginBottom: "2rem",
              }}
            >
              El rebaño del Padre
            </p>

            <h2
              style={{
                fontSize: "clamp(1.875rem, 5vw, 3rem)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}
            >
              DOS DÍAS PARA
              <br />
              <span
                style={{
                  background: "linear-gradient(to right, #D4A84A, #B8892E, #D4A84A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ENCONTRARNOS CON EL PADRE
              </span>
            </h2>

            <div
              style={{
                width: "3rem",
                height: "2px",
                background: "linear-gradient(to right, transparent, rgba(184,137,46,0.5), transparent)",
                margin: "0 auto 2rem",
              }}
            />

            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "1rem",
                maxWidth: "32rem",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Viernes 28 y Sábado 29 de Agosto — Un tiempo de restauración,
              alabanza y comunión con Dios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destacada;
