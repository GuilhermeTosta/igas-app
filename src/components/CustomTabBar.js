import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import Money from '../../assets/money.svg';
import AccountIcon from '../../assets/account.svg';
import colors from '../constants/colors';

const TabArea = styled.View`
  height: 60px;
  background-color: ${colors.contrast};
  flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CustomTabBar = () => {
  const navigation = useNavigation();

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon width="28" height="28" fill="#000" />
      </TabItem>
      <TabItem onPress={() => goTo('Promocoes')}>
        <Money width="28" height="28" fill="#000" />
      </TabItem>
      <TabItem onPress={() => goTo('Buscar')}>
        <SearchIcon width="28" height="28" fill="#000" />
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        <AccountIcon width="28" height="28" fill="#000" />
      </TabItem>
    </TabArea>
  );
};

export default CustomTabBar;
