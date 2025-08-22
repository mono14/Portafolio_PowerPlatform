import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      image: "img/solicitudes.png",
      title: "Sistema de Gestión de Solicitudes",
      description:
        "App en Power Apps para registrar y dar seguimiento a solicitudes empresariales con flujos automatizados en Power Automate.",
      badges: ["Power Apps", "Power Automate", "SharePoint"],
    },
    {
      image: "img/flota.png",
      title: "Control de Flota Vehicular",
      description:
        "Sistema integral para el control de uso y consumo de vehículos con dashboards en tiempo real.",
      badges: ["Power Apps", "Power BI", "SQL Server"],
    },
    {
      image: "img/dashboard.png",
      title: "Dashboard Ejecutivo",
      description:
        "Panel de control con métricas clave del negocio, conectando múltiples fuentes de datos empresariales.",
      badges: ["Power BI", "Excel", "REST APIs"],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2>Proyectos Destacados</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              image={p.image}
              title={p.title}
              description={p.description}
              badges={p.badges}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
