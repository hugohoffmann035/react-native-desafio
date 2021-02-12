import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import Item from '../Item';

const Series = ({navigation}) => {
  const videos = useSelector((state) => state.videos);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(videos.docs.filter((item) => item.Type === 'series'));
  }, [videos]);

  return (
    <>
      {data.length > 0 && (
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#245dd8',
            }}>
            Series
          </Text>
          <ScrollView horizontal>
            {data.map((movie) => (
              <Item navigation={navigation} {...movie} key={movie.imdbID} />
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Series;
