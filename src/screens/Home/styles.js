import { css } from 'styled-components';
import styled from 'styled-components/native';

import colors from '../../constants/colors';

export const Box = css`
  gap: 15px;
  flex: 1;
`;

export const CardStyle = css`
  width: 90%;
  margin: 0 auto;
  background-color: ${colors.white};
  padding: 16px;
  margin: 15px auto;
  border-radius: 10%;
`;

export const RatingContainer = css`
  flex-direction: row;
  height: 15px;
  width: 100%;
  gap: 8px;
  align-items: space-between;
  justify-content: space-between;
`;

export const AvatarImage = styled.Image`
  border-radius: 50px;
  height: 50px;
  width: 50px;
  background-color: ${colors.black};
`;
