export const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md text-white py-6">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            aria-label="Lavadero"
            title="Lavadero"
            className="inline-flex items-center mb-4 lg:mb-0"
          >
            <svg
              className="w-8 text-teal-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
              Lavadero
            </span>
          </a>

          {/* Links */}
          <ul className="flex flex-wrap justify-center space-x-6 text-sm">
            <li>
              <a href="#turnos" className="hover:text-teal-400 transition">
                Turnos
              </a>
            </li>
            <li>
              <a
                href="#quienes-somos"
                className="hover:text-teal-400 transition"
              >
                Quiénes somos
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-teal-400 transition">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-teal-400 transition">
                Contacto
              </a>
            </li>
          </ul>

          {/* Reservar Turno */}
          <a
            href="#reservar-turno"
            className="mt-4 lg:mt-0 bg-teal-500 hover:bg-teal-700 text-white px-5 py-2 rounded-md shadow-md transition"
          >
            Reservar Turno
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Lavadero. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
