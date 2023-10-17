import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const InputArea = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  border-radius: 8px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid ${colors.border};
`;
export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
`;
