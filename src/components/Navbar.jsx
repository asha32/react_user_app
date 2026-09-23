import { NavLink } from "react-router-dom";

function Navbar() {
  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">React User App</h2>

        <div className="nav-links">
          <NavLink to="/" className={getNavClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={getNavClass}>
            About
          </NavLink>

          <NavLink to="/users" className={getNavClass}>
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
