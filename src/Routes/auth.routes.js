import {Routes, Route} from 'react-router-dom'

import SignIn from '../Components/Login'

const AuthRoutes = () => (
    <Routes>
      <Route path="/login"  element={<SignIn/>} />
      <Route path="/"  element={<h1>Home</h1>} />
      <Route path="*"  element={<h1>Page not found</h1>} />
    </Routes>
  );
  
  export default AuthRoutes;