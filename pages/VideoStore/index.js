import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import {Container} from './styles';
import SearchBar from './Components/SearchBar';
import Movies from './Components/Movies';
import Series from './Components/Series';
import Loading from './Components/Loading';

const VideoStore = () => {
  const videos = useSelector((state) => state.videos);

  return (
    <Container>
      <SearchBar />
      <ScrollView>
        <Movies />
        <Series />
        <Loading />
      </ScrollView>
    </Container>
  );
};

export default VideoStore;
