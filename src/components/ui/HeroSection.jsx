import "./HeroSection.scss";
import heroImage from "../../assets/images/home-community2.png";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Exchange Time. Build Community.</h1>
          <p>
            Trade skills, share support, and strengthen neighborhood
            connections through meaningful exchanges.
          </p>

          <div className="hero-buttons">
            <a href="/register" className="btn-primary">Get Started</a>
            <a href="/login" className="btn-secondary">Sign In</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Community" />
        </div>
      </div>
    </section>
  );
}
