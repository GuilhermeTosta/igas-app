import React from 'react';
import propTypes from 'prop-types';
import { css } from 'styled-components';

import StarFull from '../../../../assets/star.svg';
import StarHalf from '../../../../assets/star_half.svg';
import StarEmpty from '../../../../assets/star_empty.svg';
import { Typography } from '../../../components/Typography/Typography';
import { Box } from '../../../components/SharedComponents/SharedComponents';

const container = css`
  flex-direction: row;
  gap: 8px;
`;
const starArea = css`
  flex-direction: row;
`;

const Stars = ({ stars, showNumber }) => {
  // To make sure that the maximum value of the stars is 5.
  if (stars > 5) {
    stars = 5;
  }

  let emptyStars = Array(5).fill(0); // [0,0,0,0,0]
  let floor = Math.floor(stars);
  let left = stars - floor;

  emptyStars.fill(2, 0, floor);
  if (left > 0) {
    emptyStars[floor] = 1;
  }

  return (
    <Box css={container}>
      <Box css={starArea}>
        {emptyStars?.map((i, k) => (
          <Box key={k}>
            {i === 0 && <StarEmpty width="18" height="18" fill="#f5e13b" />}
            {i === 1 && <StarHalf width="18" height="18" fill="#f5e13b" />}
            {i === 2 && <StarFull width="18" height="18" fill="#f5e13b" />}
          </Box>
        ))}
      </Box>
      {showNumber && <Typography>{stars.toFixed(1)}</Typography>}
    </Box>
  );
};

Stars.propTypes = {
  stars: propTypes.number,
  showNumber: propTypes.bool,
};

export default Stars;
