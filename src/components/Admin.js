import { Routes, Route } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminHome from './AdminHome';
import ViewInternships from './ViewInternships';
import AddInternship from './AddInternship';
import ManageApplications from './ManageApplications'; 
import Reports from './Reports';
import ManageInternships from './ManageInternships'; // Import the ManageInternships component
import AdminProfile from './AdminProfile'; // Import the AdminProfile component

const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Default Route to Admin Home */}
          <Route path="/admin-home" element={<AdminHome />} />

          {/* Other Admin Routes */}
          <Route path="/internships" element={<ViewInternships />} />
          <Route path="/add-internship" element={<AddInternship />} />
          <Route path="/manage-applications" element={<ManageApplications />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/manage-internships" element={<ManageInternships />} /> {/* Added Manage Internships Route */}
          
          {/* Admin Profile Route */}
          <Route path="/profile" element={<AdminProfile />} /> {/* Correct route for the profile */}
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
