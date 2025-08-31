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
  className="relative w-full min-h-screen flex items-center justify-center px-4 text-white bg-cover bg-center"
  style={{ backgroundImage: "url('/img/fondo-lavado.jpg')" }}
>
  {/* Overlay oscuro */}
  {/* <div className="absolute inset-0 bg-black/60"></div> */}

  {/* Contenido encima */}
  <div className="relative z-10 w-full max-w-5xl h-[85vh] sm:h-[90vh] bg-black/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10 flex flex-col">
    <div className="mb-4 text-center">
      <p className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-teal-100 uppercase rounded-full bg-teal-500">
        Reservá tu turno
      </p>
      <h2 className="text-2xl font-bold text-white">Elegí día y horario</h2>
      <p className="mt-2 text-sm text-gray-300">
        Seleccioná un turno de 30 minutos. Después confirmamos por WhatsApp los detalles y la dirección.
      </p>
    </div>

    {/* Calendly ocupa todo el espacio restante */}
    <div className="flex-grow">
      <div className="calendly-inline-widget w-full h-full"
        data-url="https://calendly.com/davidrmrz10/lavaderoadomicilio"
        style={{ minWidth: '320px', width: '100%', height: '100%' }}
      />
    </div>

    <p className="mt-4 text-xs text-gray-400 text-center">
      Si tenés problemas para reservar, escribinos por WhatsApp y te ayudamos. 
     - <a href="https://wa.me/5493804201334" className="text-teal-400 underline">3804201334</a>
    </p>
  </div>
</section>

  );
};

export default Turnos;