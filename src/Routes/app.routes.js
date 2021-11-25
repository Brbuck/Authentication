import { Routes, Route } from 'react-router-dom'

import Dashboard from '../Components/DashBoard'


const AppRoutes = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default AppRoutes;