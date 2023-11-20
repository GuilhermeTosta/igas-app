import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  function setUserData(usrData) {
    setUser(usrData);
  }

  return <AuthContext.Provider value={{ user, setUserData }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
