import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.contrast};
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View`
  flex: 1;
  gap: 35px;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
