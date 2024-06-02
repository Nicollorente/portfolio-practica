import './App.css';
import Navbar from './Components/Navbar';
import Inicio from './Components/Inicio';
import Proyectos from './Components/Proyectos';
import Habilidades from './Components/Habilidades';
import Contacto from './Components/Contacto';

function App() {
  return (

      <main>
        <Navbar />
        <Inicio />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
  );
}

export default App;
