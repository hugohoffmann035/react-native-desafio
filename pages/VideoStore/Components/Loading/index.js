import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

const LoadingComponent = () => {
  const videos = useSelector((state) => state.videos);
  return <>{videos.loading && <Text>Carregando...</Text>}</>;
};

export default LoadingComponent;
