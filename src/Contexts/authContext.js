import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import * as api from '../Services/api'
export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    let navigate = useNavigate()

    const signed = !!user

    useEffect(() => {
        const StorageToken = localStorage.getItem('T:token')

        if (StorageToken) {
            api.defaults.headers.Authorization = `Bearer ${StorageToken}`

            api.get('profile').then(response => {
                setUser(response.user)
            })
        }
    }, [])

    async function Authenticate({ email, password }) {
        const { token, user } = await api.post('authenticat', { email, password })

        localStorage.setItem('T:token', token)
        api.defaults.headers.Authorization = `Bearer ${token}`

        setUser(user)
        navigate('/dashboard')

    }


    function LogOut() {
        setUser(null)
        navigate('/')
        localStorage.removeItem('T:token')

    }

    return (
        <AuthContext.Provider value={{ signed, user, setUser, Authenticate, LogOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}