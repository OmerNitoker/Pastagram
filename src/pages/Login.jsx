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

    const handleDemoLogin = async () => {
        try {
            const demoUser = await userService.getDemoUser();
            sessionStorage.setItem('loggedinUser', JSON.stringify(demoUser));
            window.location.href = '/';  // Redirige vers la page d'accueil après connexion
        } catch (error) {
            console.error('Demo login failed:', error);
        }
    };

    return (
        <div className="login-container">
            <h1 className='logo'>Vistagram</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="password" id="login-password" name="password" placeholder='User name :' required />
                </div>
                <div className="input-group">
                <input type="password" id="login-password" name="password" placeholder='Password :' required />
                </div>
                <button type="submit" className='login-submit-btn'>Submit</button>
            </form>
            <p>You dont have an acount ? <a href="/signup">Sign Up</a></p>
            <a href="#" className="loged-in-demoUser" onClick={handleDemoLogin}>Demo?</a>
        </div>
    );
}
