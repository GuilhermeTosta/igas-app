import styled from 'styled-components/native';
import colors from '../../constants/colors';
import { css } from 'styled-components';

export const Box = css`
  gap: 15px;
  flex: 1;
`;

export const CardStyle = css`
  width: 90%;
  margin: 0 auto;
  background-color: ${colors.primary};
  padding: 8px;
  margin: 15px auto;
`;

export const AvatarImage = styled.Image`
  border-radius: 50px;
  height: 50px;
  width: 50px;
  background-color: ${colors.black};
`;
