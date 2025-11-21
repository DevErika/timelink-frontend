import "./CommunitySection.scss";
import communityImage from "../../assets/images/Vecinos-conversando.png";

export default function CommunitySection() {
  const highlights = [
    {
      label: "Elder Support",
      text: "Neighbors help with groceries, appointments, and companionship.",
    },
    {
      label: "Kids Exchange",
      text: "Families share language practice, homework help, and creative activities.",
    },
    {
      label: "Skill Swaps",
      text: "Trade tech support, admin help, language exchange, and more.",
    },
  ];

  return (
    <section className="community-section">
      <div className="community-image-wrapper">
        <img
          src={communityImage}
          alt="Community members talking together"
          className="community-image"
        />
      </div>

      <div className="community-content">
        <h2 className="community-title">A Stronger Community</h2>

        <div className="community-highlights">
          {highlights.map((item) => (
            <article key={item.label} className="community-card">
              <h3 className="community-card-label">{item.label}</h3>
              <p className="community-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
