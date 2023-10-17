import React from 'react';
import { Text } from 'react-native';

import PropTypes from 'prop-types';

import { variants } from './variants';

const sizeOptions = {
  tiny: 12,
  small: 14,
  medium: 16,
  large: 18,
  extraLarge: 22,
  extraExtraLarge: 28,
};

export const Typography = ({
  align = 'left',
  children,
  color = 'black',
  flex,
  margin = 'none',
  onPress,
  style,
  text,
  variant = 'regularText',
  size = 'medium',
}) => {
  const variantStyles = variants[variant];

  return (
    <Text
      onPress={onPress}
      style={{
        fontSize: sizeOptions[size],
        ...variantStyles,
        color,
        flex,
        margin,
        textAlign: align,
        ...style,
      }}>
      {text || children}
    </Text>
  );
};

Typography.propTypes = {
  align: PropTypes.oneOf(['auto', 'center', 'justify', 'left', 'right']),
  children: PropTypes.node,
  flex: PropTypes.number,
  margin: PropTypes.number,
  onPress: PropTypes.func,
  style: PropTypes.shape({}),
  text: PropTypes.string,
  color: PropTypes.string,
  textDecoration: PropTypes.oneOf(['none', 'lineThrough']),
  variant: PropTypes.oneOf(Object.keys(variants)),
  lineHeight: PropTypes.string,
  weight: PropTypes.oneOf(['normal', 'bold']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'extraLarge', 'extraExtraLarge']),
};
