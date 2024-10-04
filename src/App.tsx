import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.less';
import './styles/index.less'
import MainPage from './pages/MainPage';
import BuildPage from './pages/BuildPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/build/:buildNameParam" element={<BuildPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
