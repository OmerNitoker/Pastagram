import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/user.actions';

export function Login() {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await dispatch(loginUser(credentials));
            // Handle successful login (e.g., redirect to dashboard)
        } catch (err) {
            // Handle login error (e.g., show error message)
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
