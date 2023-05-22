import React from 'react';
import PropTypes from 'prop-types';
import { Section,SectionTitle,List,ListItem,StyledLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <Section>
      <SectionTitle>Trending today</SectionTitle>
      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>
              {movie.title}
            </StyledLink>
          </ListItem>
        ))}
      </List> 
    </Section>
  );
};

  MovieList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        vote_average: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

export default MovieList;