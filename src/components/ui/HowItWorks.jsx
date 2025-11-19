import "./HowItWorks.scss";

export default function HowItWorks() {
  const steps = [
    {
      title: "Share Your Skills",
      description:
        "Offer tutoring, tech support, errands or any skill you feel comfortable sharing.",
    },
    {
      title: "Earn Time Credits",
      description:
        "For every hour you help someone, you earn one TimeLink credit.",
    },
    {
      title: "Redeem Services",
      description:
        "Use your credits to receive help from others in the community.",
    },
  ];

  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How TimeLink Works</h2>

      <div className="how-it-works-grid">
        {steps.map((step) => (
          <article key={step.title} className="how-it-works-card">
            <h3 className="how-it-works-card-title">{step.title}</h3>
            <p className="how-it-works-card-text">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
