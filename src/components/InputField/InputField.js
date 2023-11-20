import React from 'react';
import { InputArea, Input } from './styles';
import propTypes from 'prop-types';
import { useController } from 'react-hook-form';

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

export const FormInputField = ({ placeholder, name, isPassword, control }) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <InputArea>
      <Input
        placeholder={placeholder}
        value={field.value}
        onChangeText={field.onChange}
        secureTextEntry={isPassword}
      />
    </InputArea>
  );
};

FormInputField.propTypes = {
  placeholder: propTypes.string,
  value: propTypes.string,
  name: propTypes.string,
  onChangeText: propTypes.func,
  isPassword: propTypes.bool,
  control: propTypes.any,
};

export default InputField;
