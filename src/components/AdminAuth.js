import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAuth.css';

const AdminAuth = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (event) => {
        event.preventDefault();
        const adminCredentials = { username, password };

        try {
            const response = await fetch('http://localhost:8080/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(adminCredentials),
            });

            if (response.ok) {
                navigate('/admin');
            } else {
                const errorMessage = await response.text();
                setError(errorMessage || 'Invalid credentials');
                console.error("Login error:", errorMessage);
            }
        } catch (error) {
            setError('An error occurred during login');
            console.error("Login request failed:", error);
        }
    };

    return (
        <div className="admin-auth">
            <div className="auth-card">
                <h1 className="auth-title">Admin Login</h1>
                <form className="auth-form" onSubmit={handleSignIn}>
                    <label className="auth-label">Username</label>
                    <input
                        type="text"
                        className="auth-input"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label className="auth-label">Password</label>
                    <input
                        type="password"
                        className="auth-input"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="submit-button" type="submit">Log In</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default AdminAuth;
