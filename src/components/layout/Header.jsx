import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Header.scss";
import logo from "../../assets/logo/TimeLinkLogo.png";
import { useToast } from "../../context/ToastContext";


export default function Header() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { showToast } = useToast();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div
        className="header-brand"
        onClick={() => navigate("/")}
        role="button"
      >
        <img src={logo} alt="TimeLink logo" className="header-logo" />
      </div>

      <button
        className="header-burger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
      <nav
        ref={menuRef}
        className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}
      >
        <ul className="header-list">
          <li>
            <NavLink
              to="/"
              className="header-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className="header-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
          </li>
          {!isAuthenticated && (
            <>
              <li>
                <NavLink
                  to="/login"
                  className="header-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  className="header-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li>
                <NavLink
                  to="/profile"
                  className="header-link header-profile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {user?.email}
                </NavLink>
              </li>

              <li>
                <button
                  className="header-link header-logout-button"
                  onClick={() => {
                    logout();
                    showToast("Logged out successfully", "success");
                    setIsMenuOpen(false);
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
