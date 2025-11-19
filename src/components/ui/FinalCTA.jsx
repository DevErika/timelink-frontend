import "./FinalCTA.scss";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-content">
        <h2 className="final-cta-title">Ready to start exchanging time?</h2>

        <p className="final-cta-text">
          Create your free TimeLink account and discover how your skills can
          support your neighbors.
        </p>

        <a href="/register" className="btn-primary final-cta-btn">
          Join TimeLink Today
        </a>
      </div>
    </section>
  );
}
