import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, AdviseText, Button, Box } from './styles';

const Preload = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Box>
        <AdviseText>DRAFT</AdviseText>
        <AdviseText>Screen that verify if the user is logged in!</AdviseText>
      </Box>

      <Box>
        <AdviseText>SIMULATION ONLY</AdviseText>
        <Button onPress={() => navigation.navigate('SignIn')}>
          <AdviseText>Logged</AdviseText>
        </Button>
        <Button onPress={() => navigation.navigate('SignUp')}>
          <AdviseText>Not Logged</AdviseText>
        </Button>
      </Box>
    </Container>
  );
};

export default Preload;
