export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-md text-white pt-10 pb-6">
      <div className="px-6 mx-auto max-w-screen-xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <a href="/" aria-label="Lavadero" title="Lavadero">
            <span className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-sky-400 via-white to-sky-300 bg-clip-text text-transparent animate-water">
              Lavadero a Domicilio
            </span>
          </a>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-8">
          <a href="#turnos" className="hover:text-sky-400 transition">Turnos</a>
          <a href="#quienes-somos" className="hover:text-sky-400 transition">Quiénes somos</a>
          <a href="#servicios" className="hover:text-sky-400 transition">Servicios</a>
          <a href="#contacto" className="hover:text-sky-400 transition">Contacto</a>
        </div>

        {/* Botón principal */}
        <div className="flex justify-center mb-8">
          <a
            href="#reservar-turno"
            className="bg-teal-500 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition"
          >
            Reservar Turno
          </a>
        </div>

        {/* Contacto */}
        <div className="text-center text-gray-300 mb-6">
          <p className="mb-1">📞 +54 3804 201334</p>
          <p>📧 davidramirezw6@gmail.com</p>
        </div>

        {/* Redes sociales */}
        <div className="text-center text-gray-400 text-sm mb-6">
          <p className="mb-2">🌐 Redes sociales en construcción 🚧</p>
          <div className="flex justify-center space-x-4">
            <span className="px-2 py-1 rounded bg-white/10">Facebook</span>
            <span className="px-2 py-1 rounded bg-white/10">Instagram</span>
            <span className="px-2 py-1 rounded bg-white/10">WhatsApp</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} CodeXa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
