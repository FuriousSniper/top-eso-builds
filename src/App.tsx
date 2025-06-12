import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.less';
import './styles/index.less'
import MainPage from './pages/MainPage';
import BuildPage from './pages/BuildPage';
import AboutPage from './pages/AboutPage';
import PenPage from './pages/PenPage';
import CritPage from './pages/CritPage';
import SubclassingPage from './pages/SubclassingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/tools/penCalc" element={<PenPage />} />
        <Route path="/tools/critCalc" element={<CritPage />} />
        <Route path="/tools/subclassing" element={<SubclassingPage />} />
        <Route path="/build/:buildNameParam" element={<BuildPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
