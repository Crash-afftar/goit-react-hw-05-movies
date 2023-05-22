import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MoviePage = lazy(() => import('../pages/MoviePage'));
// const Cast = lazy(() => import('./components/Cast'));
// const Reviews = lazy(() => import('./components/Reviews'));
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Route>
      </Routes>
      
    </>
  );
};

export default App;