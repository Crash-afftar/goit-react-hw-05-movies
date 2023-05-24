import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
// import { toast } from 'react-toastify';
import { getMovieById } from "services/api";
import Loading from "components/Loader/Loader";
import { MovieSection, LinkGoBack, MovieCard, Poster, NavLins } from './MoviePage.styled';

// console.log(getMovieById(2))

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    (async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      }
    })();
  }, [movieId]);
  return (
    <MovieSection      
    >
      <LinkGoBack to={location.state?.from || '/'}>GO BACK</LinkGoBack>
      {isLoading && (
      <Loading/>       
      )}
      {movie && (
          <MovieCard>
              <Poster
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            <div
              style={{
                width: '45%',
              }}
            >
              <h2>{movie.title}</h2>

              <p>{movie.overview}</p>

              <p>Release Date: {movie.release_date}</p>

              <p>Rating: {movie.vote_average}</p>

              <div>
                <h3>Additional information</h3>
                <NavLins>
                  <li>
                    <Link to={`/movies/${movieId}/cast`}  state={{ from: location.state?.from || '/movies' }}>Cast</Link>
                  </li>
                  <li>
                    <Link to={`/movies/${movieId}/reviews`}  state={{ from: location.state?.from || '/movies' }}>Reviews</Link>
                  </li>
                </NavLins>
              </div>
            </div>
          </MovieCard>
      )}
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </MovieSection>
  );
};

export default MoviePage;