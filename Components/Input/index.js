import React from 'react';
import {Container, Input} from './styles';

const InputComponent = (props) => (
  <Container>
    <Input {...props} />
  </Container>
);

export default InputComponent;
