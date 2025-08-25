import ProjectCard from "./ProjectCard";
import React, { useState } from "react";
import "./Projects.css"; // Importa los estilos

// 👉 Esto carga todas las imágenes dentro de /assets/imagenes
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("../assets/Img", false, /\.(png|jpe?g|svg)$/));
console.log("IMAGES:", images, Object.keys(images));
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      image: images["menuapp.png"],
      title: "Sistema de menu de  aplicativos",
      description:
        "App en Power Apps para la facilidad de los usuarios para encontrar las herramientas que necesiten",
      badges: ["Power Apps", "SharePoint"],
      details: "Aquí explico más sobre este sistema..."
    },
    {
      image: images["Flotas.png"],
      title: "Flotas",
      description:
        "Sistema de Flotas en donde los usuarios pueden hacer solicitudes, los gestores pueden hacer gestion y decir que conductor pueder ir a este y ademas un control de trayectos para saber kilometraje y gasolina consume",
      badges: ["Power Apps", "Power BI", "Teams", "Online/Offline", "Regional", "SharePoint"],
    },
    {
      image: images["Timesheet.png"],
      title: "Timesheet",
      description:
        "Registros de firmas con proceso de firmas y seguimiento para supervisores y supervisados",
      badges: ["Power BI", "Excel", "Power Apps", "Power Automate", "Sharepoint", "Regional"],
    },
    {
      image: images["ICLa.png"],
      title: "ICLA",
      description:
        "Desarrollo para ingreso y control de informacion de participantes y seguimiento de casos de cada uno",
      badges: ["Power Apps", "Dataverse", "SharePoint"],
    },
    {
      image: images["reservaPuestos.png"],
      title: "Reservas",
      description:
        "Desarrollo para reservar puestos con un seguimiento de que puestos son mas utilizados y que dia hay mas personas en la oficina.",
      badges: ["Power Apps", "SharePoint", "Power BI"],
    },
     {
      image: images["ing_Sal.png"],
      title: "Desarrollo para notificación y control de ingreso y salida de personal",
      description:
        "El sistema tiene como propósito optimizar la comunicación entre áreas y garantizar el control de los elementos asignados al personal durante su ciclo en la organización.",
      badges: ["Power Apps", "SharePoint", "Power BI","Excel"],
    },
    {
      image: images["nomina.png"],
      title: "Gestión de Vacaciones, Permisos y Compensatorios",
      description:
        "Este sistema permite a los colaboradores realizar solicitudes de vacaciones, permisos y compensatorios, así como consultar en todo momento los días disponibles de descanso.",
      badges: ["Power Apps", "SharePoint", "Power BI","Excel"],
    },
  ];

  return (
    <div>

      <section className="projects-section" id="projects">
        <div className="projects-container">
          <h2>Proyectos Destacados</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                //key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                badges={project.badges}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

      </section>
      {/* POP-UP MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre si das click dentro
          >
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
            <button onClick={() => setSelectedProject(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}