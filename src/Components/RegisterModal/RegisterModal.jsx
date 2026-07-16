import { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle, AlertCircle } from "lucide-react";

const SHEETDB_URL = "https://sheetdb.io/api/v1/jt6pofyzmolri";

const initialForm = { name: "", email: "", phone: "", message: "" };

const RegisterModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef(null);
  const firstInput = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInput.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            Nombre: form.name,
            Correo: form.email,
            Telefono: `+502 ${form.phone}`,
            Mensaje: form.message,
            Fecha: new Date().toLocaleString("es-GT", { timeZone: "America/Guatemala" }),
          },
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setStatus("success");
      setForm(initialForm);
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2500);
    } catch {
      setStatus("error");
      setErrorMsg("Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/40 backdrop-blur-sm animate-fade-in"
      onClick={(e) => e.target === overlayRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Formulario de registro"
    >
      <div className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="relative px-6 pt-6 pb-4 border-b border-navy/5">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy/5 flex items-center justify-center text-navy/40 hover:bg-navy/10 hover:text-navy transition-colors focus-ring"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
          <p className="text-gold-dark text-xs font-bold tracking-[0.2em] uppercase mb-1">Registro</p>
          <h3 className="text-navy text-xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Congreso La Llave de David
          </h3>
          <p className="text-text-muted text-sm mt-1">28–29 Agosto 2026</p>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {status === "success" ? (
            <div className="py-10 text-center space-y-3">
              <CheckCircle size={48} className="mx-auto text-green-500" />
              <p className="text-navy font-bold text-lg">¡Registro exitoso!</p>
              <p className="text-text-muted text-sm">Te esperamos el 28 y 29 de Agosto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Nombre */}
              <div>
                <label htmlFor="reg-name" className="block text-navy/60 text-xs font-semibold tracking-wide uppercase mb-1.5">
                  Nombre completo *
                </label>
                <input
                  ref={firstInput}
                  id="reg-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-surface/60 border border-navy/8 text-navy text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/15 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="reg-email" className="block text-navy/60 text-xs font-semibold tracking-wide uppercase mb-1.5">
                  Correo electrónico *
                </label>
                <input
                  id="reg-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface/60 border border-navy/8 text-navy text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/15 transition-all"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="reg-phone" className="block text-navy/60 text-xs font-semibold tracking-wide uppercase mb-1.5">
                  Teléfono *
                </label>
                <div className="flex items-center">
                  <span className="flex-shrink-0 px-3 py-3 rounded-l-xl bg-navy/5 border border-r-0 border-navy/8 text-navy/40 text-sm font-medium select-none">
                    +502
                  </span>
                  <input
                    id="reg-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0000 0000"
                    pattern="[0-9]{4} ?[0-9]{4}"
                    className="w-full px-4 py-3 rounded-r-xl bg-surface/60 border border-navy/8 text-navy text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/15 transition-all"
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="reg-msg" className="block text-navy/60 text-xs font-semibold tracking-wide uppercase mb-1.5">
                  Mensaje o duda *
                </label>
                <textarea
                  id="reg-msg"
                  name="message"
                  required
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Escribe tu pregunta o mensaje..."
                  className="w-full px-4 py-3 rounded-xl bg-surface/60 border border-navy/8 text-navy text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/15 transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3">
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-primary !rounded-xl !py-3.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Enviar registro
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
