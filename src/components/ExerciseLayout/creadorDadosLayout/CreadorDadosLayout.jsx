import { useState } from 'react';
import { Footer } from '../../footer';
import { Header } from '../../header';
import { DynamicDiceComponent } from '../../injectors/dynamicDiceComponent';
import './CreadorDadosLayout.css';

export const CreadorDadosLayout = () => {
  const [diceValues, setDiceValues] = useState([1]);

  const handleAddDice = () => {
    setDiceValues([...diceValues, 1]); // Agrega un nuevo dado con valor inicial 1
  };

  const handleRemoveDice = () => {
    setDiceValues(diceValues.slice(0, -1)); // Elimina el último dado
  };

  const handleChangeDice = (newValues) => {
    setDiceValues(newValues); // Actualiza todos los valores de los dados
  };

  return (
    <>
      <Header />
      <div className="creadorDadosContainer">
        <DynamicDiceComponent
          values={diceValues}
          onAddDice={handleAddDice}
          onRemoveDice={handleRemoveDice}
          onChange={handleChangeDice}
        />
      </div>

      <Footer />
    </>
  );
};
