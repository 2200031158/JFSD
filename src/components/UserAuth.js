import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UserAuth.css'; // External CSS for styling

const UserAuth = () => {
    const [showSignIn, setShowSignIn] = useState(true); // Toggle between sign-in and sign-up
    const navigate = useNavigate(); // For handling navigation

    // State for signup form fields
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        phone_no: '',
        username: '',
        password: ''
    });

    // State for sign-in form fields
    const [signInData, setSignInData] = useState({
        username: '',
        password: ''
    });

    // Handler for input change in signup form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpData({
            ...signUpData,
            [name]: value
        });
    };

    // Handler for input change in sign-in form
    const handleSignInInputChange = (e) => {
        const { name, value } = e.target;
        setSignInData({
            ...signInData,
            [name]: value
        });
    };

    // Handler for Sign Up submission
    const handleSignUp = async (event) => {
        event.preventDefault();

        try {
            // Send POST request to the backend for user signup
            const response = await axios.post('http://localhost:8080/api/user/signup', signUpData);
            
            if (response.status === 200) {
                // Redirect to sign-in page after successful signup
                setShowSignIn(true);
            }
        } catch (error) {
            console.error("Signup failed:", error);
            alert("Signup failed, please try again.");
        }
    };

    // Handler for Sign In submission
    const handleSignIn = async (event) => {
        event.preventDefault();
    
        try {
            // Send POST request to backend for user authentication
            const response = await axios.post('http://localhost:8080/api/user/signin', signInData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.status === 200) {
                // Redirect to the user dashboard after successful sign-in
                navigate('/user'); // This will redirect to the '/user' route
            } else {
                alert("Invalid credentials, please try again.");
            }
        } catch (error) {
            console.error("Sign-in failed:", error);
            alert("Sign-in failed, please check your username and password.");
        }
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
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter Username" 
                        required 
                        value={signInData.username} 
                        onChange={handleSignInInputChange} 
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter Password" 
                        required 
                        value={signInData.password} 
                        onChange={handleSignInInputChange} 
                    />
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            ) : (
                <form className="auth-form" onSubmit={handleSignUp}>
                    <h2>User Sign Up</h2>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Enter Full Name" 
                        required 
                        value={signUpData.name} 
                        onChange={handleInputChange} 
                    />
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Enter Email" 
                        required 
                        value={signUpData.email} 
                        onChange={handleInputChange} 
                    />
                    <label>Phone Number</label>
                    <input 
                        type="tel" 
                        name="phone_no"
                        placeholder="Enter Phone Number" 
                        required 
                        value={signUpData.phone_no} 
                        onChange={handleInputChange} 
                    />
                    <label>Username</label>
                    <input 
                        type="text" 
                        name="username"
                        placeholder="Enter Username" 
                        required 
                        value={signUpData.username} 
                        onChange={handleInputChange} 
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Enter Password" 
                        required 
                        value={signUpData.password} 
                        onChange={handleInputChange} 
                    />
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default UserAuth;
