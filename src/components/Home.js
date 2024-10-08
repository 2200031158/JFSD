import { useNavigate } from 'react-router-dom';
import './Home.css'; // External CSS for styling

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            {/* Top Navigation Bar */}
            <nav className="navbar">
                <h1 className="navbar-title">INTERNPATH</h1>
                <div className="nav-buttons">
                    <button className="nav-button" onClick={() => navigate('/about')}>About</button>
                    <button className="nav-button" onClick={() => navigate('/help')}>Help</button>
                </div>
            </nav>

            {/* Main Content */}
            <div className="main-content">
                <h1 className="welcome-title">Welcome to the Internship Management System</h1>
                <div className="button-container">
                    <button className="home-button" onClick={() => navigate('/admin-login')}>Admin</button>
                    <button className="home-button" onClick={() => navigate('/user-login')}>User</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
