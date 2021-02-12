import React from 'react';
import {Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import {Container} from './styles';
import SearchBar from './Components/SearchBar';
import Item from './Components/Item';
import Spacer from './Components/Spacer';

const Movies = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <Container>
      <SearchBar />
      {movies.docs.length === 0 && <Text>Nenhum filme listado.</Text>}
      <ScrollView>
        {movies.docs.length > 0 &&
          movies.docs.map((movie) => <Item {...movie} key={movie.imdbID} />)}
        <Spacer />
      </ScrollView>
      {movies.loading && <Text>Carregando...</Text>}
    </Container>
  );
};

export default Movies;
