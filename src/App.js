
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import PortPage from './components/pages/PortPage';
import YoutubePage from './components/pages/YoutubePage';
import UnsplashPage from './components/pages/UnsplashPage';
import MoviePage from './components/pages/MoviePage';
import IntroPage from './components/pages/IntroPage';

function App() {
  return (
    <BrowserRouter>
    <Header attr={['header__wrap', 'nexon5', 'bg-blue']}/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/port" element={<PortPage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/unsplash" element={<UnsplashPage />} />
        <Route path="/movie" element={<MoviePage />} />
    </Routes>
    <Footer attr={'footer__wrap section nexon5'}/>
    </BrowserRouter>
  );
}

export default App;
