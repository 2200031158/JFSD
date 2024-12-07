// User.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserMainNavbar from './UserMainNavbar';
import AllInternships from './AllInternships';
import EnrolledInternships from './EnrolledInternships';
import UserProfile from './UserProfile';
import SubmitTask from './SubmitTask';  // Import the SubmitTask component

const User = () => {
    return (
        <div>
            <UserMainNavbar />
            <div style={{ padding: '20px' }}>
                <Routes>
                    {/* Default Route */}
                    <Route path="/" element={<div><h1>Welcome to the User Dashboard!</h1><p>This is where users can manage their internships and profiles.</p></div>} />

                    {/* Ensure paths match the NavLink and Route paths */}
                    <Route path="all-internships" element={<AllInternships />} />
                    <Route path="enrolled-internships" element={<EnrolledInternships />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="submit-task" element={<SubmitTask />} /> {/* New Submit Task route */}
                </Routes>
            </div>
        </div>
    );
};

export default User;