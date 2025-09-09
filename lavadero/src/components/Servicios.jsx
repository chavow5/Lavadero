export const Servicios = () => {
  return (
    <section
      id="servicios"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-100 uppercase rounded-full bg-teal-500">
          Nuestros Servicios
        </p>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl md:mx-auto drop-shadow-lg">
          Lavados a domicilio para Auto, Moto y Camioneta
        </h2>
        <p className="text-base text-gray-200 md:text-lg">
          Servicio profesional a domicilio: productos de calidad, técnicas
          cuidadosas y opciones según el tipo de vehículo.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Auto */}
        <div className="flex flex-col justify-between p-6 bg-black/40 border border-white/10 rounded-xl shadow-md">
          <div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-8 h-8 text-teal-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12l1.5-4.5h15L21 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="12"
                  width="18"
                  height="6"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-white drop-shadow">
                  Auto
                </h3>
                <p className="text-sm text-gray-300">Compacto / Mediano</p>
              </div>
            </div>

            {/* Precio centrado abajo del título */}
            <div className="mt-4 text-center">
              <div className="inline-flex items-baseline text-3xl font-bold text-white drop-shadow-lg">
                $2.500
              </div>
              <div className="text-sm text-gray-300">Servicio básico</div>
            </div>

            <ul className="mt-6 space-y-2 text-gray-200">
              <li>Lavado exterior a mano</li>
              <li>Secado con microfibra y detallado de llantas</li>
              <li>Limpieza de vidrios y zócalos</li>
              <li>Desplazamiento hasta 10 km incluido</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="#reservar-turno"
              className="inline-block w-full text-center bg-teal-500 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-md shadow-md transition"
            >
              Reservar Turno
            </a>
            <p className="mt-3 text-xs text-gray-400">
              Duración aprox. 45–60 min. Coordinación por WhatsApp.
            </p>
          </div>
        </div>

        {/* Moto */}
        <div className="flex flex-col justify-between p-6 bg-black/40 border border-white/10 rounded-xl shadow-md">
          <div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-8 h-8 text-teal-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12h3l2-4h6l2 4h2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="7"
                  cy="18"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="17"
                  cy="18"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-white drop-shadow">
                  Moto
                </h3>
                <p className="text-sm text-gray-300">
                  Scooter / Motos pequeñas
                </p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <div className="inline-flex items-baseline text-3xl font-bold text-white drop-shadow-lg">
                $1.500
              </div>
              <div className="text-sm text-gray-300">Rápido y eficaz</div>
            </div>

            <ul className="mt-6 space-y-2 text-gray-200">
              <li>Lavado exterior y cuidado de plásticos</li>
              <li>Secado y nutrición de plásticos</li>
              <li>Limpieza de casco (si corresponde)</li>
              <li>Desplazamiento incluido hasta 10 km</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="#reservar-turno"
              className="inline-block w-full text-center bg-teal-500 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-md shadow-md transition"
            >
              Reservar Turno
            </a>
            <p className="mt-3 text-xs text-gray-400">
              Duración aprox. 20–30 min.
            </p>
          </div>
        </div>

        {/* Camioneta */}
        <div className="flex flex-col justify-between p-6 bg-black/40 border border-white/10 rounded-xl shadow-md">
          <div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-8 h-8 text-teal-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 9h13l4 4v3h-2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="7"
                  cy="18"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="17"
                  cy="18"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-white drop-shadow">
                  Camioneta
                </h3>
                <p className="text-sm text-gray-300">4x4 / Pick-up / SUV</p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <div className="inline-flex items-baseline text-3xl font-bold text-white drop-shadow-lg">
                $3.500
              </div>
              <div className="text-sm text-gray-300">Servicio completo</div>
            </div>

            <ul className="mt-6 space-y-2 text-gray-200">
              <li>Lavado exterior a mano + desincrustado</li>
              <li>Secado, limpieza de llantas y plásticos</li>
              <li>Aspirado interior y limpieza de tapizados (básico)</li>
              <li>Desplazamiento hasta 10 km incluido</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="#reservar-turno"
              className="inline-block w-full text-center bg-teal-500 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-md shadow-md transition"
            >
              Reservar Turno
            </a>
            <p className="mt-3 text-xs text-gray-400">
              Duración aprox. 60–90 min. Consultar extras.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-400 text-center max-w-2xl mx-auto">
        Precios orientativos. El precio final puede variar según el estado del
        vehículo y la ubicación. Para servicios especiales o mayor distancia,
        consultanos por WhatsApp.
      </p>
    </section>
  );
};

export default Servicios;
