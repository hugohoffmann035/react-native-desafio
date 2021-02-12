import React, {useState, useEffect} from 'react';
import {Container} from './styles';
import Input from '../../../../Components/Input';

import {useDispatch} from 'react-redux';
import {searchMovie} from '../../../../store/Movies/Movies.actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSearch = (val) => {
    setSearch(val);
    dispatch(searchMovie({search: val}));
  };

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
        onChangeText={(val) => handleSearch(val)}
        value={search}
      />
    </Container>
  );
};

export default SearchBar;
