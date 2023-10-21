import React from 'react';

import { Text } from 'react-native';

import Container from '../../components/Container/Container';
import { Box } from '../../components/SharedComponents/SharedComponents';
import * as styles from './styles';

const Profile = () => {
  return (
    <Container>
      <Box css={styles.box}>
        <Text>Profile</Text>
      </Box>
    </Container>
  );
};

export default Profile;
