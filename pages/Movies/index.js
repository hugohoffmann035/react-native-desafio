import React, {useEffect, useState} from 'react';
import {Text, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadMovie} from '../../store/Movies/Movies.actions';
import {Container} from './styles';
import Input from '../../Components/Input';
import Item from './Components/Item';

const DATA = [
  {
    Title: 'Fast & Furious 6',
    Year: '2013',
    imdbID: 'tt1905041',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Furious 7',
    Year: '2015',
    imdbID: 'tt2820852',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg',
  },
  {
    Title: 'The Fast and the Furious',
    Year: '2001',
    imdbID: 'tt0232500',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    Title: 'Fast & Furious',
    Year: '2009',
    imdbID: 'tt1013752',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: '2 Fast 2 Furious',
    Year: '2003',
    imdbID: 'tt0322259',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Fast and the Furious: Tokyo Drift',
    Year: '2006',
    imdbID: 'tt0463985',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg',
  },
  {
    Title: 'The Fate of the Furious',
    Year: '2017',
    imdbID: 'tt4630562',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_SX300.jpg',
  },
  {
    Title: 'Fast & Furious Presents: Hobbs & Shaw',
    Year: '2019',
    imdbID: 'tt6806448',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Kung Fu Panda: Secrets of the Furious Five',
    Year: '2008',
    imdbID: 'tt1287845',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjQwMWNmYWUtY2E5NS00OTlkLWI2Y2MtNzhjZDUyYmZhZDVjXkEyXkFqcGdeQXVyNjc2MjYzMTY@._V1_SX300.jpg',
  },
  {
    Title: 'Too Fat Too Furious',
    Year: '2005',
    imdbID: 'tt0382365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTMzODg5MDA3MV5BMl5BanBnXkFtZTcwNjAzMDgyMQ@@._V1_SX300.jpg',
  },
];

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(loadMovie({page}));
  }, [dispatch, page]);

  return (
    <Container>
      <Input
        // autoCapitalize={false}
        autoCompleteType="off"
        autoCorrect={false}
        autoFocus
        keyboardType="default"
        maxLength={255}
        multiline={false}
        placeholder="Busque por filmes, séries e muito mais"
        placeholderTextColor="#333"
        textAlign="left"
      />
      {movies.docs.length === 0 && <Text>Nenhum filme listado.</Text>}
      <ScrollView>
        {DATA.length > 0 &&
          DATA.map((movie) => <Item {...movie} key={movie.imdbID} />)}

        <View
          style={{
            height: 100,
          }}
        />
      </ScrollView>
      {movies.loading && <Text>Carregando...</Text>}
    </Container>
  );
};

export default Movies;
