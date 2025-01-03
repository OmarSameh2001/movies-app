import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import MoviePage from './pages/MoviePage/MoviePage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path='/movies/:id' element={<MoviePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
