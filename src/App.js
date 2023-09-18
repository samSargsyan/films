import './App.css';
import About from './components/about/About';
import FilmInside from './components/filmInside/FilmInside';
import FilmPage from './components/filmPage/FilmPage';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/:categories" index element={<FilmPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/:categories/:film" element={<FilmInside />} />
      </Routes>
    </div>
  );
}

export default App;
