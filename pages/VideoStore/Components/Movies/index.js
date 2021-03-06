import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import Item from '../Item';

const Film = ({navigation}) => {
  const videos = useSelector((state) => state.videos);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(videos.docs.filter((item) => item.Type === 'movie'));
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
            Filmes
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

export default Film;
