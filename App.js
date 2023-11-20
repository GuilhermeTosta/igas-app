import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';

import MainStack from './src/stacks/MainStack';
import AuthProvider from './src/contexts/AuthContext';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthProvider>
          <MainStack />
        </AuthProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
