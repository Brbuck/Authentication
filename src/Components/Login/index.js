import React from 'react';
import './styles.scss'

import { useForm } from "react-hook-form";

import { useAuth } from '../../Contexts/authContext'

function Login() {
    const { Authenticate } = useAuth()
    const { register, handleSubmit } = useForm();

    async function handleSignIn(data) {
        await Authenticate(data)
        console.log(data)
    }

    return (
        <div className="form-wrapper">
           
            <form className="form" onSubmit={handleSubmit(handleSignIn)}>
                <div>
                     <h2>Login</h2>
                    <input
                        {...register('email')}
                        id="email-address"
                        name="email"
                        type="email"

                        placeholder="Email address"
                    />
                </div>

                <div>
                    <input
                        {...register('password')}
                        id="password"
                        name="password"
                        type="password"

                        placeholder="Password"
                    />
                </div>


                <button className='login_button' type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;