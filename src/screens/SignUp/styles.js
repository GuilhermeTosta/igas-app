import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.SafeAreaView`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;
export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CredentialsContainer = styled.View`
  flex: 0.5;
  width: 100%;
  gap: 8px;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  background-color: ${colors.primaryButtonBackground};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.white};
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 8px;
`;
export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.primaryButtonBackground};
`;
