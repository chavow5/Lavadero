import { useState } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black/50 backdrop-blur-md fixed w-full z-20">
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            aria-label="Lavadero"
            title="Lavadero"
            className="inline-flex items-center"
          >
            <span className="text-3xl font-bold tracking-wide bg-gradient-to-r from-sky-400 via-white to-sky-300 bg-clip-text text-transparent animate-water">
              Lavadero a Domicilio
            </span>
          </a>

          {/* Links desktop */}
          <ul className="hidden space-x-8 lg:flex">
            <li>
              <a
                href="#aboutus"
                className="text-white hover:text-sky-400 transition"
              >
                Quiénes somos
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="text-white hover:text-sky-400 transition"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#turnos"
                className="text-white hover:text-sky-400 transition"
              >
                Turnos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-white hover:text-sky-400 transition"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="#turnos"
                className="bg-teal-500 hover:bg-sky-700 text-white px-5 py-2 rounded-md shadow-md transition"
              >
                Reservar Turno
              </a>
            </li>
          </ul>

          {/* Botón menú mobile */}
          <div className="lg:hidden">
            <button
              aria-label="Abrir menú"
              className="p-2 text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Menú mobile */}
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full bg-white p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg text-blue-600">
                    Lavadero
                  </span>
                  <button onClick={() => setIsMenuOpen(false)}>
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <nav>
                  <ul className="space-y-4 text-gray-700">
                    <li>
                      <a href="#aboutus">Quiénes somos</a>
                    </li>
                    <li>
                      <a href="#servicios">Servicios</a>
                    </li>
                    <li>
                      <a href="#turnos">Turnos</a>
                    </li>
                    <li>
                      <a href="#contacto">Contacto</a>
                    </li>
                    <li>
                      <a
                        href="#reservar-turno"
                        className="block bg-teal-500 text-white text-center py-2 rounded-md"
                      >
                        Reservar Turno
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
