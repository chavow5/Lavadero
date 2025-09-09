import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    horario: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviarWhatsApp = () => {
    const telefono = "543804201334"; // Argentina (+54) + número sin 0 ni 15
    const texto = `Hola! Soy ${form.nombre}. Reservé a las ${form.horario}. 
Mensaje: ${form.mensaje}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contacto"
      className="px-4 py-12 mx-auto max-w-xl text-center text-white"
    >
      <h2 className="text-2xl font-bold mb-6">Contacto</h2>
      <div className="mt-8 text-center bg-yellow-500/10 border border-yellow-500 rounded-lg p-4">
        <p className="text-sm sm:text-base text-yellow-300 font-semibold">
          📌 Una vez realizado el turno, por favor confirmá tu horario enviando
          un mensaje a nuestro
          <span className="text-green-400"> WhatsApp</span> para coordinar la
          ubicación.
        </p>
        <p className="mt-2 text-lg font-bold text-green-400">📞 3804201334</p>
      </div>

      {/* Botones redes */}
      <div className="flex justify-center gap-4 mb-8">
        <a
          href="https://wa.me/543804201334"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full shadow-lg"
        >
          <img src="/img/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
          <span>WhatsApp: 3804201334</span>
        </a>

        <a
          href="https://instagram.com/lavaderoadomicilio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full shadow-lg"
        >
          <img src="/img/instagram.svg" alt="Instagram" className="w-5 h-5" />
          <span>@lavaderoadomicilio</span>
        </a>
      </div>

      {/* Formulario */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          enviarWhatsApp();
        }}
        className="bg-black/50 backdrop-blur-sm rounded-xl p-6 shadow-lg space-y-4"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full p-2 rounded-lg text-white"
          required
        />
        <input
          type="text"
          name="horario"
          placeholder="Horario reservado"
          value={form.horario}
          onChange={handleChange}
          className="w-full p-2 rounded-lg text-white"
          required
        />
        <textarea
          name="mensaje"
          placeholder="Escribí tu mensaje..."
          value={form.mensaje}
          onChange={handleChange}
          className="w-full p-2 rounded-lg text-white"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
        >
          Enviar a WhatsApp
        </button>
      </form>
    </section>
  );
}

export default Contact;
