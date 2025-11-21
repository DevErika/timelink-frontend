import "./Footer.scss";

import instagramIcon from "../../assets/icons/instagram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import blueskyIcon from "../../assets/icons/bluesky.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3 className="footer-brand">TimeLink</h3>
        <p className="footer-text">© 2025 Building Stronger Communities</p>
        <p className="footer-text">One hour at a time.</p>
      </div>

      <div className="footer-center">
        <a href="/how-it-works" className="footer-link">
          How It Works
        </a>
        <a href="/services" className="footer-link">
          Services
        </a>
      </div>

      <div className="footer-right">
        <p className="footer-connect">Connect</p>
        <div className="footer-icons">
          <img src={instagramIcon} alt="Instagram" />
          <img src={facebookIcon} alt="Facebook" />
          <img src={blueskyIcon} alt="Bluesky" />
        </div>
      </div>
    </footer>
  );
}
