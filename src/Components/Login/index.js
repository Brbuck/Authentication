import React from 'react';
import { useAuth } from '../../Contexts/authContext'

import { useForm } from "react-hook-form";

function Login() {
    const { Authenticate } = useAuth()
    const { register, handleSubmit } = useForm();

    async function handleSignIn(data) {
        await Authenticate(data)
        console.log(data)
    }

    return (

        <form onSubmit={handleSubmit(handleSignIn)}>
            <div>
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    {...register('email')}
                    id="email-address"
                    name="email"
                    type="email"

                    placeholder="Email address"
                />
            </div>

            <div>
                <label htmlFor="password" className="sr-only">
                    Password
                </label>
                <input
                    {...register('password')}
                    id="password"
                    name="password"
                    type="password"

                    placeholder="Password"
                />
            </div>


            <button type="submit">Login</button>
        </form>
    );
}

export default Login;