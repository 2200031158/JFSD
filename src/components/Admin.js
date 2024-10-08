import { Link, Routes, Route } from 'react-router-dom';
import Internships from './Internships';
import AddInternship from './AddInternship';
import RemoveInternship from './RemoveInternship';
import './Admin.css'; // External CSS for styling

const Admin = () => {
  return (
    <div className="admin-page">
      {/* Navigation Bar */}
      <nav className="admin-navbar">
        <ul>
          <li>
            <Link to="/admin/internships">Internships</Link>
          </li>
          <li>
            <Link to="/admin/add-internship">Add Internship</Link>
          </li>
          <li>
            <Link to="/admin/remove-internship">Remove Internship</Link>
          </li>
        </ul>
      </nav>

      {/* Routes to different components based on selection */}
      <div className="admin-content">
        <Routes>
          <Route path="/internships" element={<Internships />} />
          <Route path="/add-internship" element={<AddInternship />} />
          <Route path="/remove-internship" element={<RemoveInternship />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
