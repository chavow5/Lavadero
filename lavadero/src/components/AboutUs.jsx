export const Aboutus = () => {
  return (
    <div
      id="aboutus"
      className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-8 lg:flex-row md:px-8 lg:max-w-screen-xl"
    >
      <div className="pt-8 mb-12 lg:mb-0 lg:pt-16 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-100 uppercase rounded-full bg-sky-400">
              Quienes somos
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Hola, Mi nombre es David
            <br className="hidden md:block" /> y este es mi emprendimiento
            🚗🧽💦{" "}
            <span className="inline-block bg-gradient-to-r from-sky-400 via-white to-sky-300 bg-clip-text text-transparent animate-water">
              un Lavadero a Domicilio
            </span>
          </h2>
          <p className="text-base text-gray-200 md:text-lg">
            Todo empezó como una solución para mi familia y amigos, y hoy quiero
            compartirlo con vos. Mientras algunos estan ocupados en alguna tarea o en un trabajo o en hora libre, yo
            me dedico a limpiar los vehiculos para ustedes. Ofreciendo algunos servicios de
            limpieza, utilizando productos profesionales ytécnicas avanzadas para dejar tu vehículo 
            impecable sin salir de casa o del trabajo.
          </p>
          <br />
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Por qué hago esto?
          </h3>
          <p className="text-base text-gray-200 md:text-lg">
            Porque en un lavadero comun sentía que perdía tiempo esperando o me aburria. 
            Con los lavados a domicilio, ofrezco una solución
            práctica para que no tengas que interrumpir tu día ni desperdiciar
            horas en un lavadero. <br />
             Mi objetivo es brindarte comodidad y calidad,
            mientras aprovechas tu tiempo al máximo.
          </p>
        </div>
        {/* Botones */}
        {/* <div className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-500 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </a>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-300 hover:text-teal-500"
          >
            Learn more
          </a>
        </div> */}
      </div>
      <div className="mt-6 md:mt-12 lg:mt-20 flex justify-center">
        <img
          src="/img/aboutus.png"
          className="object-cover object-top w-full h-72 md:h-80 lg:h-96 mx-auto rounded-xl shadow-lg"
          alt="Lavado de autos"
        />
      </div>
    </div>
  );
};
export default Aboutus;
