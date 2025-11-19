import "./CommunitySection.scss";
import communityImage from "../../assets/images/Vecinos-conversando.png"; 
// Cambia el nombre a la imagen real que tú tengas en assets/images

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
      {/* Columna izquierda: imagen */}
      <div className="community-image-wrapper">
        <img
          src={communityImage}
          alt="Community members helping each other"
          className="community-image"
        />
      </div>

      {/* Columna derecha: contenido */}
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
