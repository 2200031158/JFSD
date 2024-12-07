import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1234567890',
        address: '123, Main Street, City, Country',
        photo: null,
    });

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        sessionStorage.clear();
        navigate('/user-login');
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUserData((prev) => ({ ...prev, photo: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={styles.profileContainer}>
            <h1 style={styles.heading}>User Profile</h1>

            {/* Profile Photo */}
            <div style={styles.photoSection}>
                <img
                    src={userData.photo || '/images/passport-image.jpg'} // Default image if no photo uploaded
                    alt="Profile"
                    style={styles.photo}
                    onError={(e) => {
                        console.error("Image failed to load:", e.target.src);
                        e.target.src = '/images/default-profile.png'; // Fallback image
                    }}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={styles.fileInput}
                />
            </div>

            {/* User Details */}
            <div style={styles.infoSection}>
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <p><strong>Address:</strong> {userData.address}</p>
            </div>

            {/* Logout Button */}
            <button onClick={handleLogout} style={styles.logoutButton}>
                Logout
            </button>
        </div>
    );
};

const styles = {
    profileContainer: {
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff',
    },
    heading: {
        textAlign: 'center',
        color: '#333',
    },
    photoSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    },
    photo: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px',
        border: '2px solid #4caf50',
    },
    fileInput: {
        marginTop: '10px',
    },
    infoSection: {
        marginBottom: '20px',
    },
    logoutButton: {
        display: 'block',
        width: '100%',
        padding: '10px',
        backgroundColor: '#4caf50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
    },
};

export default UserProfile;
