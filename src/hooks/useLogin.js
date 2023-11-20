import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/native';

import { api } from '../services/api';

export default function useLogin() {
  const navigation = useNavigation();

  const payload = {
    grant_type: 'password',
    client_id:
      '3MVG9Xl3BC6VHB.acsrqNBxNTIIFbXFP.YWTYye2z2jWdCUe3Lyi8uG1MNx7WhQ588O85vPMwAD_JXkBF24Tg',
    client_secret: '6C35CF00EA4C4625B8696FF338D526AA4284518F5CB0B6FF00D96B7E816D5348',
  };
  return useMutation(
    'auth/login',
    ({ username, password }) =>
      api
        .post(`/services/oauth2/token?`, null, { params: { ...payload, username, password } })
        .then((res) => res.data),
    {
      onSuccess: (data) => {
        api.defaults.headers['Authorization'] = `Bearer ${data.access_token}`;
        navigation.navigate('MainTab');
      },
    }
  );
}
