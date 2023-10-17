import React, { createContext, useReducer } from 'react';
import { initialState, UserReducer } from '../reducers/UserReducer';
import propTypes from 'prop-types';

export const UserContextBuilder = createContext();

const UserContext = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContextBuilder.Provider value={{ state, dispatch }}>
      {children}
    </UserContextBuilder.Provider>
  );
};

UserContext.propTypes = {
  children: propTypes.element,
};

export default UserContext;
