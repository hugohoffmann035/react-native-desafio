import React, {useState, useEffect} from 'react';
import {Container} from './styles';
import Input from '../../../../Components/Input';

import {useDispatch} from 'react-redux';
import {searchMovie} from '../../../../store/Movies/Movies.actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(searchMovie({search}));
  }, [search]);

  return (
    <Container>
      <Input
        autoCompleteType="off"
        autoCorrect={false}
        autoFocus
        keyboardType="default"
        maxLength={255}
        multiline={false}
        placeholder="Busque por filmes, séries e muito mais"
        placeholderTextColor="#333"
        textAlign="left"
        onChangeText={setSearch}
        value={search}
      />
    </Container>
  );
};

export default SearchBar;
