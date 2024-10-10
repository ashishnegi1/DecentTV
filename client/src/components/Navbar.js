import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';  // Home icon

function Navbar({ user, handleLogout }) {

    const navigate = useNavigate();
    const onLogout = () => {
      handleLogout();
      navigate('/');
    }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-icon"><FaHome /></Link>
        <Link to="/following">Following</Link>
      </div>

      <div className="navbar-right">
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={onLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
