import React, {useState} from 'react';
import {Container} from './styles';
import Input from '../../../../Components/Input';

import {useDispatch} from 'react-redux';
import {searchVideo} from '../../../../store/VideoStore/VideoStore.actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSearch = (val) => {
    setSearch(val);
    dispatch(searchVideo({search: val}));
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
