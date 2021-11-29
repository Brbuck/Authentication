import React from 'react';
import './styles/globalStyle.css'

//import Routes from './Routes/index'
import AuthProvider from './Contexts/authContext';

import Route from './routes'

function App() {

  return (
      <AuthProvider>
        <Route />
      </AuthProvider>
  );
}

export default App;
