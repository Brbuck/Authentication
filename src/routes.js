import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

import { useAuth } from './Contexts/authContext'
import Login from './Components/Login'
import Dashboard from './Components/DashBoard'


function AuthRoutes() {
    function PrivateRoute({ children }) {
        const { signed } = useAuth();
        const StorageToken = localStorage.getItem('T:token')
        return signed || StorageToken ? children : <Navigate to="/login" />;
        
    }

    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    );
}

export default AuthRoutes;