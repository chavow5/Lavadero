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
          Ofrecemos Lavados a domicilio para Autos, Motos y Camionetas
        </h2>
        <p className="text-base text-gray-200 md:text-lg">
          Servicio profesional a domicilio: productos de calidad, técnicas
          cuidadosas y opciones según el tipo de vehículo.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Moto */}
        <div className="flex flex-col justify-between p-6 bg-black/40 border border-white/10 rounded-xl shadow-md">
          <div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-8 h-8 text-sky-400"
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
                  Motos
                </h3>
                <p className="text-sm text-gray-300">Moto Pequeñas y Grandes</p>
              </div>
            </div>

            <div className="mt-4 text-center relative">
              <div className="relative inline-flex items-baseline text-2xl font-bold px-3 py-1 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
                <span className="bg-gradient-to-r from-sky-400 via-white to-sky-300 bg-clip-text text-transparent animate-water">
                  $6.000
                </span>
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-30"></span>
              </div>
              <div className="text-sm text-gray-300 mt-2">Rápido y eficaz</div>

            </div>

            <ul className="mt-2 mb-2 text-gray-200 text-sm list-disc list-inside">
              <li>Lavado exterior y cuidado de plásticos</li>
              <li>Secado y nutrición de plásticos</li>
              <li>Limpieza de casco (si corresponde)</li>
              <li>Aplicación de cera para mayor brillo</li>
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

        {/* Auto */}
        <div className="flex flex-col justify-between p-6 bg-black/40 border border-white/10 rounded-xl shadow-md">
          <div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-8 h-8 text-sky-400"
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
                  Autos
                </h3>
                <p className="text-sm text-gray-300">Medianos</p>
              </div>
            </div>

            {/* Express */}
            <div className="mt-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-teal-300">Express</span>
                <div className="relative inline-flex items-baseline text-2xl font-bold px-3 py-1 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
                  <span className="bg-gradient-to-r from-sky-400 via-white to-sky-300 bg-clip-text text-transparent animate-water">
                    $8000
                  </span>
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-30"></span>
                </div>
              </div>
              <ul className="mt-2 mb-2 text-gray-200 text-sm list-disc list-inside">
                <li>Lavado exterior a mano</li>
                <li>limpieza de llantas + caucho</li>
                <li>Secado con microfibra</li>
                <li>Limpieza de vidrios</li>
                <li>Aplicación de cera para mayor brillo y cuidado</li>
              </ul>
              <p className="text-xs text-gray-400 mb-2">
                Duración aprox. 30 min.
              </p>
            </div>

            {/* Full */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-yellow-300">Full</span>
                <div className="relative inline-flex items-baseline text-2xl font-bold px-3 py-1 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
                  <span className="bg-gradient-to-r from-sky-400 via-white to-sky-300 bg-clip-text text-transparent animate-water">
                    $12.000
                  </span>
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-30"></span>
                </div>
              </div>
              <ul className="mt-2 mb-2 text-gray-200 text-sm list-disc list-inside">
                <li>Lavado exterior a mano y detallado de llantas</li>
                <li>Secado con microfibra</li>
                <li>Limpieza de vidrios y zócalos</li>
                <li>Aspirado interior básico</li>
                <li>Aplicación de cera para mayor brillo y cuidado </li>
              </ul>
              <p className="text-xs text-gray-400 mb-2">
                Duración aprox. 45–60 min.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="#reservar-turno"
              className="inline-block w-full text-center bg-teal-500 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-md shadow-md transition"
            >
              Reservar Turno
            </a>
            <p className="mt-3 text-xs text-gray-400">
              Coordinación por WhatsApp.
            </p>
          </div>
        </div>

        {/* Camioneta */}
        <div className="flex flex-col justify-between p-6 bg-black/40 border border-white/10 rounded-xl shadow-md">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <svg
                className="w-8 h-8 text-sky-400"
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
                  Camionetas
                </h3>
                <p className="text-sm text-gray-300">4x4 / Pick-up / SUV</p>
              </div>
            </div>

            {/* Express */}
            <div className="mt-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-teal-300">Express</span>
                <div className="relative inline-flex items-baseline text-2xl font-bold px-3 py-1 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
                  <span className="bg-gradient-to-r from-sky-400 via-white to-sky-300 bg-clip-text text-transparent animate-water">
                    $13.000
                  </span>
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-30"></span>
                </div>
              </div>
              <ul className="mt-2 mb-2 text-gray-200 text-sm list-disc list-inside">
                <li>Lavado exterior a mano</li>
                <li>Secado y limpieza de llantas + caucho</li>
                <li>Limpieza de vidrios</li>
                <li>Aplicación de cera para mayor brillo y cuidado</li>
              </ul>
              <p className="text-xs text-gray-400 mb-2">
                Duración aprox. 45 min.
              </p>
            </div>

            {/* Full */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-yellow-300">Full</span>
                <div className="relative inline-flex items-baseline text-2xl font-bold px-3 py-1 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
                  <span className="bg-gradient-to-r from-sky-400 via-white to-sky-300 bg-clip-text text-transparent animate-water">
                    $17.000
                  </span>
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-30"></span>
                </div>
              </div>
              <ul className="mt-2 mb-2 text-gray-200 text-sm list-disc list-inside">
                <li>Lavado exterior a mano</li>
                <li>Secado, limpieza de llantas y plásticos + caucho</li>
                <li>Aspirado y limpieza interior (básico)</li>
                <li>Limpieza de vidrios y zócalos</li>
                <li>Aplicación de cera para mayor brillo y cuidado</li>

              </ul>
              <p className="text-xs text-gray-400 mb-2">
                Duración aprox. 60–90 min.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="#reservar-turno"
              className="inline-block w-full text-center bg-teal-500 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-md shadow-md transition"
            >
              Reservar Turno
            </a>
            <p className="mt-3 text-xs text-gray-400">
              Consultar extras por WhatsApp.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-white-400 text-center max-w-2xl mx-auto">
        Precios orientativos. El precio final puede variar según el estado del
        vehículo y la ubicación. Para servicios especiales o mayor distancia,
        consultanos por WhatsApp.
      </p>
    </section>
  );
};

export default Servicios;
