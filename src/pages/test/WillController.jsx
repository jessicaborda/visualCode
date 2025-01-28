import { useParams } from 'react-router';
import { ExerciseFirstLayout } from '../../components/exercise/ExerciseLayout/ExerciseFirstLayout';

export const WillController = () => {
  const { willId } = useParams();

  if (willId === '1') {
    return <ExerciseFirstLayout />;
  } else if (willId === '2') {
    return <div>WillController 2</div>;
  } else {
    return <div>WillController Default {willId}</div>;
  }
};
