import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.SafeAreaView`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  background-color: ${colors.contrast};
`;

export const CredentialsContainer = styled.View`
  flex: 0.5;
  width: 100%;
  gap: 8px;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;
