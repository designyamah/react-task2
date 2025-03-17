import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Dashboard App</h1>
      </div>

      <div className="navbar-links">
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          Profile
        </NavLink>
        {isAdmin && (
          <NavLink to="/settings" className="nav-link">
            Settings
          </NavLink>
        )}
      </div>

      <div className="navbar-user">
        {user && (
          <>
            <span className="user-info">
              <strong>{user.username}</strong> ({user.role})
            </span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
