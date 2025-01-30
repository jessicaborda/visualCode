import { useParams } from 'react-router';
import { EXERCISES } from './exercisesConst'; // Asegúrate de que esta ruta sea correcta

export const VisualController = () => {
  const { exerciseName } = useParams();

  let exercise = EXERCISES[exerciseName];

  if (!exercise) {
    return <div>Exercise not found: {exerciseName}</div>;
  }

  let { layout: Layout, handleFunction } = exercise;

  return <Layout handleFunction={handleFunction} />;
};
