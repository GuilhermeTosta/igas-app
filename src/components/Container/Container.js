import React from 'react';
import * as styles from './styles';
import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';

const SafeAreaViewContainer = styled.SafeAreaView`
  ${(props) => props.css}
`;

const Container = ({ children }) => {
  return <SafeAreaViewContainer css={styles.container}>{children}</SafeAreaViewContainer>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
