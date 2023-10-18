import React from 'react';
import { Text, View } from 'react-native';

import PropTypes from 'prop-types';

import { variants } from './variants';

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
  size,
  bold,
}) => {
  const variantStyles = variants[variant];

  return (
    <View>
      <Text
        onPress={onPress}
        style={{
          ...variantStyles,
          fontSize: size,
          color,
          flex,
          margin,
          textAlign: align,
          textTransform: 'uppercase',
          fontWeight: bold ? 500 : 400,
          ...style,
        }}>
        {text || children}
      </Text>
    </View>
  );
};

Typography.propTypes = {
  align: PropTypes.oneOf(['auto', 'center', 'justify', 'left', 'right']),
  children: PropTypes.node,
  flex: PropTypes.number,
  bold: PropTypes.bool,
  margin: PropTypes.number,
  onPress: PropTypes.func,
  style: PropTypes.shape({}),
  text: PropTypes.string,
  color: PropTypes.string,
  textDecoration: PropTypes.oneOf(['none', 'lineThrough']),
  variant: PropTypes.oneOf(Object.keys(variants)),
  lineHeight: PropTypes.string,
  weight: PropTypes.oneOf(['normal', 'bold']),
  size: PropTypes.number,
};
