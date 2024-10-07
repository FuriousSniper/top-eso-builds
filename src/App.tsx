import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.less';
import './styles/index.less'
import MainPage from './pages/MainPage';
import BuildPage from './pages/BuildPage';
import AboutPage from './pages/AboutPage';
import PenPage from './pages/PenPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/tools/penCalc" element={<PenPage />} />
        <Route path="/build/:buildNameParam" element={<BuildPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
