import React from 'react';

const UserHome = ({ userData }) => {
    return (
        <div>
            <h1>Welcome, {userData.name}!</h1> {/* Display the user's name */}
            <p>This is your dashboard. Explore the available internships.</p>
        </div>
    );
};

export default UserHome;
