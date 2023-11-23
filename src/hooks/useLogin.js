import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/native';

import { api } from '../services/api';

export default function useLogin() {
  const navigation = useNavigation();

  return useMutation(
    'apex/User',
    ({ username, password }) =>
      api.post(`/apexrest/User`, null, { params: { username, password } }).then((res) => res.data),
    {
      onSuccess: (data) => {
        navigation.navigate('MainTab');
      },
    }
  );
}
