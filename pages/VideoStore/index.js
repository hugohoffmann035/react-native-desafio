import React from 'react';
import {ScrollView} from 'react-native';

import {Container} from './styles';
import SearchBar from './Components/SearchBar';
import Movies from './Components/Movies';
import Series from './Components/Series';
import Loading from './Components/Loading';
import Spacer from './Components/Spacer';

const VideoStore = ({navigation}) => (
  <Container>
    <SearchBar />
    <ScrollView>
      <Movies navigation={navigation} />
      <Series navigation={navigation} />
      <Loading />
      <Spacer />
    </ScrollView>
  </Container>
);

export default VideoStore;
