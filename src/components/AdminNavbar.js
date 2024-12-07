import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminNavbar.css'; // Styling for the navbar

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any admin-related session or authentication tokens if stored
    localStorage.removeItem('adminToken');
    sessionStorage.clear();

    // Redirect to the home page
    navigate('/');
  };

  return (
    <nav className="admin-navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <Link to="/admin/admin-home" className="brand">
          InternPath Admin
        </Link>
        <Link to="/admin/admin-home" className="nav-link">Home</Link>
      </div>

      {/* Center Section */}
      <div className="navbar-center">
        <Link to="/admin/internships" className="nav-link">View Internships</Link>
        <Link to="/admin/add-internship" className="nav-link">Add Internship</Link>
        <Link to="/admin/manage-internships" className="nav-link">Manage Internships</Link>
        <Link to="/admin/manage-applications" className="nav-link">Manage Applications</Link>
        <Link to="/admin/reports" className="nav-link">Reports</Link>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <div className="profile-dropdown">
          <img 
            src="/path-to-profile-image.jpg" 
            alt="Admin Profile" 
            className="profile-icon" 
          />
          <div className="dropdown-content">
            {/* Link to the Admin Profile page */}
            <Link to="/admin/profile" className="dropdown-item">View Profile</Link> {/* Correct link to profile */}
            <button 
              className="dropdown-item"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
