import React, { useState } from "react";
import './AdminProfile.css'; // Add your custom CSS for styling

const AdminProfile = () => {
  // Static Admin data (replace with dynamic data if needed)
  const [adminDetails] = useState({
    id: 1,
    name: "Ashu",
    email: "ashu@example.com",
    role: "Admin",
    joinedOn: "2023-01-01", // Format: YYYY-MM-DD
  });

  return (
    <div className="admin-profile-container">
      <h1>Admin Profile</h1>
      <div className="admin-details">
        <p><strong>Name:</strong> {adminDetails.name}</p>
        <p><strong>Email:</strong> {adminDetails.email}</p>
        <p><strong>Role:</strong> {adminDetails.role}</p>
        <p><strong>Joined On:</strong> {new Date(adminDetails.joinedOn).toLocaleDateString()}</p>
      </div>
      <div className="admin-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
};

export default AdminProfile;
