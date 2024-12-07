import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminAuth from './components/AdminAuth';
import UserAuth from './components/UserAuth';
import About from './components/About';
import Help from './components/Help';
import Admin from './components/Admin'; // Admin module
import User from './components/User';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<AdminAuth />} />
          <Route path="/user-login" element={<UserAuth />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />

          {/* Admin Routes */}
          <Route path="/admin/*" element={<Admin />}> {/* Admin has nested routes */}
           
          </Route>

          {/* User Routes */}
          <Route path="/user/*" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
