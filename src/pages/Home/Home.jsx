import MovieList from "components/MovieList/MovieList";
import { useEffect, useState } from 'react';
import Loading from "components/Loader/Loader";
import { fetchMoviesTrend } from "services/api";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMoviesTrend();
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <div>
        <MovieList movies={movies} />
      </div>
      <Loading loading={isLoading} />
    </>
  );
};

export default Home;