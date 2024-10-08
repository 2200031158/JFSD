import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAuth.css'; // External CSS for styling

const AdminAuth = () => {
    const [showSignIn, setShowSignIn] = useState(true);
    const navigate = useNavigate(); // For handling navigation

    // Handler for Sign Up submission
    const handleSignUp = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // You can add logic to validate and submit the data here

        // Redirect to Admin component after sign up
        navigate('/admin'); 
    };

    // Handler for Sign In submission
    const handleSignIn = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // You can add logic to validate and authenticate the admin here

        // Redirect to Admin component after sign in
        navigate('/admin'); 
    };

    return (
        <div className="admin-auth">
            <h1>Admin Authentication</h1>
            <div className="auth-buttons">
                <button 
                    className={`auth-button ${showSignIn ? 'active' : ''}`} 
                    onClick={() => setShowSignIn(true)}
                >
                    Sign In
                </button>
                <button 
                    className={`auth-button ${!showSignIn ? 'active' : ''}`} 
                    onClick={() => setShowSignIn(false)}
                >
                    Sign Up
                </button>
            </div>

            {/* Conditionally Render Sign In or Sign Up form */}
            {showSignIn ? (
                <form className="auth-form" onSubmit={handleSignIn}>
                    <h2>Admin Sign In</h2>
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" required />
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" required />
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            ) : (
                <form className="auth-form" onSubmit={handleSignUp}>
                    <h2>Admin Sign Up</h2>
                    <label>Name</label>
                    <input type="text" placeholder="Enter Full Name" required />
                    <label>Email</label>
                    <input type="email" placeholder="Enter Email" required />
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter Phone Number" required />
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" required />
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" required />
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" required />
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default AdminAuth;
