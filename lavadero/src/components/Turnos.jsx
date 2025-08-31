import { useEffect } from 'react';

export const Turnos = () => {
  useEffect(() => {
    const src = 'https://assets.calendly.com/assets/external/widget.js';
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="reservar-turno"
      className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-white"
    >
      <div className="max-w-3xl mx-auto bg-black/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
        <div className="mb-4 text-center">
          <p className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-teal-100 uppercase rounded-full bg-teal-500">
            Reservá tu turno
          </p>
          <h2 className="text-2xl font-bold text-white">Elegí día y horario</h2>
          <p className="mt-2 text-sm text-gray-300">
            Seleccioná un turno de 30 minutos. Después confirmamos por WhatsApp los detalles y la dirección.
          </p>
        </div>

        <div className="w-full">
          {/* Contenedor responsivo: altura cambia según tamaño de pantalla */}
          <div className="mx-auto w-full max-w-[900px] h-[700px] sm:h-[600px] md:h-[700px] lg:h-[700px]">
            {/* Calendly inline widget (usa 100% del contenedor; minWidth para evitar colapsos) */}
            <div
              className="calendly-inline-widget w-full h-full"
              data-url="https://calendly.com/davidrmrz10/30min"
              style={{ minWidth: '320px', width: '100%', height: '100%' }}
            />
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-400 text-center">
          Si tenés problemas para reservar, escribinos por WhatsApp y te ayudamos.
        </p>
      </div>
    </section>
  );
};

export default Turnos;