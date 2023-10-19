import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { FlatList } from 'react-native';
import api from '../../services/api';

import Card from './components/Card';
import { Typography } from '../../components/Typography/Typography';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/users').then((resp) => setData(resp.data));
  }, []);

  return (
    <Container>
      <Typography size={20} align="center">
        Estabelecimentos Proximos
      </Typography>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card avatar_url={item.avatar_url} id={item.id} url={item.url} login={item.login} />
        )}
        keyExtractor={(item) => item.node_id}
      />
    </Container>
  );
};

export default Home;
