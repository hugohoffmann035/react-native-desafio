import React from 'react';
import {View} from 'react-native';
import {Container, Title, Img} from './styles';

const Item = ({Title: title, Year, imdbID, Type, Poster: img_uri}) => (
  <Container>
    <Img
      source={{
        uri: img_uri,
      }}
    />
    <View>
      <Title>{title}</Title>
    </View>
  </Container>
);

export default Item;
