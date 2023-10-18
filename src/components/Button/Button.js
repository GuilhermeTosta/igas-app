import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { Typography } from '../../components/Typography/Typography';
import { variants } from './variants';

const Button = ({
  onPress,
  text,
  children,
  variant = 'contained',
  textColor = 'black',
  width,
  textSize = 14,
}) => {
  const variantStyles = variants[variant];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...variantStyles,
        width,
      }}>
      <Typography variant="h1" bold size={textSize} color={textColor}>
        {text || children}
      </Typography>
    </TouchableOpacity>
  );
};
Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(variants)),
  textColor: PropTypes.string,
  width: PropTypes.string,
  textSize: PropTypes.number,
};

export default Button;
