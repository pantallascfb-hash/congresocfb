import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gtmPush } from "../../utils/gtm";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fqkd9nc",
        "template_dkna4ep",
        form.current,
        "uJH1KGbqm6frzkLXJ"
      )
      .then(
        () => {
          gtmPush("form_submit", { label: "contacto_emailjs" });
          toast.success("¡Mensaje enviado con éxito!");
          form.current.reset();
        },
        () => {
          toast.error("Error al enviar el mensaje. Intenta de nuevo.");
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-8 w-[90%] md:w-full mx-auto text-white"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Tu Nombre"
          className="w-full h-11 px-4 rounded-xl border border-cyan-600 bg-transparent focus:bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Tu Correo"
          className="w-full h-10 px-4 rounded-xl border border-cyan-600 bg-transparent focus:bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
          required
        />
        <textarea
          name="message"
          placeholder="Tu Mensaje"
          rows="5"
          className="w-full px-4 py-3 rounded-xl border border-cyan-600 bg-transparent focus:bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
          required
        ></textarea>
        <div className="flex justify-end ">
          <button className="buttonClass group">
            Enviar Mensaje
            <span className="buttonAnimationColor group-hover:-top-4"></span>
          </button>
        </div>
      </form>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Form;
