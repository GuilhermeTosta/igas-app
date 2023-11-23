import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Box } from './styles';
import { Typography } from '../../components/Typography/Typography';
import Button from '../../components/Button/Button';
import useGetAccessToken from '../../hooks/useGetAccessToken';

const Preload = () => {
  const navigation = useNavigation();
  const { mutate } = useGetAccessToken();

  useEffect(() => {
    mutate();
  }, []);

  return (
    <Container>
      <Box>
        <Typography bold variant="h1" size={25} text="DRAFT" />
        <Typography variant="h2" text="Screen that verify if the user is logged in!" />
      </Box>

      <Box>
        <Typography bold variant="h5" size={35} text="SIMULATION ONLY" />
        <Button textColor="white" width={'50%'} onPress={() => navigation.navigate('MainTab')}>
          Logged
        </Button>
        <Button textColor="white" width={'50%'} onPress={() => navigation.navigate('SignUp')}>
          Not Logged
        </Button>
      </Box>
    </Container>
  );
};

export default Preload;
