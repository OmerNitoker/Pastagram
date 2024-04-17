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
        <div className="signup-container">
            <h1 className='logo'>Vistagram</h1>
            <form id="signupForm" onSubmit={handleSubmit}>
                <div className="signup-input-group">
                    <input type="text" id="signup-username" name="username" placeholder='User name :' required />
                </div>
                <div className="input-group">
                    <input type="password" id="signup-password" name="password" placeholder='Password :' required />
                </div>
                <button type="submit" className='signup-submit-btn'>Submit</button>
            </form>
            <p>You have an acount ? <a href="/login">Log in</a></p>
        </div>
    );
}

