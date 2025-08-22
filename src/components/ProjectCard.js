export default function ProjectCard({ image, title, description, badges }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      {badges.map((badge, i) => (
        <div key={i} className="project-badge">
          {badge}
        </div>
      ))}
    </div>
  );
}
