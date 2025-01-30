import {
  stringToUpperController,
  extractNumbersController,
  countWordController,
  invertStringController,
} from '../../controllers/exercises';
import { DualBoxLayout } from '../ExerciseLayout';

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
};
