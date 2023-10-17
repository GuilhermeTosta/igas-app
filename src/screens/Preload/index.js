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
        <Button>
          <AdviseText onPress={() => navigation.navigate('SignIn')}>Logged</AdviseText>
        </Button>
        <Button>
          <AdviseText onPress={() => navigation.navigate('SignUp')}>Not Logged</AdviseText>
        </Button>
      </Box>
    </Container>
  );
};

export default Preload;
