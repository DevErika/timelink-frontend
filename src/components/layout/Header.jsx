import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/TimeLinkLogo.png";

export default function Header() {
    return (
        <header className="header">
            <div className="header-brand">
            <img src={logo} alt="TimeLink logo" className="header-logo" />
             </div> 

            <nav className="header-nav">
                <ul className="header-list">
                    <li><NavLink to="/" className="header-link">Home</NavLink></li>
                    <li><NavLink to="/services" className="header-link">Services</NavLink></li>
                    <li><NavLink to="/login" className="header-link">Login</NavLink></li>
                    <li><NavLink to="/register" className="header-link">Register</NavLink></li>
                    <li><NavLink to="/profile" className="header-link">Profile</NavLink></li>
                </ul>
            </nav>
    </ header>
    );
}