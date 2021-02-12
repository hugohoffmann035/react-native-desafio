import React from 'react';
import {View} from 'react-native';
import {Container, Title, Img} from './styles';

const Item = ({
  Title: title,
  Year,
  imdbID,
  Type,
  Poster: img_uri,
  navigation,
}) => {
  const handleRedirect = () =>
    navigation.navigate('VideoDetails', {id: imdbID});
  return (
    <Container onPress={() => handleRedirect()}>
      <Img
        source={{
          uri: img_uri,
        }}
      />
    </Container>
  );
};

export default Item;
