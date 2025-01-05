import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import MoviePage from './pages/MoviePage/MoviePage';
import Favourites from './pages/Favourites/Favourites';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path='/movies/:id' element={<MoviePage />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
