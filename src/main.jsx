import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { VisualController } from './components/VisualController/VisualController';
import About from './pages/about';
import { Test } from './pages/test/Test';
import './styles.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
      <Route path="/exercises">
        {/* <Route index element={<h1>Will</h1>} /> */}
        <Route path=":exerciseName" element={<VisualController />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
