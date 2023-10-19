import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.SafeAreaView`
  gap: 15px;
  flex: 1;
  background-color: ${colors.primary};
`;

export const Card = styled.View`
  width: 90%;
  margin: 0 auto;
  background-color: ${colors.contrast};
  padding: 8px;
  margin: 15px auto;
`;

export const AvatarImage = styled.Image`
  border-radius: 50px;
  height: 50px;
  width: 50px;
  background-color: ${colors.black};
`;
