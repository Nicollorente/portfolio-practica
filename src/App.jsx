import './App.css';
import Navbar from './Components/Navbar';
import Inicio from './Components/Inicio';
import Proyectos from './Components/Proyectos';
import Habilidades from './Components/Habilidades';
import Contacto from './Components/Contacto';
import { Provider } from 'react-redux';
import store from './Components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <Inicio />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
    </Provider>
  );
}

export default App;
