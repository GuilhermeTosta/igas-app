import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '../../constants/colors';
import useLogin from '../../hooks/useLogin';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../contexts/AuthContext';
import { Container, CredentialsContainer } from './styles';
import { Typography } from '../../components/Typography/Typography';
import { FormInputField } from '../../components/InputField/InputField';

const SignUp = () => {
  const { control, handleSubmit } = useForm();

  const { user, setUserData } = useContext(AuthContext);

  const { mutate: loginMutate, isLoading, error } = useLogin();

  const handleClickOnEnter = ({ username, password }) => {
    loginMutate({ username, password });
  };

  return (
    <KeyboardAwareScrollView>
      <Container>
        <CredentialsContainer>
          <Typography variant="h1" margin={16} text="Acesse sua conta" />

          <FormInputField
            placeholder="Email"
            name="username"
            control={control}
            isPassword={false}
          />
          <FormInputField
            placeholder="Password"
            name="password"
            control={control}
            isPassword={true}
          />

          <Button
            text="ENTRAR"
            textColor="white"
            width={'100%'}
            textSize={24}
            onPress={handleSubmit(handleClickOnEnter)}
            loading={isLoading}
            loadingColor={colors.white}
          />
          <View style={{ height: 23 }}>
            {error && (
              <Typography color="red">
                {error.response.data.error_description.toUpperCase()}
              </Typography>
            )}
          </View>

          <View style={{ flexDirection: 'row', gap: 15 }}>
            <Button
              variant="text"
              textSize={12}
              text="Criar Conta"
              textColor={colors.primaryButtonBackground}
              onPress={() => console.log('*click*')}
            />
            <Button
              variant="text"
              textSize={12}
              text="Esqueceu a Senha?"
              textColor={colors.primaryButtonBackground}
              onPress={() => console.log('*click*')}
            />
          </View>
        </CredentialsContainer>
      </Container>
      <View style={{ flex: 0.5, backgroundColor: colors.contrast }}>
        <Image
          source={require('../../../assets/bottomImage.png')}
          style={{ height: 440, width: 440 }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
