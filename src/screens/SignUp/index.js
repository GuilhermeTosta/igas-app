import React, { useState } from 'react';
import { View, Image } from 'react-native';

import {
  Container,
  CustomButton,
  SignMessageButton,
  SignMessageButtonText,
  CustomButtonText,
  CredentialsContainer,
} from './styles';
import InputField from '../../components/InputField/InputField';
import { Typography } from '../../components/Typography/Typography';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickOnEnter = () => {
    console.log(`Credentials: Email: ${email} Password: ${password} `);
  };

  return (
    <>
      <Container>
        <CredentialsContainer>
          <Typography variant="h1" margin={16} text="Acesse sua conta" />

          <InputField
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            isPassword={false}
          />
          <InputField
            placeholder="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            isPassword={true}
          />
          <CustomButton onPress={handleClickOnEnter}>
            <CustomButtonText>ENTRAR</CustomButtonText>
          </CustomButton>

          <View style={{ flexDirection: 'row', gap: 15 }}>
            <SignMessageButton onPress={() => console.log('*click*')}>
              <SignMessageButtonText>Criar Conta</SignMessageButtonText>
            </SignMessageButton>
            <SignMessageButton onPress={() => console.log('*click*')}>
              <SignMessageButtonText>Esqueceu a Senha?</SignMessageButtonText>
            </SignMessageButton>
          </View>
        </CredentialsContainer>
      </Container>
      <View style={{ flex: 0.5 }}>
        <Image
          source={require('../../../assets/bottomImage.png')}
          style={{ height: 440, width: 440 }}
        />
      </View>
    </>
  );
};

export default SignUp;
