import React from 'react';
import { userService } from '../services/user.service';

export function Signup() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        try {
            const newUser = await userService.signup({ username, password });
            sessionStorage.setItem('loggedinUser', JSON.stringify(newUser));
            window.location.href = '/';  // Redirige vers la page d'accueil ou autre après inscription
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <div className="container">
            <h1>Inscription</h1>
            <form id="signupForm" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">User name :</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
            <p>You have an acount ? <a href="/login">Log in</a></p>
        </div>
    );
}
