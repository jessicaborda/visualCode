import {
  stringToUpperController,
  extractNumbersController,
  countWordController,
  invertStringController,
  calculatorOperations,
} from '../../controllers/exercises';
import { DualBoxLayout } from '../ExerciseLayout';
import { CalculatorLayout } from '../ExerciseLayout/calculatorLayout/CalculatorLayout';
import { CreadorDadosLayout } from '../ExerciseLayout/creadorDadosLayout/CreadorDadosLayout';

export const EXERCISES = {
  'string-to-upper': {
    name: 'Texto a Mayúscula',
    path: '/string-to-upper',
    layout: DualBoxLayout,
    handleFunction: stringToUpperController,
  },
  'extract-numbers': {
    name: 'Extraer Números',
    path: '/extract-numbers',
    layout: DualBoxLayout,
    handleFunction: extractNumbersController,
  },
  'count-words': {
    name: 'Contar Palabras',
    path: '/count-words',
    layout: DualBoxLayout,
    handleFunction: countWordController,
  },
  'invert-string': {
    name: 'Invertir Texto',
    path: '/invert-string',
    layout: DualBoxLayout,
    handleFunction: invertStringController,
  },
  calculator: {
    name: 'Calculadora',
    path: '/calculator',
    layout: CalculatorLayout,
    handleFunction: calculatorOperations,
  },
  'creator-dice': {
    name: 'Creador de Dados',
    path: '/creator-dice',
    layout: CreadorDadosLayout,
    handleFunction: calculatorOperations,
  },
};
