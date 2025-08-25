export default function ProjectCard({ image, title, description, badges, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {badges.map((badge, i) => (
          <div key={i} className="project-badge">
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}
