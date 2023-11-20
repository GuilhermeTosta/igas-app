import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import * as styles from './styles';
import Card from './components/Card';
import { gitHubApi } from '../../services/api';
import { Loading } from '../../components/Loading/Loading';
import Container from '../../components/Container/Container';
import { Typography } from '../../components/Typography/Typography';
import { Box } from '../../components/SharedComponents/SharedComponents';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    gitHubApi.get('/users').then((resp) => setData(resp.data));
  }, []);

  return (
    <Container>
      <Box css={styles.Box}>
        <Typography margin={8} size={20} align="center">
          Estabelecimentos Proximos
        </Typography>
        {data.length === 0 ? (
          <Loading />
        ) : (
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
