import React from 'react';
import {Container, Title, Img} from './styles';

const Item = ({Title: title, Year, imdbID, Type, Poster: img_uri}) => (
  <Container>
    <Title>{title}</Title>

    <Img
      source={{
        uri: img_uri,
      }}
    />
  </Container>
);

export default Item;
