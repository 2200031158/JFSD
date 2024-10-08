import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserAuth.css'; // External CSS for styling

const UserAuth = () => {
    const [showSignIn, setShowSignIn] = useState(true); // Toggle between sign-in and sign-up
    const navigate = useNavigate(); // For handling navigation

    // Handler for Sign Up submission
    const handleSignUp = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // You can add logic to validate and submit the data here

        // Redirect to User component after sign up
        navigate('/user'); 
    };

    // Handler for Sign In submission
    const handleSignIn = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // You can add logic to validate and authenticate the user here

        // Redirect to User component after sign in
        navigate('/user'); 
    };

    return (
        <div className="user-auth">
            <h1>User Authentication</h1>
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
                    <h2>User Sign In</h2>
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" required />
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" required />
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            ) : (
                <form className="auth-form" onSubmit={handleSignUp}>
                    <h2>User Sign Up</h2>
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

export default UserAuth;
