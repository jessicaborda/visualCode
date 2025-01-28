import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import About from './pages/about';
// import ExerciseLayout from './pages/exercise';
// import ExercisePage from './pages/exercise';
// import { Exercise } from './pages/exercise';
import { Test } from './pages/test/Test';
import { WillController } from './pages/test/WillController';
import './styles.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
      <Route path="/exercises">
        {/* <Route index element={<h1>Will</h1>} /> */}
        <Route path=":willId" element={<WillController />} />
      </Route>
      {/* <Route
        path="/ejercicios/:exerciseName"
        element={
          <ExerciseLayout>
            <ExercisePage />
          </ExerciseLayout>
        }
      /> */}
      {/* <Route path="/ejercicios_test" element={<Exercise />} /> */}
    </Routes>
  </BrowserRouter>
);
