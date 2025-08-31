import Nav from './components/Nav'; 
import ImagenComparacion from './components/ImagenComparacion';
import Aboutus from './components/AboutUs';
import Footer from './components/Footer';
import Servicios from './components/Servicios';
import Turnos from './components/Turnos';

function App() {

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/img/fondolavado.jpg')",
        backgroundRepeat: 'repeat',      // repite la imagen
        backgroundSize: '1320px',         // tamaño del tile (ajustalo)
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay oscuro en toda la página */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido encima del overlay */}
      <div className="relative z-10">
        {/* Componentes*/}
        <Nav /> 
        <ImagenComparacion />
        <Aboutus/>
        <Servicios/>
        <Turnos/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
