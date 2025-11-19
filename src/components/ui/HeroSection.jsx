import "./HeroSection.scss";
import heroImage from "../../assets/images/home-community2.png";

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Columna izquierda */}
      <div className="hero-content">
        <h1 className="hero-title">Exchange Time. Build Community.</h1>

        <p className="hero-subtitle">
          Trade skills, share support, and strengthen neighborhood connections through meaningful exchanges.
        </p>

        <div className="hero-buttons">
          <a href="/register" className="btn-primary hero-btn">Get Started</a>
          <a href="/login" className="btn-secondary hero-btn">Sign In</a>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="hero-image-wrapper">
        <img
          src={heroImage}
          alt="Neighbors exchanging help at a local market"
          className="hero-image"
        />
      </div>
    </section>
  );
}
