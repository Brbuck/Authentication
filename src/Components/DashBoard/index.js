import React from 'react';
import {useAuth} from '../../Contexts/authContext'

function Dashboard() {

    const {LogOut, user} = useAuth()
    return (
        <div>
            <h1>Acesso permitido</h1>
            <p>{user.name}</p>
            <button onClick={LogOut}>Sair</button>
        </div>
    );
}

export default Dashboard;