import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './page/home/Home';
import MovieList from './components/movieList/movieList';
import Movie from './page/movieDetail/movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>Error Pages</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;