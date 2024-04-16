

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../store/actions/user.actions';

export function Signup() {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        fullname: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await dispatch(signupUser(credentials));
            // Handle successful signup (e.g., redirect to dashboard)
        } catch (err) {
            // Handle signup error (e.g., show error message)
        }
    };

    return (
        <div>
            <h1>Signup</h1>
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
                <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    value={credentials.fullname}
                    onChange={handleChange}
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}
