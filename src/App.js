import "./App.css";
import logo from "./img/misuse-3.png";
import Boton from "./componentes/boton";
import "./estilos.css/boton.css";
import "./estilos.css/contador.css";
import Contador from "./componentes/contador";
import { useState } from "react";

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciar = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={logo} alt="logo de frecocamp" />
      </div>
      <div className="contenedor-contador">
        <Contador numClics = {numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciar}
        />
      </div>
    </div>
  );
}

export default App;
