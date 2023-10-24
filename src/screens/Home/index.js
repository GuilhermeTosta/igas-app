import React, { useEffect, useState } from 'react';

import { FlatList, ActivityIndicator } from 'react-native';
import api from '../../services/api';
import * as styles from './styles';

import Card from './components/Card';
import { Typography } from '../../components/Typography/Typography';
import Container from '../../components/Container/Container';
import { Box } from '../../components/SharedComponents/SharedComponents';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/users').then((resp) => setData(resp.data));
  }, []);

  return (
    <Container>
      <Box css={styles.Box}>
        <Typography margin={8} size={20} align="center">
          Estabelecimentos Proximos
        </Typography>
        {data.length === 0 ? (
          <ActivityIndicator />
        ) : (
          // <ActivityIndicator />
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Card avatar_url={item.avatar_url} id={item.id} url={item.url} login={item.login} />
            )}
            keyExtractor={(item) => item.node_id}
          />
        )}
      </Box>
    </Container>
  );
};

export default Home;
