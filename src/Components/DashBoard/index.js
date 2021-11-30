import React from 'react';
import {useAuth} from '../../Contexts/authContext'
import './styles.scss'

function Dashboard() {

    const {LogOut, user} = useAuth()
    return (
        <div className='content_dashboard'>
            <span>Seja bem vindo(a) novamente {user?.name}</span>
            <button onClick={LogOut}>Sair</button>
        </div>
    );
}

export default Dashboard;