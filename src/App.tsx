import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import SimpleCareerPage from './pages/SimpleCareerPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="careers" element={<SimpleCareerPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
