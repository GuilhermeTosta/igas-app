import React from 'react';
import { ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';

import colors from '../../constants/colors';
import { LoadingIconView, LoadingView } from './styles';

export const LoadingIcon = ({ size, color }) => {
  return (
    <LoadingIconView>
      <ActivityIndicator animating size={size} color={color} />
    </LoadingIconView>
  );
};

LoadingIcon.propTypes = {
  size: PropTypes.oneOf(['small', 'large']).isRequired,
  color: PropTypes.oneOf(Object.values(colors)).isRequired,
};

// ----- //

export const Loading = ({ size = 'large' }) => {
  return (
    <LoadingView>
      <LoadingIcon size={size} />
    </LoadingView>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
};
