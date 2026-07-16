import { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle, AlertCircle } from "lucide-react";

const SHEETDB_URL = "https://sheetdb.io/api/v1/iz1amb4364h0k";

const initialForm = { name: "", email: "", phone: "", message: "" };

const validate = (form) => {
  const e = {};
  if (!form.name.trim()) e.name = "Ingresa tu nombre";
  if (!form.email.trim()) e.email = "Ingresa tu correo";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Correo no válido";
  if (!form.phone.trim()) e.phone = "Ingresa tu teléfono";
  else if (!/^[0-9]{4} ?[0-9]{4}$/.test(form.phone.trim())) e.phone = "Formato: 0000 0000";
  if (!form.message.trim()) e.message = "Escribe tu mensaje";
  return e;
};

const inputBase = "w-full px-4 py-3 rounded-xl bg-surface/60 text-navy text-sm placeholder:text-navy/25 focus:outline-none transition-all";
const inputOk = "border border-navy/8 focus:border-gold/40 focus:ring-2 focus:ring-gold/15";
const inputErr = "border border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100";

const RegisterModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef(null);
  const firstInput = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setForm(initialForm);
      setErrors({});
      setTouched({});
      setStatus("idle");
      setTimeout(() => firstInput.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            Nombre: form.name.trim(),
            Correo: form.email.trim(),
            Telefono: form.phone.replace(/\s/g, ""),
            Mensaje: form.message.trim(),
            Fecha: new Date().toLocaleString("es-GT", { timeZone: "America/Guatemala" }),
          },
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setStatus("success");
      setForm(initialForm);
      setTouched({});
      setTimeout(() => { setStatus("idle"); onClose(); }, 2500);
    } catch {
      setStatus("error");
      setErrorMsg("Hubo un error. Intenta de nuevo.");
    }
  };

  if (!isOpen) return null;

  const field = (name, label, Tag, extra = {}) => {
    const hasErr = touched[name] && errors[name];
    return (
      <div>
        <label htmlFor={`reg-${name}`} className="block text-navy/60 text-xs font-semibold tracking-wide uppercase mb-1.5">
          {label} *
        </label>
        <Tag
          id={`reg-${name}`}
          name={name}
          required
          value={form[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBase} ${hasErr ? inputErr : inputOk}`}
          aria-invalid={hasErr || undefined}
          aria-describedby={hasErr ? `err-${name}` : undefined}
          {...extra}
        />
        {hasErr && (
          <p id={`err-${name}`} className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors[name]}
          </p>
        )}
      </div>
    );
  };

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

        <div className="px-6 py-5">
          {status === "success" ? (
            <div className="py-10 text-center space-y-3">
              <CheckCircle size={48} className="mx-auto text-green-500" />
              <p className="text-navy font-bold text-lg">¡Registro exitoso!</p>
              <p className="text-text-muted text-sm">Te esperamos el 28 y 29 de Agosto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {field("name", "Nombre completo", "input", { type: "text", placeholder: "Tu nombre", ref: firstInput })}
              {field("email", "Correo electrónico", "input", { type: "email", placeholder: "correo@ejemplo.com" })}

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
                    onBlur={handleBlur}
                    placeholder="0000 0000"
                    className={`${inputBase} rounded-r-xl ${touched.phone && errors.phone ? inputErr : inputOk}`}
                    aria-invalid={touched.phone && errors.phone || undefined}
                    aria-describedby={touched.phone && errors.phone ? "err-phone" : undefined}
                  />
                </div>
                {touched.phone && errors.phone && (
                  <p id="err-phone" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.phone}
                  </p>
                )}
              </div>

              {field("message", "Mensaje o duda", "textarea", { rows: 3, placeholder: "Escribe tu pregunta o mensaje...", className: `${inputBase} ${touched.message && errors.message ? inputErr : inputOk} resize-none` })}

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
