import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Error from 'Components/Message';
import Poster from 'Components/Poster';
import { Helmet } from 'react-helmet';

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  handleSubmit,
  error,
  loading,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title>Search | NomFlix</title>
    </Helmet>

    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows.."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                isMovie={true}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
              />
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Error color="#e74c3c" text={error} />}
    {tvResults &&
      movieResults &&
      tvResults.length === 0 &&
      movieResults.length === 0 && (
        <Error text="Nothing Found" color="#95a5a6" />
      )}
  </Container>
);

const Container = styled.div`
  padding: 25px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 28px;
`;

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
