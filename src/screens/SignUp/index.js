import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Container, CredentialsContainer } from './styles';
import InputField from '../../components/InputField/InputField';
import { Typography } from '../../components/Typography/Typography';
import Button from '../../components/Button/Button';
import colors from '../../constants/colors';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickOnEnter = () => {
    console.log(`Credentials: Email: ${email} Password: ${password} `);
  };

  return (
    <KeyboardAwareScrollView>
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
          <Button
            text="ENTRAR"
            textColor="white"
            width={'100%'}
            textSize={24}
            onPress={handleClickOnEnter}
          />

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
