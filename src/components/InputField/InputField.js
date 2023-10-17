import React from 'react';
import { InputArea, Input } from './styles';
import propTypes from 'prop-types';

const InputField = ({ placeholder, value, onChangeText, isPassword }) => {
  return (
    <InputArea>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
      />
    </InputArea>
  );
};

InputField.propTypes = {
  placeholder: propTypes.string,
  value: propTypes.string,
  onChangeText: propTypes.func,
  isPassword: propTypes.bool,
};

export default InputField;
