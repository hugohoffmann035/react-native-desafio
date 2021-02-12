import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10px;
  padding: 0px 10px;
  background-color: #f5f5f5;
`;

export const Img = styled.Image`
  width: 180px;
  height: 250px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-size: 17px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 20px;
`;

export const Paragaf = styled.Text``;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
`;
