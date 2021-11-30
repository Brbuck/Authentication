import React from 'react';
import './styles/globalStyle.scss'

import AuthProvider from './Contexts/authContext';

import Routes from './routes'

function App() {

  return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
  );
}

export default App;
