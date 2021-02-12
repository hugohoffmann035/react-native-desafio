import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';

import Item from '../Item';
import Spacer from '../Spacer';

const Series = () => {
  const videos = useSelector((state) => state.videos);
  return (
    <>
      <Text>Series</Text>
      <ScrollView horizontal>
        {videos.docs
          .filter((item) => item.Type === 'series')
          .map((movie) => (
            <Item {...movie} key={movie.imdbID} />
          ))}
        <Spacer />
      </ScrollView>
    </>
  );
};

export default Series;
