import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import * as api from '../Services/api'
export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {
        const StorageToken = localStorage.getItem('T:token')

        if (StorageToken) {
            api.defaults.headers.Authorization = `Bearer ${StorageToken}`

            api.get().then(response => {
                setUser(response.user)
            })
        }
    }, [])

    async function Authenticate({ email, password }) {
        const { token, user } = await api.post({ email, password })
        setUser(user)
        navigate('/dashboard')

        localStorage.setItem('T:token', token)
        api.defaults.headers.Authorization = `Bearer ${token}`

    }

    
    function LogOut() {
        setUser(null)
        navigate('/')
        localStorage.removeItem('T:token')
        
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, setUser, Authenticate, LogOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}