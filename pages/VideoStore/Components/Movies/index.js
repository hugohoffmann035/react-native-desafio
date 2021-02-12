import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';

import Item from '../Item';
import Spacer from '../Spacer';

const Film = () => {
  const videos = useSelector((state) => state.videos);
  return (
    <>
      <Text>Filmes</Text>
      <ScrollView horizontal>
        {videos.docs
          .filter((item) => item.Type === 'movie')
          .map((movie) => (
            <Item {...movie} key={movie.imdbID} />
          ))}
        <Spacer />
      </ScrollView>
    </>
  );
};

export default Film;
