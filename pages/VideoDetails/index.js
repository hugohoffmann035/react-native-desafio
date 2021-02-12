import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {searchVideoDetails} from '../../store/VideoDetails/VideoDetails.actions';

import {
  Container,
  Content,
  Header,
  Img,
  Paragaf,
  SubTitle,
  Title,
} from './styles';

const VideoDetails = ({route}) => {
  const video = useSelector((state) => state.video_details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchVideoDetails({id: route.params.id}));
  }, [route.params.id]);

  return (
    <Container>
      <ScrollView>
        <Header>
          <Img source={{uri: video.details.Poster}} />
          <View>
            <Title>{video.details.Title}</Title>
          </View>
        </Header>
        <Content>
          <View>
            <SubTitle>Descrição</SubTitle>
            <Paragaf>{video.details.Plot}</Paragaf>
          </View>
          <View>
            <SubTitle>Atores</SubTitle>
            <Paragaf>{video.details.Actors}</Paragaf>
          </View>
          <View>
            <SubTitle>Diretor</SubTitle>
            <Paragaf>{video.details.Director}</Paragaf>
          </View>
          <View>
            <SubTitle>Escritor</SubTitle>
            <Paragaf>{video.details.Writer}</Paragaf>
          </View>
          <View>
            <SubTitle>Lançamento</SubTitle>
            <Paragaf>{video.details.Released}</Paragaf>
          </View>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default VideoDetails;
