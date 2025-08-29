import Nav from './components/Nav'; 
import ImagenComparacion from './components/ImagenComparacion';
import Aboutus from './components/AboutUs';
import Footer from './components/Footer';
import Servicios from './components/Servicios';

function App() {

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/img/fondolavado.png')" }}
    >
      {/* Overlay oscuro en toda la página */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Contenido encima del overlay */}
      <div className="relative z-10">
        {/* Componentes*/}
        <Nav /> 
        <ImagenComparacion />
        <Aboutus/>
        <Servicios/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
