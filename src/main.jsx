import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Router } from 'react-router';
import { VisualController } from './components/VisualController/VisualController';
import { Home, About } from './pages';
import { Test } from './pages/test/Test';
import './styles.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="/exercises">
          <Route path=":exerciseName" element={<VisualController />} />
        </Route>
      </Routes>
    </Router>
  </BrowserRouter>
);
