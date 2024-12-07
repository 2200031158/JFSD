// UserMainNavbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserMainNavbar.css';

const UserMainNavbar = () => {
    return (
        <nav style={{
            display: 'flex', 
            gap: '20px', 
            padding: '10px', 
            background: '#1e2a47',  // Updated to match the color in the image
            justifyContent: 'center', 
            alignItems: 'center',
            fontSize: '1.2rem',
            color: 'white' // Text color for contrast
        }}>
            {/* Home Link */}
            <NavLink 
                to="/" 
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', textDecoration: 'none', color: isActive ? '#ff6347' : '#fff' })}
            >
                Home
            </NavLink>

            {/* Other Links */}
            <NavLink 
                to="all-internships"  
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', textDecoration: 'none', color: isActive ? '#ff6347' : '#fff' })}
            >
                All Internships
            </NavLink>

            <NavLink 
                to="enrolled-internships"  
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', textDecoration: 'none', color: isActive ? '#ff6347' : '#fff' })}
            >
                Enrolled Internships
            </NavLink>

            {/* Submit Task Link */}
            <NavLink 
                to="submit-task"  
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', textDecoration: 'none', color: isActive ? '#ff6347' : '#fff' })}
            >
                Submit Task
            </NavLink>
            
            <NavLink 
                to="profile"  
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', textDecoration: 'none', color: isActive ? '#ff6347' : '#fff' })}
            >
                Profile
            </NavLink>

        </nav>
    );
};

export default UserMainNavbar;
