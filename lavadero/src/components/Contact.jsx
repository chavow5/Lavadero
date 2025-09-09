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
    Tipo de vehículo: ${form.vehiculo}
    Ubicación: ${form.ubicacion || "No proporcionada"}
    Mensaje: ${form.mensaje}`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  const obtenerUbicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setForm((prev) => ({
            ...prev,
            ubicacion: `https://www.google.com/maps?q=${lat},${lon}`,
          }));
        },
        () => {
          alert("No pudimos acceder a tu ubicación.");
        }
      );
    } else {
      alert("Tu navegador no soporta geolocalización.");
    }
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
        <label className="block text-sm font-medium text-gray-200 mb-1">
            Nombre
          </label>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full p-2 rounded-lg text-white"
          required
        />
        <label className="block text-sm font-medium text-gray-200 mb-1">
            Horario
          </label>
        <input
          type="text"
          name="horario"
          placeholder="Horario reservado"
          value={form.horario}
          onChange={handleChange}
          className="w-full p-2 rounded-lg text-white"
          required
        />
        {/* Tipo de vehículo */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Tipo de vehículo
          </label>
          <select
            name="vehiculo"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-500 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          >
            <option value="">Seleccionar...</option>
            <option value="auto">Auto</option>
            <option value="camioneta">Camioneta</option>
            <option value="moto">Moto</option>
          </select>
        </div>
        {/* Ubicación */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Ubicación
          </label>
          <input
            type="text"
            name="ubicacion"
            value={form.ubicacion}
            onChange={handleChange}
            placeholder="Tu ubicación"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
            readOnly
          />
          <button
            type="button"
            onClick={obtenerUbicacion}
            className="mt-2 w-full bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
          >
            📍 Obtener ubicación actual
          </button>
        </div>

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
