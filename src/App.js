import React from 'react';

import Routes from './Routes/index'
import AuthProvider from './Contexts/authContext';

import Route from './routes'

function App() {

  return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
  );
}

export default App;
