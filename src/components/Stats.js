import { useEffect } from "react";

export default function Stats() {
  // hook interno para animar los números
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach((counter) => {
      const target = parseInt(counter.textContent);
      let current = 0;
      const increment = target / 120;

      function updateCounter() {
        if (current < target) {
          current += increment;
          counter.textContent =
            Math.ceil(current) +
            (counter.textContent.includes("+") ? "+" : "") +
            (counter.textContent.includes("%") ? "%" : "");
          setTimeout(updateCounter, 25);
        }
      }

      updateCounter();
    });
  }, []); // se ejecuta una sola vez

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-card">
          <span className="stat-number">25+</span>
          <span className="stat-label">Proyectos Completados</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">15+</span>
          <span className="stat-label">Proyectos Liderados</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">500+</span>
          <span className="stat-label">Horas de Desarrollo</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">95%</span>
          <span className="stat-label">Éxito en Proyectos</span>
        </div>
      </div>
    </section>
  );
}
