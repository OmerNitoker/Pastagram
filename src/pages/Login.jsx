import React from 'react';
import { userService } from '../services/user.service';

export function Login() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        try {
            const loggedInUser = await userService.login({ username, password });
            sessionStorage.setItem('loggedinUser', JSON.stringify(loggedInUser));
            window.location.href = '/';  // Redirige vers la page d'accueil ou autre après connexion
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">User name :</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>VYou dont have an acount ? <a href="/signup">Sign Up</a></p>
        </div>
    );
}
