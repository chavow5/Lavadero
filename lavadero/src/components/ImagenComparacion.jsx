import ReactCompareImage from "react-compare-image";

export const ImagenComparacion = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] flex flex-col items-center justify-start px-4 pt-32 pb-10 text-center text-white"
    >
      <div className="w-full max-w-md sm:max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
          Antes y Después 🚗💦
        </h1>

        {/* Comparador */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <ReactCompareImage
            leftImage="/img/autosucio.png"
            rightImage="/img/autolimpio.png"
            sliderLineColor="#fff"
            sliderLineWidth={3}
            handle={
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-md border-2 border-blue-500" />
            }
          />
        </div>

        <p className="mt-6 text-gray-100 text-lg font-bold sm:text-xl px-2 drop-shadow-lg">
          Mirá cómo transformamos tu vehículo con nuestro servicio de lavado
          premium.
        </p>

        {/* Botones */}
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <a
            href="#reservar-turno"
            className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Reservar Turno
          </a>
          <a
            href="#servicios"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImagenComparacion;