import PropTypes from 'prop-types'; // Importa PropTypes para validar las props
import { useState } from 'react';
import { Footer } from '../../footer';
import { Header } from '../../header';
import './DualBoxLayout.css';

export const DualBoxLayout = ({ handleFunction }) => {
  const [inputText, setInputText] = useState(''); //Texto ingresado
  const [processedText, setProcessedText] = useState(''); //Texto procesado

  // Función para procesar el texto ingresado
  const handleProcessText = () => {
    const processed = handleFunction(inputText); // Llama a la función pasada como prop con el texto ingresado
    setProcessedText(processed); // Actualiza el estado con el texto procesado
  };

  return (
    <>
      <Header />
      <div className="exerciseFirstLayout-container">
        <input
          className="inputText"
          type="text"
          value={inputText}
          placeholder="Ingresar Texto"
          onChange={(e) => setInputText(e.target.value)} // Actualiza el estado
        />
        <button className="button-dark" onClick={handleProcessText}>
          Ejecutar
        </button>
        <input
          className="textProcessed"
          type="text"
          value={processedText} // Muestra el texto procesado
          placeholder="Aquí se mostrará tu texto procesado"
          disabled
        />
      </div>
      <Footer />
    </>
  );
};

DualBoxLayout.propTypes = {
  handleFunction: PropTypes.func.isRequired, // Asegúrate de importar PropTypes si no lo has hecho ya
};
