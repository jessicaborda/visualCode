import { useState } from 'react';
import { Footer } from '../../footer';
import { Header } from '../../header';
import './ExerciseFirstLayout.css';

export const ExerciseFirstLayout = () => {
  const [inputText, setInputText] = useState(''); //Texto ingresado
  const [processedText, setProcessedText] = useState(''); //Texto procesado

  // Función para procesar el texto ingresado
  const handleProcessText = () => {
    // Aquí defines tu lógica específica de procesamiento
    const result = inputText.toUpperCase(); // Ejemplo: convierte el texto a mayúsculas
    setProcessedText(result);
  };

  return (
    <>
      <Header />
      <div className="exerciseFirstLayout-container">
        <input
          className="inputText"
          type="text"
          placeholder="Ingresar Texto"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} // Actualiza el estado
        />
        <button onClick={handleProcessText}>Ejecutar</button>
        <textarea
          className="textProcessed"
          name="textProcesado"
          id="textProcesado"
          placeholder="Aquí se mostrará tu texto procesado"
          value={processedText} // Muestra el texto procesado
          readOnly // Hace que el textarea sea de solo lectura
        ></textarea>
      </div>
      <Footer />
    </>
  );
};
